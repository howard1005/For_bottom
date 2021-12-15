import React, {useState}from 'react'
import {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './page/Home'
import InGameInfo from './page/InGameInfo'
import Trend from './page/Trend'
import Mate from './page/Mate'
import Youtube from './page/Youtube'
import Board from './page/Board'

const menuList ={
  0: <Home></Home>,
  1: <InGameInfo></InGameInfo>,
  2: <Trend></Trend>,
  3: <Mate></Mate>,
  4: <Youtube></Youtube>,
  5: <Board></Board>
}

class App extends React.Component{
  constructor(props){
    super();
    this.state ={
      menu:0,
    };
  }

  changeMenu =(menuIndex) =>{
    this.setState({menu: menuIndex});
  }


  render(){
    return (
      <div className="App">
        <div className ="black-nav">
          <div onClick={()=>this.changeMenu(0)}>Home</div>
          <div onClick={()=>this.changeMenu(1)}>인게임 정보</div>
          <div onClick={()=>this.changeMenu(2)}>바텀 트렌드 챔피언</div>
          <div onClick={()=>this.changeMenu(3)}>궁합 좋은 챔피언 보기</div>
          <div onClick={()=>this.changeMenu(4)}>AD Carry YouTube</div>
          <div onClick={()=>this.changeMenu(5)}>Board</div>
          
        </div>
        
        <div>{menuList[this.state.menu]}</div>
        
      </div>
    );
  }
}

export default App;
