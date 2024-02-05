'use client';

import Form from '../components/Form';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { useFormState } from 'react-dom';
import { signUp } from '@/utils/actions';

export default function SignUp() {
	const [state, formAction] = useFormState(signUp, { username: '', email: '', password: '', confirmPassword: '' });

	return (
		<Form action={formAction}>
			<Input
				type="text"
				name="username"
				placeholder="Your username here"
			/>
			<Input
				type="email"
				name="email"
				placeholder="Your email here"
			/>
			<Input
				type="password"
				name="password"
				placeholder="Your password here"
			/>
			<Input
				type="password"
				name="confirmPassword"
				placeholder="Confirm your password"
			/>
			<SubmitButton />
		</Form>
	);
}
