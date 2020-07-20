import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from './components/Navigation';
import Home from './components/Home';
import FormRow1 from './components/Cardrow1';
import Details from './components/Details';
import Divider from '@material-ui/core/Divider';
import Testimonial from './components/Testimonials';
import Footer from './components/Footer';

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
