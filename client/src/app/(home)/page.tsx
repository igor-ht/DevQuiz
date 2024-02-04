import styles from './page.module.scss';

export default function Home() {
	return (
		<div className={styles.home}>
			<section>
				<h1>Enjoy and learn!</h1>
				<span>
					<p>Have fun taking quick quizzes to check your general knowlodge.</p>
					<p>
						You can find many different ones about any subjects from <b>front-end</b>, <b>back-end</b> and more!
					</p>
				</span>
			</section>
		</div>
	);
}
