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


const champion_images = [
  {
    id:'Aatrox.png',
    url:'http://14.32.21.158:8081/forbot/v1/champion/images/Aatrox.png'
  },
  {
    id:'Ahri.png',
    url:'http://14.32.21.158:8081/forbot/v1/champion/images/Ahri.png'
  },
  {
    id:'Akali.png',
    url:'http://14.32.21.158:8081/forbot/v1/champion/images/Akali.png'
  },
  {
    id:'Alistar.png',
    url:'http://14.32.21.158:8081/forbot/v1/champion/images/Alistar.png'
  },
  {
    id:'Amumu.png',
    url:'http://14.32.21.158:8081/forbot/v1/champion/images/Amumu.png'
  },
  {
    id:'Anivia.png',
    url:'http://14.32.21.158:8081/forbot/v1/champion/images/Anivia.png'
  },
  {
    id:'Annie.png',
    url:'http://14.32.21.158:8081/forbot/v1/champion/images/Annie.png'
  },
  {
    id:'Ashe.png',
    url:'http://14.32.21.158:8081/forbot/v1/champion/images/Ashe.png'
  },
  {
    id:'AurelionSol.png',
    url:'http://14.32.21.158:8081/forbot/v1/champion/images/AurelionSol.png'
  },
  {
    id:'Azir.png',
    url:'http://14.32.21.158:8081/forbot/v1/champion/images/Azir.png'
  }
];
  
  export default Home;