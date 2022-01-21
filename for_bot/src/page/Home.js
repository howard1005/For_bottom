import React, { Component } from "react";
import {useState, useRef}from 'react'
import {useEffect} from 'react';
import '../style/Home.css';
import axios from 'axios';
import { motion } from "framer-motion";



function Championimages(props){
  return(
    <>
        <motion.img className="home_img" key ={props.id} src ={props.champ['url']} height='50' width='50'></motion.img>
      {/* <img className="home_img" alt ={props.champ['id']} src = {props.champ['url']} height='50' width='50'></img> */}
    </>
  );
}

function Home (){

  let [champions, change_champions] = useState([]);
  const [searchField, setSearchfield] = useState("");
  let [filterImages, setFilterimages] = useState([]);
  
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

  return(
      <>
        <div className="home_font">
          <motion.h2 animate={{fontSize:20, scale:1.5}}>For_Bottom</motion.h2>
        </div>
        
          <motion.div className="home_font">검색
            <motion.input placeholder="searchField" onChange={(e) => setSearchfield(e.target.value)}></motion.input>
          </motion.div>
          
        <motion.div className = "rows" initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}>
          {
            filterImages.map(function(n, i){
              return(
                  <Championimages champ = {filterImages[i]} key={filterImages[i]['id']}/>
              )
            })
          }
        </motion.div>
        
      </>
    )
}

export default Home;