import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Header} from '../header/header'

import {HomePage} from '../pages/home-pages';
import {Footer} from '../footer/footer';
import {AboutMe} from '../pages/about-me/aboutme-page';
import {Portfolio} from '../pages/portfolio-page/portfolio-page';

import {Contact} from '../pages/contact-pages/contact-pages'


function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route
          path='/'
          component = {HomePage} 
          exact />
        <Route
          path='/portfolio'
          component= {Portfolio}/>  
        <Route
          path='/skills'
          component= {AboutMe}/> 
        <Route
          path='/contacts'
          component= {Contact}/>
        <Redirect to='/' />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
