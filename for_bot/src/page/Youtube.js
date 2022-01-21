import React, { Component } from "react";
import { motion } from "framer-motion";
import '../style/youtube.css';

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
        <motion.div className = "youtube_rows" initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}>
          {
            channels.map(function(n, i){
              return(
                  <>
                  <motion.div className='youtube_container'>
                    <motion.div className='list_container'>
                      <motion.div animate={{textAlign:'center'}}>{channels[i]['id']}</motion.div>
                      <motion.div animate={{textAlign:'center'}}>{channels[i]['url']}</motion.div>
                      <motion.img animate={{textAlign:'center' }} className="thumbnails" alt="thumbnails" key ={channels[i]['id']} src ={channels[i]['thumbnails']} height='100' width='200' ></motion.img>
                    </motion.div>  
                  </motion.div>
                  </>    
              )
            })
          }
        </motion.div>
    </>
  )
}
  
  export default Youtube;