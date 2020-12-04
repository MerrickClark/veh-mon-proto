import React from 'react';
import Link from '@material-ui/core/Link';
import { FaPlus, FaPlusCircle } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, clientName, phone, vehicle) {
  return { id, clientName, phone, vehicle };
}

const rows = [
  createData(0, 'Adams, John', '831-555-1234', '2000 Honda Civic'),
  createData(1, 'Doe, Jane', '408-246-1924', '1996 Chevrolet K1500'),
  createData(2, 'Blumenthal, Frank', '808-959-5221', '2005 Chevrolet Corvette'),
  createData(2, 'Blumenthal, Frank', '808-959-5221', '2001 Ford Fiesta'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ClientsTable() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Clients</Title>
      
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Expand</TableCell>
            <TableCell>Last Name, First Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Vehicle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell><Link color="#1ca086" href="#" onClick={preventDefault}><FaPlusCircle /></Link></TableCell>
              <TableCell>{row.clientName}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>
                <Link color="#1ca086" href="#" onClick={preventDefault}>
                  {row.vehicle}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <FaPlus />&nbsp;
        <Link color="#1ca086" href="#" onClick={preventDefault}>
          Add Client
        </Link>
      </div>
    </React.Fragment>
  );
}