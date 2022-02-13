import React, { Component } from "react";
import {useState}from 'react'
import styles from '../style/InGameInfo.module.css';
import { motion } from "framer-motion";

function InGameInfo(){

  let [disadvantageRank, setDisadvantageRank] = useState('매우 불리');

  return (
    <>
    <div className={styles.ingame_font}>
      <h2>InGameInfo</h2>
    </div>
    <div className={styles.container}>
      <div className={styles.Info_container}>
        <div className={styles.ingame_font}> User id </div>
        <div className={styles.ingame_font}> Line </div>
        <div className={styles.ingame_font}> Champion </div>
        <div className={styles.ingame_font}> Running Time </div>
    </div>
        <div className ={styles.circle_wrap}> 
          <div className={styles.circle}></div>
          <div className={styles.circle_data}><p> {disadvantageRank} </p></div>
        </div>
    </div> 
    </>
  )
}
  
  
  export default InGameInfo;