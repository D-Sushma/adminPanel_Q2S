// import React from 'react';
// import AutocompleteCombo from './AutocompleteCombo';
// import PaginationTable from './PaginationTable';
// export default function CompetitionList() {
//   return (
//     <>
//       <div>CompetitionList</div>
//       <AutocompleteCombo />
//       <PaginationTable />
//     </>
//   );
// }
//============================================================================================================
// import Layout1 from "./components/MatxLayout/Layout1/Layout1";
import { Button, Box, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb, SimpleCard } from 'app/components';
// import AutocompleteCombo from './Shared/AutocompleteCombo';
import PaginationTable from './Shared/PaginationTable';
import SubjectAndDateRecord from '../filter/Shared/SubjectAndDateRecord';

const CompetitionList = () => {
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
  return (
    <>
      <Container>
        <Box className="breadcrumb" display="flex" justifyContent="space-between">
          <Breadcrumb
            routeSegments={[
              { name: 'Competition-List', path: '/competition-list' },
              { name: 'Table' },
            ]}
          />
          {/* // -------------FOR BACK BUTTON-------------------- */}
          <Button
            // fullWidth
            color="primary"
            variant="outlined"
            onClick={() => navigate(-1)}
          // sx={{ mt: 2, mb: 2, ml: 2 }}
          >
            Go Back
          </Button>
        </Box>
        <SubjectAndDateRecord />
        {/* <SimpleCard > */}
        {/* <AutocompleteCombo /> */}
        {/* <SubjectAndDateRecord /> */}
        {/* </SimpleCard> */}
        <Box sx={{mt:1}}>
          <SimpleCard title="COMPETITION - LIST">
            <PaginationTable />
          </SimpleCard>
        </Box>
      </Container>

      {/* <Layout1/> */}
    </>
  );
};

export default CompetitionList;
