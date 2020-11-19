import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
     <header>
     
     HomeStyle
     
     <div className="img">
     <img src={process.env.PUBLIC_URL + '/Home.jpg' } alt="Home"  />
     
     </div>
     </header>
    );
  }
}

export default Header;