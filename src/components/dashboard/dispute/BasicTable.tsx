import React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper } from '@mui/material';

interface Row {
  type: string;
  value: string;
}

interface BasicTableProps {
  rows: Row[];
}

const BasicTable: React.FC<BasicTableProps> = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 500 }} aria-label="simple table">
        <TableBody>
          {rows.map((row: Row, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="left">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
