import React, { Component } from "react";
import {useState}from 'react'
import {useEffect} from 'react';
import styles from '../style/Trend.module.css';
import axios from 'axios';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';  
import {champInfo} from './Mate'

function Trend(){

 
  const {fetchData} = champInfo();
  const [searchField, setSearchfield] = useState("");
  let [filterImages, setFilterimages] = useState([]);
  const navigate = useNavigate();
  const [championImage, setImage] = useState([]);
  
  function imageClick(){
    navigate("/");
  }

  (async () => {
    setImage(await fetchData());
  })();
  
  function Championimages(props){
  let champId = props.champ['id'];
    return(
      <>
        <img className={styles.trend_img} alt ={props.champ['id']} src = {props.champ['img_href']} height='50' width='50' onClick={()=>imageClick(champId)}></img>
      </>
    );
  }

  useEffect(() => {
    setFilterimages(()=>
     championImage && championImage.filter((c) => c.id.toLowerCase().includes(searchField.toLowerCase()))
    );
    
    
  }, [searchField, championImage]);


  return (
    <>
     <div className={styles.trend_title}>
     <h2>Trend</h2>
     </div>
        <div className={styles.trend_title}>검색
          <input type ="search" placeholder="searchField" onChange={(e) => setSearchfield(e.target.value)}></input>
        </div>
        
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