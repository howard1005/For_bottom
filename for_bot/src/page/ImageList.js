import React, { Component } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from "react-router-dom";
import ChampionInfo from './ChampionInfo.js'


function ImageView({items}){


    function imageClick(id){
        console.log("click");
        console.log(id);
    }

    


    return (
    <ImageList sx={{ width: 300,}} cols={6}  rowHeight={50}>
                {items.map((item) => (
                    
                  <ImageListItem key={item.id} >
                    <Link to ='/championinfo' state={{champInfo : item}}>
                    <img
                      width='46' height='46'
                      src={`${item.img_href}?w=300&h=300&fit=crop&auto=format`}
                      srcSet={`${item.img_href}?w=300&h=300&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.id}
                      loading="lazy"
                    />
                    </Link>
                  </ImageListItem>
                ))}
    </ImageList>
    )
}

export default ImageView;

