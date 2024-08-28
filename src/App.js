import React from 'react';
import Navbar from './Navbar';
import MnavBar from './MnavBar';
import Banner from './Banner';
import Categories from './Categories';
import Shopnow from './Shopnow';
import Feature from './Feature';
import Cards from './Cards';

// Sample data to be used with Cards component
const Sdata = [
  {
    imgsrc: 'https://via.placeholder.com/150',
    title: 'Product 1',
    sname: 'Description of Product 1',
    link: '#'
  },
  {
    imgsrc: 'https://via.placeholder.com/150',
    title: 'Product 2',
    sname: 'Description of Product 2',
    link: '#'
  },
  {
    imgsrc: 'https://via.placeholder.com/150',
    title: 'Product 3',
    sname: 'Description of Product 3',
    link: '#'
  }
  // Add more objects as needed
];

function ncard(val) {
  return (
    <Cards 
      key={val.title}  // Add a unique key for each item
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}

const App = () => {
  return (
    <>
      <Navbar />
      <MnavBar />
      <Banner />
      <br />
      <Categories />
      <br />
      <Shopnow />
      <br />
      <Feature />
      {Sdata.map(ncard)}
    </>
  );
};

export default App;
