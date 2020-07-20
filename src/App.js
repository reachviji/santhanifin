import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Navigation from './components/Navigation';
import Home from './components/Home';
import FormRow1 from './components/Cardrow1';
import Details from './components/Details';
import Divider from '@material-ui/core/Divider';
import Testimonial from './components/Testimonials';
import Footer from './components/Footer';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },

}));


export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      <main>
        {/* Hero unit */}
        <Home />
        <Divider variant="middle" />
        <Details />
        <FormRow1 />
      </main>
      {/* Footer */}
      <Testimonial />
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}
