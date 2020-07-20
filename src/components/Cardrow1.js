import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import * as Constants from './Const';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const defaultProps = {
    bgcolor: "info.main",
    m: 1,
    border: 0,
};

export default function FormRow1() {
    const [open, setOpen] = React.useState(false);
    const color = Constants.styles;
    const classes = Constants.useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container className={classes.cardGrid} maxWidth="xl">
            <Typography className={classes.whitetext} component="h2" variant="h4" align="center" color="textSecondary" gutterBottom>
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
                                <Typography gutterBottom variant="h5" component="h2">
                                    {card.Name}
                                </Typography>
                                <Typography variant="h6">
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
                                                    <Typography gutterBottom variant="h5" component="h2">Few details of {card.Name} are: </Typography>
                                                    <Typography paragraph>01. {card.Det1} </Typography>
                                                    <Typography paragraph>02. {card.Det2} </Typography>
                                                    <Typography paragraph>03. {card.Det3} </Typography>
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
        </Container>
    );
}