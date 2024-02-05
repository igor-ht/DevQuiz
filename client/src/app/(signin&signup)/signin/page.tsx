'use client';

import Form from '../components/Form';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { useFormState } from 'react-dom';
import { signIn } from '@/utils/actions';

export default function SignIn() {
	const [state, formAction] = useFormState(signIn, { email: '', password: '' });
	
	return (
		<Form action={formAction}>
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
			<SubmitButton />
		</Form>
	);
}
