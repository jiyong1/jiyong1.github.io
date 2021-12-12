import { createContext, useContext } from 'react';

const DarkContext = createContext<string>('dark');

export function useDarkmode(): string {
  return useContext(DarkContext);
}

export default DarkContext;
