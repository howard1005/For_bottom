import React, { Component } from "react";
import {useState}from 'react'
import {useEffect} from 'react';
import styles from '../style/Mate.module.css';
import axios from 'axios';
import ImageView from './ImageList.js'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


import create from 'zustand'

export const champInfo = create((set) => ({
  fetchData: async () => {
    const result = await axios.get(`http://${global.serverAdress}/forbot/v1/champion/all-url`)
    
    return result.data.data;
  },
}));

function Mate (){

  const {fetchData} = champInfo();
  const [championImage, setImage] = useState([]);
  const [searchField, setSearchfield] = useState("");
  const [mateId, setMateid] = useState("");
  let [mateImages, setMateimages] = useState([]);
  let [filterImages, setFilterimages] = useState([]);

  const [age, setAge] = React.useState('');
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleLines = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('챔피언1', 159, 6.0, 24, 4.0),
    createData('챔피언2', 237, 9.0, 37, 4.3),
    createData('챔피언3', 262, 16.0, 24, 6.0),
    createData('챔피언4', 305, 3.7, 67, 4.3),
    createData('챔피언5', 356, 16.0, 49, 3.9),
  ];
  
  useEffect(()=>{
    const apiCall = async () => {
      await axios.get(`http://${global.serverAdress}/forbot/v1/champion/all-url`)
      .then(res => setImage(res.data.data))
      .catch(error => console.log(error))
    };
    apiCall();
  },[])

  // useEffect(()=>{
  //   const apiCall = async () => {
  //     await axios.get(`http://${global.serverAdress}/forbot/v1/champion/img/all-url`)
  //     .then((json) => champInfo.setState({champions : json}))//change_champions(res.data.champion_images))
  //     .catch(error => console.log(error))
  //   };
  //   apiCall();
  // },[])

  useEffect(() => {
    setFilterimages(()=>
     championImage.filter((c) => c.id.toLowerCase().includes(searchField.toLowerCase()))
    );
  }, [searchField, championImage]);

  useEffect(() => {
    setMateimages(()=>
     championImage.filter((c) => c.id.startsWith(mateId[0]))
      //champions.filter((c) => c.id.toLowerCase().includes(mateId.toLowerCase()))
    );
  }, [mateId, championImage]);

  function imageClick(id){
    console.log("click");
    console.log(id);

    setMateid(id);
  }

  function Championimages(props){
    let champId = props.champ['id'];
    
    return(
      <>
        <img className={styles.mate_img} alt ={props.champ['id']} src = {props.champ['img_href']} height='50' width='50' onClick={()=>imageClick(champId)}></img>
      </>
    );
  }

  
  return(
      <>
        <div className={styles.mate_title}>
        <h2 animate={{fontSize:20, scale:1.5}}>Mate</h2>
        </div>
        <div className={styles.mate_title}>검색
          <input type ="search" placeholder="searchField" onChange={(e) => setSearchfield(e.target.value)}></input>
        </div>
      <div>
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: '250px',
            backgroundColor: 'primary.black',
            float: 'left',
            '& > :not(style)': {
              m: 1,
              minWidth: 120,
              height: 70,
            },
          }}>
          
          <FormControl >
                  <InputLabel id="demo-simple-select-label">서버</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="server"
                    label="server"
                    autoWidth
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>KR</MenuItem>
                    <MenuItem value={2}>JP</MenuItem>
                    <MenuItem value={3}>Global</MenuItem>
                    <MenuItem value={4}>NA</MenuItem>
                  </Select>
            </FormControl>
            <FormControl >
                  <InputLabel id="demo-simple-select-label">Tier</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="tier"
                    label="tier"
                    autoWidth
                    onChange={handleChange}
                  >
                    <MenuItem value={4}>Iron</MenuItem>
                    <MenuItem value={5}>Bronze</MenuItem>
                    <MenuItem value={6}>Silver</MenuItem>
                    <MenuItem value={7}>Gold</MenuItem>
                    <MenuItem value={8}>Platinum</MenuItem>
                    <MenuItem value={9}>Diamond</MenuItem>
                    <MenuItem value={10}>Master</MenuItem>
                    <MenuItem value={11}>GrandMaster</MenuItem>
                    <MenuItem value={12}>Challenger</MenuItem>


                  </Select>
            </FormControl> 
            <FormControl sx={{ m:4, minWidth: 2000 }}>
                  <InputLabel id="demo-simple-select-label">Version</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="version"
                    label="version"
                    autoWidth
                    onChange={handleChange}
                  >
                    <MenuItem value={13}>Version 12.12</MenuItem>
                    <MenuItem value={14}>Version 12.11</MenuItem>
                  </Select>
            </FormControl> 

       </Box>
       
       
      <Box sx={{display: 'flex',
            marginLeft: '1000px',
            backgroundColor: 'primary.black',
            
            '& > :not(style)': {
              m: 1,
              width: 300,
              height: 50,
            },}}>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              
              onChange={handleLines}
              size='large'
            
            >
              <ToggleButton value="Top">탑</ToggleButton>
              <ToggleButton value="Jungle">정글</ToggleButton>
              <ToggleButton value="Mid">미드</ToggleButton>
              <ToggleButton value="Bottom">바텀</ToggleButton>
              <ToggleButton value="Support">서포터</ToggleButton>
            </ToggleButtonGroup>
      </Box>
      </div>
       <Box sx={{display: 'flex', float: 'left', marginLeft: '250px'}}> 
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: '0px',
            '& > :not(style)': {
              m: 1,
              width: 300,
              height: 2000,
            },
          }}
        >
         
          <Paper elevation={3} sx={{width: 400, height: 500}} >
            <div className="mate_rows">
              <ImageView items ={filterImages} sx={{marginLeft:'10%'}}></ImageView>
            </div>
          </Paper>

        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: '10px',
            '& > :not(style)': {
              m: 1,
              width: 900,
              height: 2000,
            },
          }}
        >
         
          <Paper elevation={3} sx={{width: 400, height: 500}} >
            <div className="">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell aligh="left">순위</TableCell>
                      <TableCell align="">챔피언</TableCell>
                      <TableCell align="">티어</TableCell>
                      <TableCell align="">승률</TableCell>
                      <TableCell align="">픽률</TableCell>
                      <TableCell align="">벤률</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="">{row.calories}</TableCell>
                        <TableCell align="">{row.fat}</TableCell>
                        <TableCell align="">{row.carbs}</TableCell>
                        <TableCell align="">{row.protein}</TableCell>
                        <TableCell align="">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Paper>

        </Box>
        </Box>

      </>
    )
}

export default Mate;