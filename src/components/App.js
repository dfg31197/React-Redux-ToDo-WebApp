import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className = "col s12">
            <Header />
      </div>
      <div className = "col s12">
            <Main />
      </div>
      <div className = "col s12">
            <Footer />
      </div>
      </div>



      </div>
    );
  }
}

export default App;
