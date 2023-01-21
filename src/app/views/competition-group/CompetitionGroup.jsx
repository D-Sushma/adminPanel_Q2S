import React from 'react';
import { styled, Button, Box } from '@mui/material';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb, SimpleCard } from 'app/components';
import AutocompleteCombo from './Shared/AutocompleteCombo';
import PaginationTable from './Shared/PaginationTable';

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
              { name: 'Cpmpetition-Group', path: '/Cpmpetition-Group' },
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
        <SimpleCard title="COMPETITION - GROUP">
          <AutocompleteCombo />
        </SimpleCard>
        <SimpleCard>
          <PaginationTable />
        </SimpleCard>
      </Container>
    </>
  );
};
export default CompetitionList;
