import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import * as Constants from './Const';

export default function Details() {
    const color = Constants.styles;
    const classes = Constants.useStyles();
    return (
        <Paper elevation={0} className={classes.fullwidth}>
            <div className={classes.paper}>
                <Paper className={classes.bcolor} elevation={0}>
                    <Typography className={classes.whitetext} variant="h6" align="center">Established</Typography>
                    <br />
                    <Typography gutterBottom variant="h4" align="center" component="h2">
                        1982
                </Typography>
                </Paper>
                <Paper className={classes.bcolor} elevation={0}>
                    <Typography className={classes.whitetext} variant="h6" align="center">Trusted By</Typography>
                    <br />
                    <Typography gutterBottom variant="h4" align="center" component="h2">
                        1000+
                </Typography>
                </Paper>
                <Paper className={classes.bcolor} elevation={0}>
                    <Typography className={classes.whitetext} variant="h6" align="center">Cities</Typography>
                    <br />
                    <Typography gutterBottom variant="h4" align="center" component="h2">
                        2
                </Typography>
                </Paper>
                <Paper className={classes.bcolor} elevation={0}>
                    <Typography className={classes.whitetext} variant="h6" align="center">Investment Size</Typography>
                    <br />
                    <Typography gutterBottom variant="h4" align="center" component="h2">
                        Rs 20+ Crores
                </Typography>
                </Paper>
            </div>
        </Paper>
    );
}