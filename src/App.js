import React from 'react';
import Navbar from './Navbar';
import MnavBar from './MnavBar';
import Banner from './Banner';
import Categories from './Caterogirs';
import Fitness from './Fitness';

const App = () =>{
  return(
    <>
      <Navbar />
      <MnavBar/>
      <Banner />
      <br/>
      <Categories/>
      <br/>
      <Fitness />
    </>
  )
}

export default App;