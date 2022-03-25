import React from "react";
import Link from '@mui/material/Link';

export const Header = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href="#">Homepage</Link>
          </li>
          <li>
            <Link href="/favorite">Favorite Gallery</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
