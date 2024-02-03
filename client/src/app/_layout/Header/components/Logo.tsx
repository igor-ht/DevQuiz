import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
	return (
		<div>
			<Link href={'/'}>
				<Image
					src="/logo.svg"
					alt="Dev Quiz"
					width={100}
					height={100}
					priority
					quality={50}
				/>
			</Link>
		</div>
	);
}
