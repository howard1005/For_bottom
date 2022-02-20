import React, { Component } from "react";
import {useState, useRef}from 'react'
import {useEffect} from 'react';
import styles from '../style/ChampionInfo.module.css';
import axios from 'axios';
import { motion } from "framer-motion";
import BasicCard from './Cards.js'

function ChampionInfo (){
    return (
        <>
            <section className={styles.info_section}>
                <img className={styles.champion_img} src="http://www.simplegame.co.kr/data/editor/1601/4980aecb2de311df98ce93789a9018a2_1453270224_21.PNG"></img>

                <BasicCard></BasicCard>
            </section>
        </>
    );
}

export default ChampionInfo;