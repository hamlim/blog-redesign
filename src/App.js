import React, { Component } from 'react';

import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';


class App extends Component {
  render() {
    return (
      <main className="App">
        <Header location={window.location.pathname} />
        <Body location={window.location.pathname} />
        <Footer />
      </main>
    );
  }
}

export default App;
