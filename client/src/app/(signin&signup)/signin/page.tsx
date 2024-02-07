'use client';

import { handleSignIn } from '@/utils/actions';
import Form from '../components/Form';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function SignIn() {
	// const router = useRouter();
	const [state, formAction] = useFormState(handleSignIn, { email: '', password: '' });

	if (state?.id && state?.email && state?.username && state?.role) signIn('credentials', { ...state, redirect: false });

	return (
		<Form action={formAction}>
			<Input
				type="email"
				name="email"
				placeholder="Your email here"
				label="email"
			/>
			<Input
				type="password"
				name="password"
				placeholder="Your password here"
				label="password"
			/>
			<span>
				<p style={{ color: state?.error ? 'red' : 'transparent' }}>{state?.error || 'No error'}</p>
			</span>
			<SubmitButton />
		</Form>
	);
}
