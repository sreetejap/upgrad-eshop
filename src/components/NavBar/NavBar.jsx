import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import './navbar.css';
import Logo from '../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';

export default function NavBar() {
  return (
    <div id='navbar'>
      <Logo />
      <TextField
        id='search'
        placeholder='Search...'
        autoComplete='off'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Search sx={{ color: 'whitesmoke' }} />
            </InputAdornment>
          ),
        }}
        variant='outlined'
        size='small'
      />
      <NavLinks />
    </div>
  );
}
