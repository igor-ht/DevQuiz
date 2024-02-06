import CategoriesContextProvider from '@/utils/context/CategoriesContextProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
	return <CategoriesContextProvider>{children}</CategoriesContextProvider>;
}
