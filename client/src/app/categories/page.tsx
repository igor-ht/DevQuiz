'use client';

import { useState } from 'react';
import styles from './page.module.scss';

export default function Categories() {
  const [category, setCategory] = useState('Front End');

  

	return (
		<div className={styles.categoriesContainer}>
			<h1>Categories</h1>

			<div className={styles.tagNames}>
				<span>Front End</span>
				<span>Back End</span>
				<span>Programming Languages</span>
			</div>

			<div className={styles.quizzes}>
				<ul>
					<li>
						<section>HTML</section> <section>Total Questions: 10</section> <button type="button">Start</button>
					</li>
					<li>
						<section>CSS</section> <section>Total Questions: 10</section> <button type="button">Start</button>
					</li>
					<li>
						<section>Javascript</section> <section>Total Questions: 10</section> <button type="button">Start</button>
					</li>
				</ul>
			</div>
		</div>
	);
}
