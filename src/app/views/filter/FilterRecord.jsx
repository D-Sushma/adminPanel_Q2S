import React from 'react';
import SubjectRecord from './Shared/SubjectRecord';
import { Breadcrumb, SimpleCard } from 'app/components';
import { styled, Button, Box, Icon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WeeklyRecord from './Shared/WeeklyRecord';
// validation---------------
import { Span } from "app/components/Typography";

export default function FilterRecord() {
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
            routeSegments={[{ name: 'Filter Record', path: '/filter' }, { name: 'filter' }]}
          />
          {/* // -------------FOR BACK BUTTON-------------------- */}
          <Button
            color="primary"
            variant="outlined"
            onClick={() => navigate(-1)}
            // sx={{ mt: 2, mb: 2, ml: 2 }}
          >
            Go Back
          </Button>
        </Box>

        
          <Box display="flex" justifyContent="space-evenly">
            <SimpleCard title="SUBJECT">
              <SubjectRecord />
            </SimpleCard>

            <SimpleCard title="WEEKLY">
              <WeeklyRecord />
            </SimpleCard>
          </Box>

          <Button color="primary" variant="contained" type="submit" sx={{  ml:130}}>
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize"}}>Submit</Span>
        </Button>
      </Container>
    </>
  );
}
