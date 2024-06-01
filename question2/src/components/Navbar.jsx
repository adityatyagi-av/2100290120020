import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Question 2 : React APP
                </Typography>
                <Link to="/" style={{ textDecoration: 'none', color: 'white', marginRight: '15px' }}>Home</Link>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
