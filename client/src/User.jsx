import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const User = (props)=>{

    return(
        <>
        <TableContainer component={Paper} sx={{ maxWidth: "90%", margin: 'auto'}}>
            <Table sx={{ minWidth: 650}} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Phone Number</TableCell>
                    <TableCell align="right">Payment Channel</TableCell>
                    <TableCell align="right">Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {props.data.map((row) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell align="right">{row.email_id}</TableCell>
                    <TableCell align="right">{row.phone_number}</TableCell>
                    <TableCell align="right">{row.payment_channel}</TableCell>
                    <TableCell align="right">{row.transaction_status}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}

export default User;