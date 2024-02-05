import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
	const { pending, data, method, action } = useFormStatus();
	
	return (
		<button
			type="submit"
			disabled={pending}>
			Submit
		</button>
	);
}
