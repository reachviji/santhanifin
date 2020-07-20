import React from 'react';
import Typography from '@material-ui/core/Typography';
import Copyright from './copyright';
import * as Constants from './Const';

export default function Footer() {
    const classes = Constants.useStyles();
    return (

        <footer className={classes.footer}>
            <Typography className={classes.footertext} align="center" gutterBottom>
                Disclaimer: Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing.
        </Typography>
            <Typography className={classes.footertext} align="center" color="textSecondary" component="p">
                Past performance is not an indicator of future returns.
        </Typography>
            <Copyright />
        </footer>
    );
}