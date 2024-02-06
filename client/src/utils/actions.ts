'use server';

import { ENDPOINT } from '@/config';

export const signIn = async (prevState: any, formData: FormData) => {
	const email = formData.get('email');
	const password = formData.get('password');

	const response = await fetch(`${ENDPOINT}/user/signin`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	});

	if (response.status === 401) return { error: 'Invalid email or password' };
	return response.json();
};

export const signUp = async (prevState: any, formData: FormData) => {
	const username = formData.get('username');
	const email = formData.get('email');
	const password = formData.get('password');
	const confirmPassword = formData.get('confirmPassword');

	if (username?.toString().length! < 4) return { error: 'Username must be at least 4 characters' };
	if (password?.toString().length! < 6) return { error: 'Password must be at least 6 characters' };
	if (password?.toString() !== confirmPassword?.toString()) return { error: 'Confirm password did not match' };

	const response = await fetch(`${ENDPOINT}/user/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ username, email, password }),
	});

	if (response.status === 400) return { error: 'Email already registered' };
	if (response.status === 500) return { error: 'Server error' };
	return response.json();
};
