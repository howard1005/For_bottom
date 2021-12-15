import React, { Component } from "react";


class Board extends React.Component{
    constructor(props) {
      super();
  
      this.state = {
        menu: 5,
      };
    }

    render(){
        return(
            <>
            <div>Board</div>
            </>
        )
    }
  }
  
  
  export default Board;