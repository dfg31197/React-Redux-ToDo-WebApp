import React from 'react'

class Footer extends React.Component{

  render(){
    return <div>
    <nav className="footer-nav">
    <a className="waves-effect waves-light btn-large">Show All</a>
    <a className="waves-effect waves-light btn-large">Completed</a>
    <a className="waves-effect waves-light btn-large">Pending</a>
    </nav>
    </div>
  }
}
export default Footer;
