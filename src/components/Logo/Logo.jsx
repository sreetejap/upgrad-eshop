import React from 'react';
import { Icon, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './logo.css';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div id='logo'>
      <Link to={'/'}>
        <Icon
          component={ShoppingCartIcon}
          sx={{ color: 'whitesmoke', mt: 1, mb: 1 }}
          fontSize='large'
        />
      </Link>
      <Typography variant='inherit' sx={{ color: 'whitesmoke', mt: 1, mb: 1 }}>
        Upgrad E-Shop
      </Typography>
    </div>
  );
}
