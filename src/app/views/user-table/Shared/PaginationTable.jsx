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
import React, { useState, useEffect } from 'react';

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
    fname: 'john doe',
    lname: 'ABC Fintech LTD.',
    mobile: 'Yes',
    emailid: 'close',
    // created: '18 january, 2019',
    expiry: '18 january, 2019',
  },
  {
    id: 2,
    fname: 'kessy bryan',
    lname: 'My Fintech LTD.',
    mobile: 'No',
    emailid: 'open',
    // created: '10 january, 2019',
    expiry: '10 january, 2019',
  },
  {
    id: 3,
    fname: 'kessy bryan',
    lname: 'My Fintech LTD.',
    mobile: 'Yes',
    emailid: 'open',
    // created: '10 january, 2019',
    expiry: '10 january, 2019',
  },
  {
    id: 4,
    fname: 'james cassegne',
    lname: 'Collboy Tech LTD.',
    emailid: 'close',
    mobile: 'No',
    // created: '8 january, 2019',
    expiry: '8 january, 2019',
  },
  {
    id: 5,
    fname: 'lucy brown',
    lname: 'ABC Fintech LTD.',
    mobile: 'Yes',
    emailid: 'open',
    // created: '1 january, 2019',
    expiry: '1 january, 2019',
  },
  {
    id: 6,
    fname: 'lucy brown',
    lname: 'ABC Fintech LTD.',
    mobile: 'No',
    emailid: 'open',
    // created: '1 january, 2019',
    expiry: '1 january, 2019',
  },
  {
    id: 7,
    fname: 'lucy brown',
    lname: 'ABC Fintech LTD.',
    mobile: 'Yes',
    emailid: 'open',
    // created: '1 january, 2019',
    // expiry: '1 january, 2019',
  },
  {
    id: 8,
    fname: 'lucy brown',
    lname: 'ABC Fintech LTD.',
    mobile: 'No',
    emailid: 'open',
    // created: '1 january, 2019',
    // expiry: '1 january, 2019',
  },
  {
    id: 9,
    fname: 'lucy brown',
    lname: 'ABC Fintech LTD.',
    mobile: 'Yes',
    emailid: 'open',
    // created: '1 january, 2019',
    // expiry: '1 january, 2019',
  },
];

const PaginationTable = () => {
  // ----------DB FETCH------------------------------
  const [users, setUsers] = useState([]);
  const fetchData = () => {
    fetch('http://localhost:4000/all')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // setUsers(data);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  // const apiUrl = 'http://localhost:4000/all';
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => console.log('This is your data', data));
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
      <StyledTable sx={{ tableLayout: 'auto' }} bgcolor="#fafafa">
        <TableHead bgcolor="#e0f7fa">
          <TableRow>
            <TableCell align="center">SNO</TableCell>
            <TableCell align="center">FIRST NAME</TableCell>
            <TableCell align="center">LAST NAME</TableCell>
            <TableCell align="center">MOBILE</TableCell>
            <TableCell align="center">EMAIL ID</TableCell>
            {/* <TableCell align="center">SCHOOL</TableCell>
            <TableCell align="center">CLASS</TableCell>
            <TableCell align="center">STATUS</TableCell>
            <TableCell align="center">ENTRY DATE</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {subscribarList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => ( */}
            {users.length > 0 && (
              users.map(user => (
              <TableRow key={user.id}>
                <TableCell align="center">{user.id}</TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.address}</TableCell>
                {/* <TableCell align="center">{subscriber.mobile}</TableCell> */}
                {/* <TableCell align="center">{subscriber.emailid}</TableCell> */}
                {/* <TableCell align="center">{subscriber.created}</TableCell> */}
                {/* <TableCell align="center">{subscriber.expiry}</TableCell> */}
                {/* <TableCell align="right">
                  <IconButton>
                    <Icon color="error">close</Icon>
                  </IconButton>
                </TableCell> */}
              </TableRow>
              ))
            )}
            {/* ))} */}
        </TableBody>
      </StyledTable>

      <TablePagination
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={subscribarList.length}
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
