import React, {useState}from 'react'
import {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes,Router, Navigate,Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import Home from './page/Home'
import InGameInfo from './page/InGameInfo'
import Trend from './page/Trend'
import Mate from './page/Mate'
import Youtube from './page/Youtube'
import Board from './page/Board'
import Sidebar from './page/Sidebar'
import ChampionInfo from './page/ChampionInfo'
import { AnimatePresence, motion } from 'framer-motion'

global.serverAdress = "211.218.215.226:8081";

const menuList ={
  0: <Home></Home>,
  1: <InGameInfo></InGameInfo>,
  2: <Trend></Trend>,
  3: <Mate></Mate>,
  4: <Youtube></Youtube>,
  5: <Board></Board>
}


function App() {

    //let [menu, menuChange] = useState(0)
  
    return (
          <>
         
          <Sidebar></Sidebar>
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/InGameInfo" element={<InGameInfo/>} />
              <Route path="/Trend" element={<Trend/>} />
              <Route path="/Mate" element={<Mate/>} />
              <Route path="/Youtube" element={<Youtube/>} />
              <Route path="/Board" element={<Board/>} />
              <Route path="/ChampionInfo" element={<ChampionInfo/>} />
            </Routes>
          </AnimatePresence>
          </>
    // <Routes>

    //   <Route path="/" element={<Home />} />
    //   <Route path="/InGameInfo" element={<InGameInfo />} />
    //   <Route path="/Mate" element={<Mate />} />
    //   <Route path="/Trend" element={<Trend />} />
    //   <Route path="/Youtube" element={<Youtube />} />
    //   <Route path="/Board" element={<Board />} />

    // </Routes>
    
    // <div className="App">
      //   <div className ="black-nav">
      //     <div className = "menu" onClick={()=>menuChange(0)}>Home</div>
      //     <div className = "menu" onClick={()=>menuChange(1)}>인게임 정보</div>
      //     <div className = "menu" onClick={()=>menuChange(2)}>바텀 트렌드 챔피언</div>
      //     <div className = "menu" onClick={()=>menuChange(3)}>궁합 좋은 챔피언 보기</div>
      //     <div className = "menu" onClick={()=>menuChange(4)}>AD Carry YouTube</div>
      //     <div className = "menu" onClick={()=>menuChange(5)}>Board</div>
          
      //   </div>
        
      //   <div>{menuList[menu]}</div>
        
      // </div>
    );
}

export default App;
