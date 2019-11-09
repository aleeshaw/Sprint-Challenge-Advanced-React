import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ThemeDropdown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Themes
        </DropdownToggle>

      <DropdownMenu>
        <DropdownItem header>
          Pick a theme!
        </DropdownItem>

        <DropdownItem 
          onClick={props.eventHandler1}
        >
          Dark
        </DropdownItem>

        <DropdownItem divider />

        <DropdownItem
          onClick={props.eventHandler2}
        >
          Candy
        </DropdownItem>

      </DropdownMenu>
    </Dropdown>
  );
}

export default ThemeDropdown;