interface CategoryTagProps extends React.ComponentPropsWithoutRef<'span'> {
	children: React.ReactNode;
}

export default function CategoryTag({ children, ...rest }: CategoryTagProps) {
	return <span {...rest}>{children}</span>;
}
