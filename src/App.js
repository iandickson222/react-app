import React from 'react';
import './App.css';
import Social from './components/Social'
import Header from './components/Header'
import Banner from './components/Banner'
import Cards from './components/Cards'
import About from './components/About'
import Renders from './components/Renders'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

const App  = () => {
    return (
      <div>
        <header>
          <Social/>
          <Header/>
          <Banner/>
        </header>
        
        <main>
          <summary><Cards/></summary>
          <aside>
            <About/>
            <Renders/>
            <Subscribe/>
          </aside>
        </main>
        <footer><Footer/></footer> 
      </div>
    );
  } 

export default App;
