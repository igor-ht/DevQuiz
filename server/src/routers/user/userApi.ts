import { Request, Response } from 'express';
import { prisma } from '@/model/client';

export async function getUserSignin(req: Request, res: Response) {
	console.log(req.body);
	const { email, password } = req.body;
	const user = await prisma.user.findFirst({
		where: {
			email: email,
			password: password,
		},
	});

	if (!user) return res.status(401).json({ message: 'Invalid email or password' });
	return res.status(200).json({ id: user.id, email: user.email, username: user.userName, role: user.Role });
}

export async function postUserSignup(req: Request, res: Response) {
	console.log(req.body);
	const { username, email, password } = req.body;

	const hasUser = await prisma.user.findFirst({
		where: {
			OR: [
				{
					userName: username,
				},
				{
					email: email,
				},
			],
		},
	});
	if (hasUser) return res.send(400).json({ message: 'User already exists' });

	const newUser = await prisma.user.create({
		data: {
			userName: username,
			email: email,
			password: password,
		},
	});
	if (!newUser) return res.status(500).json({ message: 'Error creating user' });
	return res.send(200).json({ id: newUser.id, email: newUser.email, username: newUser.userName, role: newUser.Role });
}
