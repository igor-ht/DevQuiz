'use server';

export const signIn = async (prevState: any, formData: FormData) => {
	const email = formData.get('email');
	const password = formData.get('password');

	console.log(email, password);

	await new Promise((resolve) => setTimeout(resolve, 2000));
	// handle signin here
	return { email, password };
};

export const signUp = async (prevState: any, formData: FormData) => {
	const username = formData.get('username');
	const email = formData.get('email');
	const password = formData.get('password');
	const confirmPassword = formData.get('confirmPassword');

	console.log(username, email, password, confirmPassword);

	// handle signup here
	return { username, email, password, confirmPassword };
};
