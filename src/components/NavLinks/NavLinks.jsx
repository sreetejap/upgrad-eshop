import React from 'react';
import { Link } from 'react-router-dom';
import './navlinks.css';
import { Typography } from '@mui/material';

export default function NavLinks() {
  return (
    <div id='navlinks'>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Typography color={'whitesmoke'}>Home</Typography>
      </Link>
      <Link to={'/login'} style={{ textDecoration: 'none' }}>
        <Typography color={'whitesmoke'}>Login</Typography>
      </Link>
      <Link to={'/signup'} style={{ textDecoration: 'none' }}>
        <Typography color={'whitesmoke'}>SignUp</Typography>
      </Link>
    </div>
  );
}
