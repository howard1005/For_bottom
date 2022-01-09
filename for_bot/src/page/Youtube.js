import React, { Component } from "react";
import { motion } from "framer-motion";


const channels = [
  {
    id:'1',
    url: 'https://www.youtube.com/watch?v=gX0ddl-OGa4',
  },
  {
    id: '2',
    url: 'https://www.youtube.com/watch?v=IBK5-vECGHs'
  },
  {
    id: '3',
    url: 'https://www.youtube.com/watch?v=X-fi1ZbVyNs'
  },
  {
    id: '4',
    url: 'https://www.youtube.com/watch?v=b9lhp0FUq5Q'
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
                      <motion.div animate={{textAlign:'center'}}>{channels[i]['id']}</motion.div>
                      <motion.div animate={{textAlign:'center'}}>{channels[i]['url']}</motion.div>
                  </>    
              )
            })
          }
        </motion.div>
    </>
  )
}
  
  export default Youtube;