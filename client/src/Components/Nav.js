import React from 'react';

const Nav = () => {

  const submitHandler = event => {
    event.preventDefault();
  }

  const clickHandler = event => {
    console.log(`${event.target.value} theme selected`)
  }

  return(
    <nav className="nav">
      <h1> Women's World Cup Player Search Stats</h1>

      <div className="theme-switches">
        <form onSubmit={submitHandler}>
          <label>
            <input
              type="radio"
              name="light"
              value="light"
              className="form-button"
              onClick={clickHandler}
            />
            Light
          </label>

          <label>
            <input
              type="radio"
              name="light"
              value="dark"
              className="form-button"
              onClick={clickHandler}
            />
            Dark
          </label>

          <label>
            <input
              type="radio"
              name="light"
              value="candy"
              className="form-button"
              onClick={clickHandler}
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