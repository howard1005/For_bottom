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
//import Sidebar from './page/Sidebar'
import Sidebar from './page/drawer'
import ChampionInfo from './page/ChampionInfo'
import { AnimatePresence, motion } from 'framer-motion'
import {Drawer} from '@material-ui/core'

global.serverAdress = "211.218.213.188:8081";

const menuList ={
  0: <Home></Home>,
  1: <InGameInfo></InGameInfo>,
  2: <Trend></Trend>,
  3: <Youtube></Youtube>,
  4: <Board></Board>
}


function App() {

    //let [menu, menuChange] = useState(0)
  
    return (
          <>
          <Sidebar></Sidebar>
          {/* <Sidebar></Sidebar> */}
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/InGameInfo" element={<InGameInfo/>} />
              <Route path="/Trend" element={<Trend/>} />
              <Route path="/Youtube" element={<Youtube/>} />
              <Route path="/Board" element={<Board/>} />
              <Route path="/ChampionInfo" element={<ChampionInfo/>} />
            </Routes>
          </AnimatePresence>
          </>
    );
}

export default App;
