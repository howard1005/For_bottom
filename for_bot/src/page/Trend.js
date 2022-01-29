import React, { Component } from "react";
import {useState}from 'react'
import {useEffect} from 'react';
import '../style/Trend.css';
import axios from 'axios';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';  



function Trend(){

 
  let [champions, change_champions] = useState([]);
  const [searchField, setSearchfield] = useState("");
  let [filterImages, setFilterimages] = useState([]);
  const navigate = useNavigate();

  
  function imageClick(){
    console.log('click'); 
    navigate("/");
  }
  
  function Championimages(props){
    return(
      <>
        <img className="mate_img" alt ={props.champ['id']} src = {props.champ['url']} height='50' width='50' onClick={()=>imageClick()}></img>
      </>
    );
  }

  useEffect(()=>{
    const apiCall = async () => {
      await axios.get(`http://${global.serverAdress}/forbot/v1/champion/img/all-url`)
      .then(res => change_champions(res.data.champion_images))
      .catch(error => console.log(error))
    };
    apiCall();
  },[])

  useEffect(() => {
    setFilterimages(()=>
      champions.filter((c) => c.id.toLowerCase().includes(searchField.toLowerCase()))
    );
    
    
  }, [searchField, champions]);


  return (
    <>
     <div className="trend_title">
     <motion.h2 animate={{fontSize:20, scale:1.5}}>Trend</motion.h2>
     </div>
        <div className="trend_title">검색
          <input type ="search" placeholder="searchField" onChange={(e) => setSearchfield(e.target.value)}></input>
        </div>

        
        <div className = "trend_rows">
        <div className="trend_subtitle"> AD </div>
          {
            
            filterImages.map(function(n, i){
              return(
                <Championimages champ = {filterImages[i]} key={filterImages[i]['id']}/>
              )
            })
          }
        </div>

        
        <div className = "trend_rows">
        <div className="trend_subtitle">Support</div>
          {
            
            filterImages.map(function(n, i){
              return(
                <Championimages champ = {filterImages[i]} key={filterImages[i]['id']}/>
              )
            })
          }
        </div>
    </>
  )
}
  
  
  export default Trend;