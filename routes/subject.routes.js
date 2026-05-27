import { Router } from "express";

const subjectRouter = Router();

subjectRouter.get('/', (req, res) => {
    res.send('GET all Subjects');
})

subjectRouter.get('/:id', (req, res) => {
    res.send('GET subject details ' + req.params.id);
})

subjectRouter.put('/:id', (req, res) => {
    res.send('PUT subject details');
})

subjectRouter.delete('/:id', (req, res) => {
    res.send('DELETE subject details');
})

export default subjectRouter;