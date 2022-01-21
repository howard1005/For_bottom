import React, { Component } from "react";
import {useState}from 'react'
import '../style/InGameInfo.css';
import { motion } from "framer-motion";

function InGameInfo(){

  let [disadvantageRank, setDisadvantageRank] = useState('매우 불리');

  return (
    <>
    <div className='ingame_font'>
      <motion.h2 animate={{fontSize:20, scale:1.5}}>InGameInfo</motion.h2>
    </div>
    <motion.div className="container">
      <motion.div className="Info_container">
        <motion.div className="ingame_font"> User id </motion.div>
        <motion.div className="ingame_font"> Line </motion.div>
        <motion.div className="ingame_font"> Champion </motion.div>
        <motion.div className="ingame_font"> Running Time </motion.div>
    </motion.div>
        <motion.div className ="circle_wrap"> 
          <motion.div className="circle"></motion.div>
          <motion.div className="circle_data"><p> {disadvantageRank} </p></motion.div>
        </motion.div>
    </motion.div> 
    </>
  )
}
  
  
  export default InGameInfo;