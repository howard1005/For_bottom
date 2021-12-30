import React, { Component } from "react";
import {useState}from 'react'
import {useEffect} from 'react';
import './Home.css';
import axios from 'axios';


function Championimages(props){
  return(
    <>
      <img alt ={props.champ['id']} src = {props.champ['url']} height='50' width='50'></img>
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
        <div>Home</div>
        <div>검색
          <input type ="search" placeholder="searchField" onChange={(e) => setSearchfield(e.target.value)}></input>
        </div>

        <div className = "rows">
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

export default Home;