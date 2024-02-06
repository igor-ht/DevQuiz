'use client';

import { createContext } from 'react';
import CategoriesContextApi from './CategoriesContextApi';

export const CategoriesContext = createContext<any>(null);

export default function CategoriesContextProvider({ children }: { children: React.ReactNode }) {
	return <CategoriesContext.Provider value={CategoriesContextApi()}>{children}</CategoriesContext.Provider>;
}
