import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link href='/'>
        <FaHome size={24} />
      </Link>
      <Link href='/login'>
        <FaSignInAlt size={24} />
      </Link>
      <Link href='/profile'>
        <FaUserAlt size={24} />
      </Link>
    </Nav>
  );
}
