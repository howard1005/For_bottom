import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(champ, winrate, pickrate) {
  return { champ, winrate, pickrate};
}

const rows = [
  createData("ㅠㅁ차", '100%', '100%'),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>가렌 탑 챔</TableCell>
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
              <TableCell component="th" scope="row">
                {row.UserId}
              </TableCell>
              <TableCell align="right">{row.champ}</TableCell>
              <TableCell align="right">{row.winrate}</TableCell>
              <TableCell align="right">{row.pickrate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
