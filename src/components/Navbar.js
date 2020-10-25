import React, { useContext } from 'react';
import { CheckContext } from '../contexts/CheckContext';

const Navbar = () => {
  const { checks } = useContext(CheckContext);
  return (
    <div className="navbar">
      <h1>my checkList</h1>
      <p>Currently i need to buy {checks.length} items</p>
    </div>
  );
}

export default Navbar;