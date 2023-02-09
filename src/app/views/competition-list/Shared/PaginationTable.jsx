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

// const subscribarList = [
//   {
//     id: 1,
//     name: 'john doe',
//     subject: 'ABC Fintech LTD.',
//     player1: '---',
//     player2: '---',
//     testDate: '18 january, 2019',
//     subscription: 'Yes',
//     slotStart: '---',
//     slotEnd: '---',
//     status: 'close',
//   },
//   {
//     id: 2,
//     name: 'kessy bryan',
//     subject: 'My Fintech LTD.',
//     player1: '---',
//     player2: '---',
//     testDate: '10 january, 2019',
//     subscription: 'Yes',
//     slotStart: '---',
//     slotEnd: '---',
//     status: 'open',
//   },
//   {
//     id: 3,
//     subject: 'My Fintech LTD.',
//     name: 'kessy bryan',
//     player1: '---',
//     player2: '---',
//     testDate: '10 january, 2019',
//     subscription: 'Yes',
//     slotStart: '---',
//     slotEnd: '---',
//     status: 'open',
//   },
//   {
//     id: 4,
//     name: 'james cassegne',
//     subject: 'Collboy Tech LTD.',
//     player1: '---',
//     player2: '---',
//     testDate: '8 january, 2019',
//     subscription: 'Yes',
//     slotStart: '---',
//     slotEnd: '---',
//     status: 'close',
//   },
//   {
//     id: 5,
//     name: 'lucy brown',
//     subject: 'ABC Fintech LTD.',
//     player1: '---',
//     player2: '---',
//     testDate: '1 january, 2019',
//     subscription: 'Yes',
//     slotStart: '---',
//     slotEnd: '---',
//     status: 'open',
//   },
//   {
//     id: 6,
//     name: 'lucy brown',
//     subject: 'ABC Fintech LTD.',
//     player1: '---',
//     player2: '---',
//     testDate: '1 january, 2019',
//     subscription: 'Yes',
//     slotStart: '---',
//     slotEnd: '---',
//     status: 'open',
//   },
//   {
//     id: 7,
//     name: 'lucy brown',
//     subject: 'ABC Fintech LTD.',
//     testDate: '1 january, 2019',
//     amount: 89000,
//     status: 'open',
//   },
//   {
//     id: 8,
//     name: 'lucy brown',
//     subject: 'ABC Fintech LTD.',
//     player1: '---',
//     player2: '---',
//     testDate: '1 january, 2019',
//     subscription: 'Yes',
//     slotStart: '---',
//     slotEnd: '---',
//     status: 'open',
//   },
//   {
//     id: 9,
//     name: 'lucy brown',
//     subject: 'ABC Fintech LTD.',
//     player1: '---',
//     player2: '---',
//     testDate: '1 january, 2019',
//     subscription: 'Yes',
//     slotStart: '---',
//     slotEnd: '---',
//     status: 'open',
//   },
// ];

const PaginationTable = () => {
  console.log('inside pagination table');
  // ----------DB FETCH------------------------------
  let [users, setUsers  ] = useState([]);
  let fetchData = ()=> {
    fetch('http://localhost:4000/competitionlistdetails')
    .then((response)=>{
      console.log('response');
      return response.json();
    })
    .then((data)=>{
      console.log('inside data f competition list',data);
      setUsers(data.response);
    })
  };
  console.log('after pagination table');
  useEffect(()=>{
    fetchData();
  },[]);
  // ----------DB FETCH END------------------------------
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
    <Box width="100%" overflow="auto" >
      {/* marginLeft="10px" border="1px dashed black" */}
      {/* #d0ebf4 lightgreen #ccff90**/}
      {/* sx={{ tableLayout: 'auto' }} */}
      <StyledTable sx={{ tableLayout: 'auto' }} bgcolor="#fafafa">
        <TableHead bgcolor="#e0f7fa">
          <TableRow>
            <TableCell align="center">SNO</TableCell>
            <TableCell align="center">COMPETITION GROUP NAME</TableCell>
            <TableCell align="center">SUBJECT</TableCell>
            {/* <TableCell align="center">TOTAL QUESTION</TableCell> */}
            <TableCell align="center">PLAYER1</TableCell>
            <TableCell align="center">PLAYER2</TableCell>
            <TableCell align="center">TEST-DATE</TableCell>
            <TableCell align="center">SUBSCRIPTION</TableCell>
            {/* <TableCell align="center">P1 COUNT</TableCell>
            <TableCell align="center">P2 COUNT</TableCell>
            <TableCell align="center">P1 TIME</TableCell>
            <TableCell align="center">P2 TIME</TableCell> */}
            <TableCell align="center">SLOT START</TableCell>
            <TableCell align="center">SLOT END</TableCell>
            {/* <TableCell align="center">STATUS</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {subscribarList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => ( */}
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((user,index)=>{
              let pid = user.pid;
              console.log("pid", pid);
              return(
              <TableRow key={index}>
                <TableCell align="center">{user.id}</TableCell>
                <TableCell align="center">{user.competition_group_id}</TableCell>

                {(user.subject_id)===6 ? <TableCell align="center">ENGLISH</TableCell>
                : (user.subject_id)===13 ? <TableCell align="center">GK</TableCell>
                : <TableCell align="center">----</TableCell>}
                
                {/* <TableCell align="center">{user.total_questions}</TableCell> */}
                <TableCell align="center">{user.p1_name}</TableCell>
                <TableCell align="center">{user.p2_name}</TableCell>
                <TableCell align="center">{moment(user.test_date).format('DD/MM/YYYY')}</TableCell>

                {(user.subscription_id)===1 ? <TableCell align="center">Weekly</TableCell>
                : <TableCell align="center">----</TableCell>}
                
                {/* <TableCell align="center">{user.p1_correct_count}</TableCell>
                <TableCell align="center">{user.p2_correct_count}</TableCell>
                <TableCell align="center">{user.p1_time_taken}</TableCell>
                <TableCell align="center">{user.p1_time_taken}</TableCell> */}
                <TableCell align="center">{user.slot_start}</TableCell>
                <TableCell align="center">{user.slot_end}</TableCell>
                {/* <TableCell align="center">status</TableCell> */}

                {/* <TableCell align="right">
                  <IconButton>
                    <Icon color="error">close</Icon>
                  </IconButton>
                </TableCell> */}
              </TableRow>
              )})}
            {/* ))} */}
        </TableBody>
      </StyledTable>

      <TablePagination
        // bg-green
        // elevation-z8
        text-44
        // sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
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
