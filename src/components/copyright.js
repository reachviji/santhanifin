import React from 'react';
import Typography from '@material-ui/core/Typography';
import * as Constants from './Const';

export default function Copyright() {
    const classes = Constants.useStyles();
    return (
        <Typography className={classes.description} variant="body2" color="textSecondary" align="center">
            {'Copyright © Santhani Financial Consultancy'}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}