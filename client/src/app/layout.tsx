import '@/styles/globals.scss';
import type { Metadata } from 'next';
import Header from './_layout/Header/Header';
import Main from './_layout/Main/Main';
import { FontKarla, FontMerriweather, FontPlusJakarta } from '@/utils/fonts';

export const metadata: Metadata = {
	title: 'Dev Quiz 🕹',
	description: 'Generated by create next app',
	icons: ['/icon.svg'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${FontKarla.variable} ${FontPlusJakarta.variable} ${FontMerriweather.variable}`}>
				<Header />
				<Main>{children}</Main>
			</body>
		</html>
	);
}
