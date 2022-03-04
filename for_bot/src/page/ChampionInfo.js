import React, { Component } from "react";
import {useState, useRef}from 'react'
import {useEffect} from 'react';
import styles from '../style/ChampionInfo.module.css';
import axios from 'axios';
import { motion } from "framer-motion";
import BasicTabs from './Tabs.js'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
/**/ 

function ChampionInfo (){
    return (
        <>
            <section className={styles.info_section}>
                <img className={styles.champion_img} src="http://www.simplegame.co.kr/data/editor/1601/4980aecb2de311df98ce93789a9018a2_1453270224_21.PNG"></img>
                <List sx={{ width: '50%', maxWidth: 300, algin: 'center' }}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <BeachAccessIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
                </List>
            </section>
            <section>
            <BasicTabs></BasicTabs>
            </section>
        </>
    );
}

export default ChampionInfo;