import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as Constants from './Const';

export default function Navigation() {
    const classes = Constants.useStyles();

    return (
        <AppBar position="relative" color="inherit">
            <Toolbar className={classes.toolbar}>
                <img
                    src={require('../img/logo.png')}
                    width="25" height="25"
                    className="d-inline-block align-top"
                    alt=" "></img>
                <Typography>
                    Santhani Financial Consultancy
          </Typography>
            </Toolbar>
        </AppBar>

    )
}