import React, { Component } from "react";
import { motion } from "framer-motion";
import styles from '../style/youtube.module.css';

const channels = [
  {
    id:'1',
    url: 'https://www.youtube.com/watch?v=gX0ddl-OGa4',
    thumbnails:'https://img.youtube.com/vi/gX0ddl-OGa4/maxresdefault.jpg'
  },
  {
    id: '2',
    url: 'https://www.youtube.com/watch?v=IBK5-vECGHs',
    thumbnails:'https://img.youtube.com/vi/IBK5-vECGHs/default.jpg'
  },
  {
    id: '3',
    url: 'https://www.youtube.com/watch?v=X-fi1ZbVyNs',
    thumbnails:'https://img.youtube.com/vi/X-fi1ZbVyNs/maxresdefault.jpg'
  },
  {
    id: '4',
    url: 'https://www.youtube.com/watch?v=b9lhp0FUq5Q',
    thumbnails:'https://img.youtube.com/vi/b9lhp0FUq5Q/maxresdefault.jpg'
  }
]
function Youtube(){
  return(
    <>
      <div className={styles.youtube_title}><h2 >Youtube</h2></div>
        <div className = {styles.youtube_rows}>
          {
            channels.map(function(n, i){
              return(
                  <>
                  <div className={styles.youtube_container}>
                    <div className={styles.list_container}>
                      <div>{channels[i]['url']}</div>
                      <img className={styles.thumbnails} alt="thumbnails" key ={channels[i]['id']} src ={channels[i]['thumbnails']} height='100' width='200' ></img>
                    </div>
                  </div>
                  </>    
              )
            })
          }
        </div>
    </>
  )
}
  
  export default Youtube;