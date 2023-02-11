import moment from 'moment';
import useParams  from 'react-router-dom';
import { Link } from "react-router-dom";
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
import { useState, useEffect } from 'react';
// FOR BACK BUTTON...........................................
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
//     group_id: 'john doe',
//     total_competition: 'ABC Fintech LTD.',
//     competition_date: '18 january, 2019',
//     winner: 'Yes',
//     more_detail: 'More-Details',
//   },

//   {
//     id: 2,
//     group_id: 'kessy bryan',
//     total_competition: 'My Fintech LTD.',
//     competition_date: '10 january, 2019',
//     winner: 'Yes',
//     more_detail: '---',
//   },
//   {
//     id: 3,
//     total_competition: 'My Fintech LTD.',
//     group_id: 'kessy bryan',
//     competition_date: '10 january, 2019',
//     winner: 'Yes',
//     more_detail: '---',
//   },
//   {
//     id: 4,
//     group_id: 'james cassegne',
//     total_competition: 'Collboy Tech LTD.',
//     competition_date: '8 january, 2019',
//     winner: 'Yes',
//     more_detail: '---',
//   },
//   {
//     id: 5,
//     group_id: 'lucy brown',
//     total_competition: 'ABC Fintech LTD.',
//     competition_date: '1 january, 2019',
//     winner: 'Yes',
//     more_detail: '---',
//   },
//   {
//     id: 6,
//     group_id: 'lucy brown',
//     total_competition: 'ABC Fintech LTD.',
//     competition_date: '1 january, 2019',
//     winner: 'Yes',
//     more_detail: '---',
//   },
//   {
//     id: 7,
//     group_id: 'lucy brown',
//     total_competition: 'ABC Fintech LTD.',
//     competition_date: '1 january, 2019',
//     winner: 'Yes',
//     more_detail: '---',
//   },
//   {
//     id: 8,
//     group_id: 'lucy brown',
//     total_competition: 'ABC Fintech LTD.',
//     competition_date: '1 january, 2019',
//     winner: 'Yes',
//     more_detail: '---',
//   },
//   {
//     id: 9,
//     group_id: 'lucy brown',
//     total_competition: 'ABC Fintech LTD.',
//     competition_date: '1 january, 2019',
//     winner: 'Yes',
//     more_detail: '---',
//   },
// ];


const PaginationTable = () => {
  // function MoredetailPage() {
  //   // moredetailpage====
  //   // Get the userId param from the URL.
  //   let { id } = useParams();
  // }

  console.log('inside pagination table');
  // ----------DB FETCH------------------------------
  let [users, setUsers  ] = useState([]);
  let fetchData = ()=> {
    fetch('http://localhost:4000/competitiongroupdetails')
    .then((response)=>{
      console.log('response');
      return response.json();
    })
    .then((data)=>{
      console.log('inside data of competition group',data);
      setUsers(data.response);
    })
  };
  console.log('after pagination table');
  useEffect(()=>{
    fetchData();
  },[]);
  // ----------DB FETCH END------------------------------
  // -------------FOR BACK BUTTON--------------------
  const navigate = useNavigate();

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
      {/* marginLeft="10px" border="1px dashed black" */}
      {/* lightgreen #ccff90  #d0ebf4*/}

      <StyledTable sx={{ tableLayout: 'auto' }} bgcolor="#fafafa">
        <TableHead bgcolor="#e0f7fa">
          <TableRow>
            <TableCell align="center">SNO</TableCell>
            <TableCell align="center">COMPETITION GROUP ID</TableCell>
            <TableCell align="center">TOTAL COMPETITION</TableCell>
            <TableCell align="center">COMPETITION-DATE</TableCell>
            <TableCell align="center">WINNER</TableCell>
            <TableCell align="center">MORE_DETAIL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {subscribarList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => ( */}
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((user,index)=>{
              let cgid = user.competition_group_id;
              console.log("cgid",cgid);
              return(
              <TableRow key={index}>
                <TableCell align="center">{user.id}</TableCell>
                <TableCell align="center">{user.competition_group_id}</TableCell>
                <TableCell align="center">{user.grp_cnt}</TableCell>
                <TableCell align="center">{moment(user.test_date).format('DD/MM/YYYY')}</TableCell>
                <TableCell align="center">{user.winner_name}</TableCell>
                <TableCell align="center">
                 
                <Link to={`/competition-group/MoreDetailsTabl/${user.competition_group_id}`}>
                  <Button
                    // onClick={() => navigate('/competition-group/MoreDetailsTable/${user.competition_group_id}', cgid = (cgid) )}
                    color="primary"
                    variant="outlined"
                    sx={{ width: 100, padding: 0, margin: 0 }}
                  >
                    More-Details
                  </Button>
                  </Link>
                </TableCell>

              </TableRow>
            )})}
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
