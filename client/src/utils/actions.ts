'use server';

import { ENDPOINT } from '@/config';

export const signIn = async (prevState: any, formData: FormData) => {
	const email = formData.get('email');
	const password = formData.get('password');

	const response = await fetch(`${ENDPOINT}/user/signin`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	});

	if (response.status === 401) throw new Error('Invalid email or password');
	return response.json();
};

export const signUp = async (prevState: any, formData: FormData) => {
	const username = formData.get('username');
	const email = formData.get('email');
	const password = formData.get('password');
	const confirmPassword = formData.get('confirmPassword');

	if (password !== confirmPassword) throw new Error('Passwords do not match');

	const response = await fetch(`${ENDPOINT}/user/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ username, email, password }),
	});

	if (response.status === 400) throw new Error('User already exists');
	if (response.status === 500) throw new Error('Error creating user');
	return response.json();
};
