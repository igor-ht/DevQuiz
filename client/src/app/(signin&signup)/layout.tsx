import styles from './layout.module.scss';

export default function FormLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.formContainer}>
			<div className={styles.formCard}>{children}</div>
		</div>
	);
}
