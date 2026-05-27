import express from 'express';
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import subjectRouter from "./routes/subject.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// arcjet middlewareHello World!

app.use('/v1/api/users', userRouter);
app.use('/v1/api/subjects', subjectRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

export default app;
