import React from 'react';
import Navbar from './Navbar';
import MnavBar from './MnavBar';
import Banner from './Banner';
import Categories from './Caterogirs';
import Shopnow from './Shopnow';
import Feature from './Feature';

const App = () =>{
  return(
    <>
      <Navbar />
      <MnavBar/>
      <Banner />
      <br/>
      <Categories/>
      <br/>
      <Shopnow/>
      <Feature/>
    
      
    </>
  )
}

export default App;