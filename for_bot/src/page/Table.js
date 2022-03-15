import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(UserId, Line, Champion, RunningTime) {
  return { UserId, Line, Champion, RunningTime };
}

const rows = [
  createData('Userid', 'Line', 'Champion', 'RunningTime'),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>UserId</TableCell>
            <TableCell align="right">Line</TableCell>
            <TableCell align="right">Champion</TableCell>
            <TableCell align="right">RunningTime</TableCell>
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
              <TableCell align="right">{row.Line}</TableCell>
              <TableCell align="right">{row.Champion}</TableCell>
              <TableCell align="right">{row.RunningTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
