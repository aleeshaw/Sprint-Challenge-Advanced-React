import React, { useState } from 'react';
import ThemeDropdown from './DropdownMenu';
import { useDarkMode } from '../hooks/useDarkMode';
import { useCandyMode } from '../hooks/useCandyMode';
import './Nav.css';


const Nav = () => {

  const [darkMode, setDarkMode] = useDarkMode(false);

  const [candyMode, setCandyMode] = useCandyMode(false);

  const darkModeOn = event => {
    setDarkMode(!darkMode);
  };

  const candyModeOn = event => {
    setCandyMode(!candyMode);
  };

  

  return(
    <nav className="nav">
      <h1> Women's World Cup Player Search Stats</h1>

      <ThemeDropdown 
        eventHandler1={darkModeOn}
        eventHandler2={candyModeOn}
      />
      
    </nav>
  )
};

export default Nav;