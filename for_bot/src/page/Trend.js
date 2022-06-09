import React, { Component } from "react";
import {useState}from 'react'
import {useEffect} from 'react';
import styles from '../style/Trend.module.css';
import axios from 'axios';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';  
import {champInfo} from './Mate'

function Trend(){

 
  const {champions} = champInfo();
  const [searchField, setSearchfield] = useState("");
  let [filterImages, setFilterimages] = useState([]);
  const navigate = useNavigate();

  
  function imageClick(){
    navigate("/");
  }
  
function Championimages(props){
  let champId = props.champ['id'];
    return(
      <>
        <img className={styles.trend_img} alt ={props.champ['id']} src = {props.champ['url']} height='50' width='50' onClick={()=>imageClick(champId)}></img>
      </>
    );
  }

  // useEffect(()=>{
  //   const apiCall = async () => {
  //     await axios.get(`http://${global.serverAdress}/forbot/v1/champion/img/all-url`)
  //     .then(res => console.log(res.data))//change_champions(res.data.champion_images))
  //     .catch(error => console.log(error))
  //   };
  //   apiCall();
  // },[])

  useEffect(() => {
    setFilterimages(()=>
      champions && champions.filter((c) => c.id.toLowerCase().includes(searchField.toLowerCase()))
    );
    
    
  }, [searchField, champions]);


  return (
    <>
     <div className={styles.trend_title}>
     <h2>Trend</h2>
     </div>
        <div className={styles.trend_title}>검색
          <input type ="search" placeholder="searchField" onChange={(e) => setSearchfield(e.target.value)}></input>
        </div>
        
        {console.log("dfdffd"+champions)}
        <div className = {styles.trend_rows}>
        <div className={styles.trend_subtitle}> AD </div>
          {
            
            filterImages && filterImages.map(function(n, i){
              return(
                <Championimages champ = {filterImages[i]} key={filterImages[i]['id']}/>
              )
            })
          }
        </div>

        
        <div className = {styles.trend_rows}>
        <div className={styles.trend_subtitle}>Support</div>
          {
            
            filterImages && filterImages.map(function(n, i){
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