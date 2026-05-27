import mongoose from "mongoose";
import User from "../models/user.model.js";
import ApiError from "../classes/apiError.class.js";
import jwt from "jsonwebtoken";
import {JWT_EXPIRES_IN, JWT_SECRET} from "../config/env.js";
import bcrypt from "bcrypt";
import { ADMIN_KEY } from "../config/env.js";

export const signUp = async(req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        let { name, password, role, key } = req.body;
        const existingUser = await User.findOne({ name });

        if(existingUser) {
            throw new ApiError(409, "User already exists");
        }

        if(key === ADMIN_KEY) role = 'admin';
        else role = 'user';

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const [newUser] = await User.create([{ name, password: hashedPassword, role }], { session });

        const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: {
                token,
                user: newUser
            }
        })
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const signIn = async(req, res, next) => {
    try {
        const { name, password } = req.body;

        const user = await User.findOne({ name }).select("+password");

        if(!user) {
            throw new ApiError(402, "Incorrect username or password");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) {
            throw new ApiError(402, "Incorrect username or password");
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        res.status(201).json({
            success: true,
            message: "User signed in successfully",
            data: {
                token,
                user: user
            }
        })

    } catch (error) {
        next(error);
    }
}

export const signOut = async(req, res, next) => {}