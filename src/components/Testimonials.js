import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import * as Constants from './Const';
import Box from '@material-ui/core/Box';

function createData(AIcon, Name, Hobby, Desc) {
    return { AIcon, Name, Hobby, Desc };
}

const cads = [
    createData('VG',
        'Vijayalakshmi',
        'Age: 24',
        "I started my job and ended up paying lot of tax , no one really simplified things for me . Thanks for our interactions now I know how to balance my tax and save for my goals"),
    createData('AS',
        'Arun',
        'Aged 30',
        "My new job in a new city didn’t allow me to save much , I got very good advice to save small yet smart towards a dream . Now I have my own house"),
    createData('KP',
        'Kumar P',
        'Aged 40 ',
        "There are no retirement benefits in a private job , my goals were identified and we started on a path for a secure & wealthy post work life investments"),
    createData('AS',
        'Arun',
        'Aged 30',
        "My new job in a new city didn’t allow me to save much , I got very good advice to save small yet smart towards a dream . Now I have my own house"),

];

export default function Testimonial() {
    const classes = Constants.useStyles();
    return (
        <div className={classes.testGrid}>
            <Typography className={classes.whitetext} variant="h5" align="center" color="textSecondary" gutterBottom>
                <Box fontWeight="fontWeightBold" m={1}>
                    From Our Users
                    </Box>
            </Typography>
            <Grid container spacing={1}>
                {cads.map((cad) => (
                    <Paper className={classes.testimonial} key={cad.Name}>
                        <Grid item xl>
                            <FormatQuoteIcon />
                            <Typography align="center" className={classes.description}>{cad.Desc}</Typography>
                            <br />
                            <Typography align="center" className={classes.title}>{cad.Name}</Typography>
                            <Typography align="center" className={classes.subtitle}>{cad.Hobby}</Typography>
                        </Grid>
                    </Paper>
                ))}
            </Grid>
        </div>
    );
}