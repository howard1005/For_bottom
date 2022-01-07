import React, { Component } from "react";
import {useState}from 'react'
import '../style/InGameInfo.css';

function InGameInfo(){

  let [disadvantageRank, setDisadvantageRank] = useState('매우 불리');

  return (
    <>
    <div className="InGameInfo">
      <div> User id </div>
      <div> Line </div>
      <div> Champion </div>
      <div> Running Time </div>
    </div>
      <div className ="circle_wrap"> 
        <div className="circle"></div>
        <div className="circle_data"><p> {disadvantageRank} </p></div>
      </div> 
    </>
  )
}
  
  
  export default InGameInfo;