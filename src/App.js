import React, { Component } from 'react';
import Header from './Header'
import Advertisement from './Advertisement'
import Article from './Article'
import LinkOne from './LinkOne'
import LinkTwo from './LinkTwo'
import LinkThree from './LinkThree'
import LinkFour from './LinkFour'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <Article />
          <Advertisement />

          <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            <LinkOne />
            <LinkTwo />
            <LinkThree />
            <LinkFour />
          </div>
        </main>

        <footer className="expanded row">
          <h6>&copy; 2017 Erebor Industries</h6>
          <h6 className="float-right">All rights reserved</h6>
        </footer>
      </div>
    );
  }
}

export default App;
