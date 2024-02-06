import styles from './page.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
	return <div className={styles.quizLayout}>{children}</div>;
}
