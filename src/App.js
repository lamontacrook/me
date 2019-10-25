import React, { Component } from 'react';
//import './App.css';
import Blog from './components/blog'
import About from './components/about'
import Preloader from './components/preloader'
import Header from './components/header'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Preloader></Preloader>
        <Header></Header>
        <About></About>
        <Blog></Blog>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
