
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Marketing Tech
      </Typography>
      <Button color="inherit" component={RouterLink} to="/">Home</Button>
      <Button color="inherit" component={RouterLink} to="/features">Features</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
