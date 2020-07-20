import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as Constants from './Const';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {
    const classes = Constants.useStyles();

    return (
        <AppBar position="relative" color="inherit">
            <Toolbar>
                <img
                    src={require('../img/logo.png')}
                    width="30" height="30"
                    className="d-inline-block align-top"
                    alt=" "></img>
                <Typography variant="h6" color="inherit">
                    Santhani Financial Consultancy
          </Typography>
            </Toolbar>
        </AppBar>

    )
}