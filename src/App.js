import React from 'react';
import Navbar from './Navbar';
import MnavBar from './MnavBar';
import Banner from './Banner';
import Categories from './Categories';
import Shopnow from './Shopnow';
import Fitness from './Fitness';
import Kupdate from './Kupdate';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <MnavBar />
      <Banner />
      <br />
      <Categories />
      <Fitness/>
      <br />
      <Shopnow />
      <br />
      <Kupdate/>
      <br/>
      <Footer/>
     
    </>
  );
};

export default App;
