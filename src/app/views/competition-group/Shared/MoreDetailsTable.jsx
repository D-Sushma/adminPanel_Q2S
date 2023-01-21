import {
  Box,
  // Icon,
  // IconButton,
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { useState } from 'react';
import { Breadcrumb, SimpleCard } from 'app/components';
import { useNavigate } from 'react-router-dom';
import DialogTransition from './DialogTransition';
import FullScreenDialog from './FullScreenDialog';

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
    group_id: 'john doe',
    total_competition: 'ABC Fintech LTD.',
    player1: '---',
    player2: '---',
    competition_date: '18 january, 2019',
    winner: 'Yes',
    more_detail: '---',
    slotEnd: '---',
    status: 'close',
    result: '---',
  },
  {
    id: 2,
    group_id: 'kessy bryan',
    total_competition: 'My Fintech LTD.',
    player1: '---',
    player2: '---',
    competition_date: '10 january, 2019',
    winner: 'Yes',
    more_detail: '---',
    slotEnd: '---',
    status: 'open',
  },
  {
    id: 3,
    total_competition: 'My Fintech LTD.',
    group_id: 'kessy bryan',
    player1: '---',
    player2: '---',
    competition_date: '10 january, 2019',
    winner: 'Yes',
    more_detail: '---',
    slotEnd: '---',
    status: 'open',
  },
  {
    id: 4,
    group_id: 'james cassegne',
    total_competition: 'Collboy Tech LTD.',
    player1: '---',
    player2: '---',
    competition_date: '8 january, 2019',
    winner: 'Yes',
    more_detail: '---',
    slotEnd: '---',
    status: 'close',
  },
  {
    id: 5,
    group_id: 'lucy brown',
    total_competition: 'ABC Fintech LTD.',
    player1: '---',
    player2: '---',
    competition_date: '1 january, 2019',
    winner: 'Yes',
    more_detail: '---',
    slotEnd: '---',
    status: 'open',
  },
  {
    id: 6,
    group_id: 'lucy brown',
    total_competition: 'ABC Fintech LTD.',
    player1: '---',
    player2: '---',
    competition_date: '1 january, 2019',
    winner: 'Yes',
    more_detail: '---',
    slotEnd: '---',
    status: 'open',
  },
  {
    id: 7,
    group_id: 'lucy brown',
    total_competition: 'ABC Fintech LTD.',
    competition_date: '1 january, 2019',
    amount: 89000,
    status: 'open',
  },
  {
    id: 8,
    group_id: 'lucy brown',
    total_competition: 'ABC Fintech LTD.',
    player1: '---',
    player2: '---',
    competition_date: '1 january, 2019',
    winner: 'Yes',
    more_detail: '---',
    slotEnd: '---',
    status: 'open',
  },
  {
    id: 9,
    group_id: 'lucy brown',
    total_competition: 'ABC Fintech LTD.',
    player1: '---',
    player2: '---',
    competition_date: '1 january, 2019',
    winner: 'Yes',
    more_detail: '---',
    slotEnd: '---',
    status: 'open',
  },
];

const MoreDetailsTable = () => {
  // -------------FOR BACK BUTTON--------------------
  const navigate = useNavigate();

  // ...............FOR BREADCRUMB CONNTAINER COMPONENT.........................
  const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
      marginBottom: '30px',
      [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
    },
  }));

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
    <>
      <Container>
        <Box className="breadcrumb" display="flex" justifyContent="space-between">
          <Breadcrumb
            routeSegments={[
              { name: 'More Details Table', path: '/Cpmpetition-Group' },
              { name: 'Table' },
            ]}
          />
          <Box display="flex">
            {/* // -------------FOR BACK BUTTON-------------------- */}
            <Button
              // fullWidth
              color="primary"
              variant="outlined"
              onClick={() => navigate(-1)}
              sx={{ mr: 2 }}
              // sx={{ mt: 2, mb: 2, ml: 2 }}
            >
              Go Back
            </Button>
            <FullScreenDialog />
          </Box>
        </Box>

        <SimpleCard title="More Details Table">
          <Box width="100%" overflow="auto">
            <StyledTable sx={{ tableLayout: 'auto' }} bgcolor="#fafafa">
              <TableHead bgcolor="#e0f7fa">
                <TableRow>
                  <TableCell align="center">SNO</TableCell>
                  <TableCell align="center">PLAYER 1</TableCell>
                  <TableCell align="center">PLAYER 2</TableCell>
                  <TableCell align="center">MARK PLAYER 1</TableCell>
                  <TableCell align="center">MARK PLAYER 2</TableCell>
                  <TableCell align="center">PLAYER 1 TIME</TableCell>
                  <TableCell align="center">PLAYER 2 TIME</TableCell>
                  <TableCell align="center">WINNER</TableCell>
                  <TableCell align="center">SLOT START</TableCell>
                  <TableCell align="center">SLOT END </TableCell>
                  <TableCell align="center">WALK OVER</TableCell>
                  <TableCell align="center">RESULT</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subscribarList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((subscriber, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{subscriber.id}</TableCell>
                      <TableCell align="center">{subscriber.group_id}</TableCell>
                      <TableCell align="center">{subscriber.total_competition}</TableCell>
                      <TableCell align="center">{subscriber.competition_date}</TableCell>
                      <TableCell align="center">{subscriber.winner}</TableCell>
                      <TableCell align="center">{subscriber.more_detail}</TableCell>
                      <TableCell align="center">{subscriber.more_detail}</TableCell>
                      <TableCell align="center">{subscriber.more_detail}</TableCell>
                      <TableCell align="center">{subscriber.more_detail}</TableCell>
                      <TableCell align="center">{subscriber.more_detail}</TableCell>
                      <TableCell align="center">{subscriber.more_detail}</TableCell>
                      <TableCell align="center">
                        <DialogTransition />
                      </TableCell>

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
              text-44
              // bg-green
              // elevation-z8
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
        </SimpleCard>
      </Container>
    </>
  );
};

export default MoreDetailsTable;
