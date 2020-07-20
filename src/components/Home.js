import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import EmailIcon from '@material-ui/icons/Email';
import * as Constants from '../components/Const';
import ReactTypingEffect from 'react-typing-effect';

export default function Home() {
    const classes = Constants.useStyles();
    return (
        <div className={classes.heroContent}>
            <Container maxWidth="xl">
                <Typography className={classes.typing} align="center" variant="h4">
                    Welcome!
                    </Typography>
                <Typography align="center" color="textSecondary" paragraph>
                    Santhani Financial Services, established in 1982 , has been a pioneer in
                    wealth creation and tax saving investments. Over 1000+ patrons belong to all
                    walks of life – from retirees,1st jobbers , maids, peons , high flying lawyers,
                    doctors and IT professionals .We offer the full range of investment products
                    from LIC , Post office schemes to  equity/debt funds. Specialists in post
                    retirement investments plan as well as for youngsters starting their career
                    and have 40+ years of helping ‘accomplish one’s dreams ‘.
                    Deep expertise in various financial instruments , tax implications and potential
                    returns coupled with the years of personalized investment experience of
                    Dr B Sekar ( Scientist and Phd) and Mrs Santhanalakshmi , each investment is
                    a measured approach to provide the best and safest returns, as one would
                    do for their own friends. The simplifying of various complex investment
                    options and service mindset has won us many accolades
                    – HDFC top performer 2008 , LIC Top investor  - 2010, etc.
                    Best investment consultant in Lucknow , UP and Bangalore , karnataka
            </Typography>
                <Grid container spacing={5} justify="center">
                    <Paper className={classes.heroContact} elevation={0}>
                        <Grid className={classes.heroContact} item>
                            <Typography align="center">
                                <PhoneInTalkIcon />{' '} +91 - 9936468708
                            </Typography>
                        </Grid>
                    </Paper>
                    <Paper className={classes.heroContact} elevation={0}>
                        <Grid className={classes.heroContact} item>
                            <Typography align="center">
                                {'         '} <EmailIcon />{' '} abs2001@gmail.com
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </div>
    )
}