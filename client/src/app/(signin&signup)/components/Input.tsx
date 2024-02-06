interface InputProps {
	label: string;
	name: string;
	type: string;
	placeholder: string;
}

export default function Input(props: InputProps) {
	return (
		<span>
			<label htmlFor={props.name}>{props.label.toUpperCase()}</label>
			<input
				type={props.type}
				id={props.name}
				name={props.name}
				placeholder={props.placeholder}
				autoComplete={props.name}
				required
			/>
		</span>
	);
}
