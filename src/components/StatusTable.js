import React from 'react';
import Link from '@material-ui/core/Link';
import { FaCircle, FaPlusCircle } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, status, expandLink, vehFaultDescription, vehFaultStats) {
  return { id, status, expandLink, vehFaultDescription, vehFaultStats };
}

const rows = [
  createData(0, '', '', 'Engine Overheat', '1 / 2'),
  createData(1, '', '', 'Trans Overheat', '3 / 4'),
  createData(2, '', '', 'PCV Valve Voltage Low', '9+ / 9+'),
  createData(3, '', '', 'Evap Canister Pressure High', '2 / 3'),
  createData(4, '', '', 'Defroster Circuit Open', '3 / 5'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function StatusTable() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Fleet Status</Title>
      
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>Expand</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Occurances / Engine Cycles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell><FaCircle /></TableCell>
              <TableCell><Link color="#1ca086" href="#" underline="none" onClick={preventDefault}><FaPlusCircle /></Link></TableCell>
              <TableCell>{row.vehFaultDescription}</TableCell>
              <TableCell>{row.vehFaultStats}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}