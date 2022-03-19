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
    <ImageList sx={{ width: 800,}} cols={12}  rowHeight={80}>
                {items.map((item) => (
                    
                  <ImageListItem key={item.id}>
                    <Link to ='/championinfo' state={{champName : item.id}}>
                    <img
                      src={`${item.url}?w=200&h=200&fit=crop&auto=format`}
                      srcSet={`${item.url}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
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

