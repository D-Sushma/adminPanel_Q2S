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
import { useState } from 'react';

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
    player1: '---',
    player2: '---',
    testDate: '18 january, 2019',
    subscription: 'Yes',
    slotStart: '---',
    slotEnd: '---',
    status: 'close',
  },
  {
    id: 2,
    name: 'kessy bryan',
    subject: 'My Fintech LTD.',
    player1: '---',
    player2: '---',
    testDate: '10 january, 2019',
    subscription: 'Yes',
    slotStart: '---',
    slotEnd: '---',
    status: 'open',
  },
  {
    id: 3,
    subject: 'My Fintech LTD.',
    name: 'kessy bryan',
    player1: '---',
    player2: '---',
    testDate: '10 january, 2019',
    subscription: 'Yes',
    slotStart: '---',
    slotEnd: '---',
    status: 'open',
  },
  {
    id: 4,
    name: 'james cassegne',
    subject: 'Collboy Tech LTD.',
    player1: '---',
    player2: '---',
    testDate: '8 january, 2019',
    subscription: 'Yes',
    slotStart: '---',
    slotEnd: '---',
    status: 'close',
  },
  {
    id: 5,
    name: 'lucy brown',
    subject: 'ABC Fintech LTD.',
    player1: '---',
    player2: '---',
    testDate: '1 january, 2019',
    subscription: 'Yes',
    slotStart: '---',
    slotEnd: '---',
    status: 'open',
  },
  {
    id: 6,
    name: 'lucy brown',
    subject: 'ABC Fintech LTD.',
    player1: '---',
    player2: '---',
    testDate: '1 january, 2019',
    subscription: 'Yes',
    slotStart: '---',
    slotEnd: '---',
    status: 'open',
  },
  {
    id: 7,
    name: 'lucy brown',
    subject: 'ABC Fintech LTD.',
    testDate: '1 january, 2019',
    amount: 89000,
    status: 'open',
  },
  {
    id: 8,
    name: 'lucy brown',
    subject: 'ABC Fintech LTD.',
    player1: '---',
    player2: '---',
    testDate: '1 january, 2019',
    subscription: 'Yes',
    slotStart: '---',
    slotEnd: '---',
    status: 'open',
  },
  {
    id: 9,
    name: 'lucy brown',
    subject: 'ABC Fintech LTD.',
    player1: '---',
    player2: '---',
    testDate: '1 january, 2019',
    subscription: 'Yes',
    slotStart: '---',
    slotEnd: '---',
    status: 'open',
  },
];

const PaginationTable = () => {
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
      {/* #d0ebf4 */}
      {/* lightgreen #ccff90*/}
      <StyledTable bgcolor="#fafafa">
        <TableHead bgcolor="#e0f7fa">
          <TableRow>
            <TableCell align="center">SNO</TableCell>
            <TableCell align="center">COMPETITION GROUP NAME</TableCell>
            <TableCell align="center">SUBJECT</TableCell>
            <TableCell align="center">PLAYER1</TableCell>
            <TableCell align="center">PLAYER2</TableCell>
            <TableCell align="center">TEST-DATE</TableCell>
            <TableCell align="center">SUBSCRIPTION</TableCell>
            <TableCell align="center">SLOT START</TableCell>
            <TableCell align="center">SLOT END</TableCell>
            <TableCell align="center">STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribarList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell align="center">{subscriber.id}</TableCell>
                <TableCell align="center">{subscriber.name}</TableCell>
                <TableCell align="center">{subscriber.subject}</TableCell>
                <TableCell align="center">{subscriber.player1}</TableCell>
                <TableCell align="center">{subscriber.player2}</TableCell>
                <TableCell align="center">{subscriber.testDate}</TableCell>
                <TableCell align="center">{subscriber.subscription}</TableCell>
                <TableCell align="center">{subscriber.slotStart}</TableCell>
                <TableCell align="center">{subscriber.slotEnd}</TableCell>
                <TableCell align="center">{subscriber.status}</TableCell>

                {/* <TableCell align="right">
                  <IconButton>
                    <Icon color="error">close</Icon>
                  </IconButton>
                </TableCell> */}
              </TableRow>
            ))}
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
