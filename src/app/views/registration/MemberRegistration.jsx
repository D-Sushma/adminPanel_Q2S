import React from 'react';
// import Layout1 from './components/MatxLayout/Layout1/Layout1';
// -----------------------------------------------------------------
// import { Card, Grid, styled, useTheme, Button, Box } from '@mui/material';
import { styled, Button, Box } from '@mui/material';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb, SimpleCard } from 'app/components';
// import AutocompleteCombo from './Shared/AutocompleteCombo';
import PaginationTable from './Shared/PaginationTable';
import SubjectAndDateRecord from '../filter/Shared/SubjectAndDateRecord';

// const ContentBox = styled('div')(({ theme }) => ({
//   margin: '30px',
//   [theme.breakpoints.down('sm')]: { margin: '16px' },
// }));

// const Title = styled('span')(() => ({
//   fontSize: '1rem',
//   fontWeight: '500',
//   marginRight: '.5rem',
//   textTransform: 'capitalize',
// }));

// const SubTitle = styled('span')(({ theme }) => ({
//   fontSize: '0.875rem',
//   color: theme.palette.text.secondary,
// }));

// const H4 = styled('h4')(({ theme }) => ({
//   fontSize: '1rem',
//   fontWeight: '500',
//   marginBottom: '16px',
//   textTransform: 'capitalize',
//   color: theme.palette.text.secondary,
// }));

const MemberRegistration = () => {
  // const { palette } = useTheme();

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
      <Fragment>
        {/* <ContentBox className="analytics"> */}
        {/* <Grid container spacing={3}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <H4>Ongoing Projects</H4>
              <AutocompleteCombo />
            </Grid>
            <PaginationTable />
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <Title>Traffic Sources</Title>
                <SubTitle>Last 30 days</SubTitle>
              </Card>
            </Grid>
          </Grid> */}
        <Container>
          <Box className="breadcrumb" display="flex" justifyContent="space-between">
            <Breadcrumb
              routeSegments={[{ name: 'Registration', path: '/registration' }, { name: 'Table' }]}
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
          {/* <SimpleCard >
            <SubjectAndDateRecord />
            <AutocompleteCombo />
            <PaginationTable />
          </SimpleCard> */}
          <SimpleCard title="MEMBER REGISTRATION">
            <PaginationTable />
          </SimpleCard>
        </Container>
        {/* </ContentBox> */}
      </Fragment>
      {/* -------------------------------------------------------------- */}
      {/* <Container>
        <Box className="breadcrumb" display="flex" justifyContent="space-between">
          <Breadcrumb
            routeSegments={[{ name: 'Registration', path: '/registration' }, { name: 'Table' }]}
          />
          // -------------FOR BACK BUTTON--------------------
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
        <SimpleCard title="MEMBER REGISTRATION">
          <AutocompleteCombo />
          <PaginationTable />
        </SimpleCard>
        <SimpleCard>
          <PaginationTable />
        </SimpleCard>
      </Container> */}

      {/* <Layout1 /> */}
    </>
  );
};

export default MemberRegistration;
