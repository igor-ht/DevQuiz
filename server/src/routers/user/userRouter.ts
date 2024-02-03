import express from 'express';

const userRouter = express.Router();

userRouter.get('/:id', (req, res) => {
	res.send(`User route with id: ${req.params.id}`);
});

export default userRouter;
