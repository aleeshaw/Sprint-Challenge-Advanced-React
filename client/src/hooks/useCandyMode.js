import { useLocalStorage } from './useLocalStorage.js';
import { useEffect } from 'react';

export function useCandyMode() {
  const [isCandyMode, setIsCandyMode] = useLocalStorage ("candyModeOn");
  
  useEffect(() => {
    isCandyMode 
    ? document.querySelector("body").classList.add("candy-mode") : document.querySelector("body").classList.remove("candy-mode")
  },[isCandyMode]);
  return [isCandyMode, setIsCandyMode]
};