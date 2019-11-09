import React from 'react';

const Nav = () => {

  submitHanlder

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
              className="form-button"
            />
            Light
          </label>

          <label>
            <input
              type="radio"
              name="light"
              value="light"
              className="form-button"
            />
            Dark
          </label>

          <label>
            <input
              type="radio"
              name="light"
              value="light"
              className="form-button"
            />
            Candy
          </label>

          <button type="submit">
            Save
          </button>
        </form>
      </div>
    </nav>
  )
};

export default Nav;