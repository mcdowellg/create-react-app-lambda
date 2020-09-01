/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

class IndexHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offsetX: 0,
      offsetY: 0
    };
  }

  componentDidMount() {
      window.addEventListener('scroll', this.parallaxShift);
  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this.parallaxShift);
  }
  parallaxShift = () => {
      this.setState({
        offsetX: window.pageYOffset,
        offsetY: window.pageYOffset
    });
  };

  render(){
    return (
      <>
        <section className="zoom"
          // className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" + require("assets/img/milfordbackground.jpg") + ")",
              // top: -this.state.offsetY,

          }}
          // style={{ bottom: -this.state.offsetY/10}}
        >
        
          <img src={require("assets/img/foreground1.png")} height="1500px" id="layer1" style={{ bottom: -this.state.offsetY , left: this.state.offsetX / 6, width: (100 + this.state.offsetX /25) + '%'}}/>
          <img src={require("assets/img/foreground2.png")} height="1500px" id="layer2" style={{ bottom: -this.state.offsetY , left: -this.state.offsetX / 6, width: (100 + this.state.offsetX /20) + '%'}}/>
          <h1 id="layer3" style={{ top: -this.state.offsetY/2}}>Your Data Kitset</h1>
          
        </section>
        <section className="context" id="layer4" style={{ top:0}}>
        <p>
            I could change this line to see if changes are happening when I push to Github, putting down all the good reasons why you should pay me to help your business. 
            This is where the magic happens, putting down all the good reasons why you should pay me to help your business. 
            This is where the magic happens, putting down all the good reasons why you should pay me to help your business. 
            This is where the magic happens, putting down all the good reasons why you should pay me to help your business.
            This is where the magic happens, putting down all the good reasons why you should pay me to help your business. 
            This is where the magic happens, putting down all the good reasons why you should pay me to help your business. 
            This is where the magic happens, putting down all the good reasons why you should pay me to help your business. 
            This is where the magic happens, putting down all the good reasons why you should pay me to help your business.
            This is where the magic happens, putting down all the good reasons why you should pay me to help your business. 
            This is where the magic happens, putting down all the good reasons why you should pay me to help your business. 
            This is where the magic happens, putting down all the good reasons why you should pay me to help your business. 
            This is where the magic happens, putting down all the good reasons why you should pay me to help your business.
          </p>
        </section>

      </>
    );
  }
}


export default IndexHeader;
