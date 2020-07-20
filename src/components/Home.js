import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import EmailIcon from '@material-ui/icons/Email';
import * as Constants from '../components/Const';
import ReactTypingEffect from 'react-typing-effect';

export default function Home() {
    const classes = Constants.useStyles();
    return (
        <div className={classes.heroContent}>
            <Container maxWidth="xl">
                <ReactTypingEffect className={classes.typing} text={['About Me']}
                    speed={50} eraseDelay={1000} />
                <Typography align="center" color="textSecondary" paragraph>
                    Santhani Financial Consultancy, established in 1982 , has been a pioneer in
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
                <div className={classes.heroButtons}>
                    <Grid container spacing={4} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary" startIcon={<PhoneInTalkIcon />} size="medium">
                                +91 - 9936468708
                        </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" startIcon={<EmailIcon />} size="medium">
                                abs2001@gmail.com
                        </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}