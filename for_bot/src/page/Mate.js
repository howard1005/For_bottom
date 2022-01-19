import React, { Component } from "react";
import {useState}from 'react'
import {useEffect} from 'react';
import '../style/Mate.css';
import axios from 'axios';
import { motion } from "framer-motion";


function Mate (){

  let [champions, change_champions] = useState([]);
  const [searchField, setSearchfield] = useState("");
  const [mateId, setMateid] = useState("");
  let [mateImages, setMateimages] = useState([]);
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

  useEffect(() => {
    setMateimages(()=>
      champions.filter((c) => c.id.startsWith(mateId[0]))
      //champions.filter((c) => c.id.toLowerCase().includes(mateId.toLowerCase()))
    );
  }, [mateId]);

  function imageClick(id){
    console.log("click");
    console.log(id);

    setMateid(id);
  }

  function Championimages(props){
    let champId = props.champ['id'];
    
    return(
      <>
        <img className="mate_img" alt ={props.champ['id']} src = {props.champ['url']} height='50' width='50' onClick={()=>imageClick(champId)}></img>
      </>
    );
  }

  
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
            
            mateImages.map(function(n, i){
              return(
                <Championimages champ = {mateImages[i]} key={mateImages[i]['id']}/>
              )
            })
        }
        </motion.div>

      </>
    )
}

export default Mate;