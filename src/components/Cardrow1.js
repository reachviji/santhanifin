import React from 'react';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import * as Constants from './Const';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const defaultProps = {
    bgcolor: "#64b5f6",
    boxShadow: '0 3px 5px 5px rgba(0, 171, 255, .5)',
    m: 1,
    border: 0,
};

export default function FormRow1() {
    const classes = Constants.useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth="xl">
            <Typography className={classes.whitetext} component="h2" variant="h5" align="center" color="textSecondary" gutterBottom>
                GET STARTED
                <Box fontWeight="fontWeightBold" m={1}>
                    Begin your investment journey
                    </Box>
            </Typography>
            <Grid container spacing={4}>
                {Constants.cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={card.Icon}
                                title={card.Name}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography className={classes.cardTitle} gutterBottom variant="h6">
                                    {card.Name}
                                </Typography>
                                <Typography className={classes.cardSubtitle} variant="h7">
                                    {card.Desc}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <PopupState variant="popover" popupId="popover">
                                    {(popupState) => (
                                        <div>
                                            <Button className={classes.button} variant="contained" color="primary" {...bindTrigger(popupState)}>
                                                Details
                                            </Button>
                                            <Popover
                                                {...bindPopover(popupState)}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'center',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'center',
                                                }}
                                            >
                                                <Box color="info.contrastText" {...defaultProps} p={3} >
                                                    <Typography className={classes.cardSubtitle} >Aggressive  </Typography>
                                                    <Typography className={classes.popupDet}>{card.Det1} </Typography>
                                                    <Typography className={classes.popupDet} paragraph>{card.Det2} </Typography>
                                                    <Typography className={classes.cardSubtitle} >Conservative  </Typography>
                                                    <Typography className={classes.popupDet} >{card.Det3} </Typography>
                                                    <Typography className={classes.popupDet} paragraph>{card.Det4} </Typography>
                                                    <Typography className={classes.popup} gutterBottom >* All these are simple examples.There is huge baskets of schemes available as personal choice.</Typography>
                                                </Box>
                                            </Popover>
                                        </div>
                                    )}
                                </PopupState>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container >
    );
}