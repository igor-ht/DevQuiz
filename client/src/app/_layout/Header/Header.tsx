import styles from './Header.module.scss';
import Navbar from './components/Navbar';
import Logo from './components/Logo';

export default function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<Navbar />
		</header>
	);
}
