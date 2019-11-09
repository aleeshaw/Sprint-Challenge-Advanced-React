import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useCandyMode } from '../hooks/useCandyMode';

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

      <div className="theme-buttons">
        <p>Themes</p>
        <div
          onClick={darkModeOn}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        >
          Dark
        </div>

        <div
          className="form-button"
          onClick={candyModeOn}
          value="candy"
        >
          Candy
        </div>   
      </div>
    </nav>
  )
};

export default Nav;