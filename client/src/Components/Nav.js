import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useCandyMode } from '../hooks/useCandyMode';

const Nav = () => {

  const [darkMode, setDarkMode] = useDarkMode(false);

  const [candyMode, setCandyMode] = useCandyMode(false);

  const darkModeOn = event => {
    console.log(`${event.target.value} theme selected`)
    setDarkMode(!darkMode);
  };

  const candyModeOn = event => {
    console.log(`${event.target.value} theme selected`)
    setCandyMode(!candyMode);
  };

  return(
    <nav className="nav">
      <h1> Women's World Cup Player Search Stats</h1>

      <div className="theme-switches">
        <form>
          <label>
            <input
              type="radio"
              name="light"
              value="light"
              // onClick={clickHandler}
            />
            Light
          </label>

          <label>
            <input
              type="radio"
              name="light"
              value="dark"
              onClick={darkModeOn}
              className={darkMode ? 'toggle toggled' : 'toggle'}
            />
            Dark
          </label>

          <label>
            <input
              type="radio"
              name="light"
              value="candy"
              className="form-button"
              onClick={candyModeOn}
            />
            Candy
          </label>
        </form>
      </div>
    </nav>
  )
};

export default Nav;