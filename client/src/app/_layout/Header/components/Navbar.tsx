'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<nav style={{ right: menuOpen ? `0` : '-20em' }}>
				<ul>
					<li>
						<Link href={'/'}>Home</Link>
					</li>
					<li>
						<Link href={'/categories'}>Categories</Link>
					</li>
					<li>
						<Link href={'/signin'}>Sign In</Link>
					</li>
					<li>
						<Link href={'/signup'}>Sign Up</Link>
					</li>
				</ul>
			</nav>
			<span>
				<button
					type="button"
					onClick={handleMenu}>
					<Image
						src={'/menu.svg'}
						alt="menu"
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
