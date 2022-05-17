import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useStore} from './ChampionInfo'

function createData(champ, image, winrate, pickrate) {
  return { champ, image, winrate, pickrate};
}



export default function DenseTable({Information}) {

  const {summonerSpellData} = useStore();
  
  const rows = [
    createData(<img src = {summonerSpellData && summonerSpellData.SummonerFlash.image.full}></img>,<img src = {summonerSpellData && summonerSpellData.SummonerExhaust.image.full}></img>, '100%', '100%'),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>

            <TableCell> {Information && Information.id} 챔</TableCell>
            <TableCell></TableCell> 
            <TableCell align="right">승률</TableCell>
            <TableCell align="right">픽률</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.champ}</TableCell>
              <TableCell align="left">{row.image}</TableCell>
              <TableCell align="right">{row.winrate}</TableCell>
              <TableCell align="right">{row.pickrate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
