import React, { Component } from "react";
import mainImage from '../main.png'


class Home extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }

    render(){
        return(
            <>
            <div>Home</div>
            <img alt="HomeImage" src={mainImage}/>
            </>
        )
    }
  }
  
  
  export default Home;