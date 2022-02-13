import React, { Component } from "react";
import { motion } from "framer-motion";
import '../style/board.module.css';


function Board(){

  return(
<div className="board_title">
     <motion.h2 animate={{fontSize:20, scale:1.5}}>board</motion.h2>
     </div>  )
}
  
export default Board;