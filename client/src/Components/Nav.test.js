import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('renders without crashing', () => {
  rtl.render(<Nav />);
});
