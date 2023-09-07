import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
function createData(name, image,date,amount, status) {
  return { name,image, date,amount, status };
}

const rows = [
  createData('Susan Carlson',"/static/images/avatar/1.jpg", '12 May 2021', 6.0, 'Approved'),
  createData('Erik Bailey',"/static/images/avatar/1.jpg", '12 May 2021', 9.0, 'Pending'),
  createData('Andrew carly',"/static/images/avatar/1.jpg", '12 May 2021', 16.0, 'Approved'),
  createData('Jane Walker',"/static/images/avatar/1.jpg", '12 May 2021', 3.7, 'Approved'),
  createData('Jean Jensen',"/static/images/avatar/1.jpg", '12 May 2021', 16.0, 'Rejected'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} elevation={3} sx={{margin:'23px 0px 15px 0px'}}>
      <Typography sx={{padding:'10px 25px', fontWeight:'600', fontSize:'18px'}}>Latest Transactions</Typography>
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Amount</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{display:'flex'}}>
              <Avatar 
                    alt="Remy Sharp"
                    src={row.image}
                    sx={{ width: 28, height: 28, display:'inline-block', margin:'0px 10px 0px 5px' }}
                />
                {row.name}
                
              </TableCell>
            
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">${row.amount}</TableCell>
              <TableCell align="left" sx={{color:row.status==='Approved'?'green':'blue'}}>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
