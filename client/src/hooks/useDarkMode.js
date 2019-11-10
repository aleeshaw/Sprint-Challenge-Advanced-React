import { useLocalStorage } from './useLocalStorage.js';
import { useEffect } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage ("darkModeOn");
  
  useEffect(() => {
    isDarkMode 
      ? document.querySelector("body").classList.add("dark-mode") 
      : document.querySelector("body").classList.remove("dark-mode");
    isDarkMode
      ?document.querySelector("Table").classList.add("table-dark")
      : document.querySelector("Table").classList.remove("table-dark");
  },[isDarkMode]);
  return [isDarkMode, setIsDarkMode]
};