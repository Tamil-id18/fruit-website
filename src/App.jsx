
import React, { useEffect } from 'react';
import Hero from './components/Heros/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/services/Services';
import Wheretobuy from './components/where to buy/Wheretobuy';
import AppBanner from './components/app banner/AppBanner';
import Footer from './components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(()=>{
    AOS.init({
      duration:1000,
      delay:100,
      easing:"ease-in-cubic",

    })
  },[]);
  return (
    <>
      <main className='overflow-x-hidden'>
        <Hero />
        <Services />
        <Wheretobuy />
        <AppBanner />
        <Footer />
      </main>
    </>
  );
}

export default App;
