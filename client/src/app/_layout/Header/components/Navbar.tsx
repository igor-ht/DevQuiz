'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';

export default function Navbar() {
	const { status } = useSession();
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const nav = document.querySelector('nav');
			if (e.target instanceof HTMLButtonElement && !nav?.contains(e.target.parentElement)) return;
			if (e.target instanceof HTMLLIElement && nav?.contains(e.target.parentElement)) return;
			setMenuOpen(false);
		};

		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	}, []);

	return (
		<>
			<nav style={{ right: menuOpen ? `0` : '-25em' }}>
				<ul>
					<li>
						<Link href={'/'}>Home</Link>
					</li>
					<li>
						<Link href={'/categories'}>Categories</Link>
					</li>
					{status !== 'authenticated' ? (
						<>
							<li>
								<Link href={'/signin'}>
									<button type="button">Sign In</button>
								</Link>
							</li>
							<li>
								<Link href={'/signup'}>
									<button type="button">Sign Up</button>
								</Link>
							</li>
						</>
					) : (
						<>
							<li>
								<Link href={'/dashboard'}>
									<button type="button">Dashboard</button>
								</Link>
							</li>
							<li>
								<span style={{ display: 'flex', alignItems: 'center', minHeight: '65px', marginLeft: '0.5rem' }}>
									<button
										type="button"
										style={{ backgroundColor: '#990d0d' }}
										onClick={() => signOut()}>
										Sign Out
									</button>
								</span>
							</li>
						</>
					)}
				</ul>
			</nav>
			<span>
				<button
					type="button"
					onClick={() => setMenuOpen(!menuOpen)}>
					<Image
						src={'/menu.svg'}
						alt="menu"
						style={{ transform: menuOpen ? 'rotateZ(90deg)' : 'none' }}
						width={100}
						height={100}
						priority
						quality={50}
					/>
				</button>
			</span>
		</>
	);
}
