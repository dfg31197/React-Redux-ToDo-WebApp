import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Timer from './Timer'
import {connect} from 'react-redux'

class App extends Component {



  render() {
    return (
      <div className="container">
      <div className="row">
      <div className = "col s12 timer">
            <Timer />
      </div>
      <div className = "col s12">
            <Header />
      </div>
      <div className = "col s12">
            <Footer />
      </div>
      <div className = "col s12">
            <Main />
      </div>

      </div>
      </div>
    );
  }
}
const matchStateToProps = (state)=>{
  return {}
}
export default connect(matchStateToProps)(App);
