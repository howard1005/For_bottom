import React, { Component } from "react";
import {useState}from 'react'
import {useEffect} from 'react';
import '../style/Mate.css';
import axios from 'axios';
import { motion } from "framer-motion";



function imageClick(){
  console.log("click");
}

function Championimages(props){
  return(
    <>
      <img className="mate_img" alt ={props.champ['id']} src = {props.champ['url']} height='50' width='50' onClick={()=>imageClick()}></img>
    </>
  );
}

function Mate (){

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
        <div className="mate_title">Mate</div>
        <div className="mate_title">검색
          <input type ="search" placeholder="searchField" onChange={(e) => setSearchfield(e.target.value)}></input>
        </div>

        <div className = "mate_rows">
          {
            
            filterImages.map(function(n, i){
              return(
                <Championimages champ = {filterImages[i]} key={filterImages[i]['id']}/>
              )
            })
        }
        </div>

        <motion.div className="recommend_container">
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

export default Mate;