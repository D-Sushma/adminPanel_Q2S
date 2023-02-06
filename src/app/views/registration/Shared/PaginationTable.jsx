import moment from 'moment';
import {
  Box,
  // Icon,
  // IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';

const StyledTable = styled(Table)(() => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

const subscribarList = [
  {
    id: 1,
    name: 'john doe',
    subject: 'ABC Fintech LTD.',
    subscription: 'Yes',
    status: 'close',
    created: '18 january, 2019',
    expiry: '18 january, 2019',
  },
  {
    id: 2,
    name: 'kessy bryan',
    subject: 'My Fintech LTD.',
    subscription: 'No',
    status: 'open',
    created: '10 january, 2019',
    expiry: '10 january, 2019',
  },
  {
    id: 3,
    name: 'kessy bryan',
    subject: 'My Fintech LTD.',
    subscription: 'Yes',
    status: 'open',
    created: '10 january, 2019',
    expiry: '10 january, 2019',
  },
  {
    id: 4,
    name: 'james cassegne',
    subject: 'Collboy Tech LTD.',
    status: 'close',
    subscription: 'No',
    created: '8 january, 2019',
    expiry: '8 january, 2019',
  },
  {
    id: 5,
    name: 'lucy brown',
    subject: 'ABC Fintech LTD.',
    subscription: 'Yes',
    status: 'open',
    created: '1 january, 2019',
    expiry: '1 january, 2019',
  },
  {
    id: 6,
    name: 'lucy brown',
    subject: 'ABC Fintech LTD.',
    subscription: 'No',
    status: 'open',
    created: '1 january, 2019',
    expiry: '1 january, 2019',
  },
  {
    id: 7,
    name: 'lucy brown',
    subject: 'ABC Fintech LTD.',
    subscription: 'Yes',
    status: 'open',
    created: '1 january, 2019',
    expiry: '1 january, 2019',
  },
  {
    id: 8,
    name: 'lucy brown',
    subject: 'ABC Fintech LTD.',
    subscription: 'No',
    status: 'open',
    created: '1 january, 2019',
    expiry: '1 january, 2019',
  },
  {
    id: 9,
    name: 'lucy brown',
    subject: 'ABC Fintech LTD.',
    subscription: 'Yes',
    status: 'open',
    created: '1 january, 2019',
    expiry: '1 january, 2019',
  },
];

const PaginationTable = () => {
  console.log('inside pagination table');
  // ----------DB FETCH------------------------------
  const [users, setUsers] = useState([]);
  const fetchData = () => {
    fetch('http://localhost:4000/memberregistration')
      .then((response) => {
        console.log('response');
        return response.json();
      })
      .then((data) => {
        console.log('inside data', data);
        setUsers(data.response);
      });
  };
  console.log('after pagination table');
  useEffect(() => {
    fetchData();
  }, []);
  // ----------DB FETCH END-------------------------

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box width="100%" overflow="auto">
      {/* // marginLeft="15px" border="1px dotted black" */}
      {/* #f1f8e9 */}
      <StyledTable sx={{ tableLayout: 'auto' }} bgcolor="#fafafa">
        <TableHead bgcolor="#e0f7fa">
          <TableRow>
            <TableCell align="center">SNO</TableCell>
            <TableCell align="center">USER ID</TableCell>
            <TableCell align="center">SUBJECT</TableCell>
            <TableCell align="center">SUBSCRIPTION</TableCell>
            <TableCell align="center">STATUS(ACTIVE/DEACTIVE)</TableCell>
            <TableCell align="center">UPDATED</TableCell>
            <TableCell align="center">CREATED</TableCell>
            <TableCell align="center">EXPIRY DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {subscribarList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => ( */}
          {/* <TableRow key={index}> */}
          {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((user, index) => (
            <TableRow key={index}>
              <TableCell align="center">{user.id}</TableCell>
              <TableCell align="center">{user.userid}</TableCell>
              <TableCell align="center">{user.subject}</TableCell>
              <TableCell align="center">{user.subscription}</TableCell>
              <TableCell align="center">{user.status}</TableCell>
              <TableCell align="center">{moment(user.updated_at).format('DD/MM/YYYY')}</TableCell>
              <TableCell align="center">{moment(user.created_at).format('DD/MM/YYYY')}</TableCell>
              <TableCell align="center">{moment(user.expiry_date).format('DD/MM/YYYY')}</TableCell>
              {/* <TableCell align="right">
                  <IconButton>
                    <Icon color="error">close</Icon>
                  </IconButton>
                </TableCell> */}
            </TableRow>
          ))}
          {/* ))} */}
        </TableBody>
      </StyledTable>

      <TablePagination
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        // count={subscribarList.length}
        count={users.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
      />
    </Box>
  );
};

export default PaginationTable;
