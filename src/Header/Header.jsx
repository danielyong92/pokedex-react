import React from "react";
import Link from '@mui/material/Link';
import "./Header.css";

export const Header = () => {
  return (
    <>
      <div className="wrapper">
        <h3> POKEDEX GALLERIA</h3>
        <ul className="nav">
          <li className="ul">
            <Link href="/">Homepage</Link>
          </li>
          <li className="ul">
            <Link href="/favorite">Favorite Gallery</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
