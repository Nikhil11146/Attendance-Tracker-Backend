import { Router } from "express";
import {deleteUser, getAllUsers, getUserByID, updateUser} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/', getAllUsers);

userRouter.get('/:id', getUserByID);

userRouter.put('/:id', updateUser);

userRouter.delete('/:id', deleteUser);

export default userRouter;