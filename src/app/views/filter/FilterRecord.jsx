import React, { useState } from 'react';
// import SubjectRecord from './Shared/SubjectRecord';
import { Breadcrumb, SimpleCard } from 'app/components';
import { styled, Button, Box } from '@mui/material';
// import { Icon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import WeeklyRecord from './Shared/WeeklyRecord';
// import CalendarComp from './Shared/CalendarComp'
// import DateRangeComp from './Shared/DateRangeComp';
// import DateRangePickerComp from './Shared/DateRangePickerComp';
import SubjectAndDateRecord from './Shared/SubjectAndDateRecord';
import TotalRecord from './Shared/TotalRecord';

// validation---------------
// import { Span } from 'app/components/Typography';

export default function FilterRecord() {
  const [regRecord, setRegRecord] = useState([]);

  // -------------FOR BACK BUTTON--------------------
  const navigate = useNavigate();

  // ...............FOR BREADCRUMB CONNTAINER COMPONENT.........................
  const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    height: '50%',
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

        <SimpleCard>
          <SubjectAndDateRecord setRegRecord={setRegRecord} />
        </SimpleCard>
        <Box sx={{ mt: 1 }}>
          <SimpleCard>
            <TotalRecord regRecord={regRecord} />
          </SimpleCard>
        </Box>

        {/* <Box display="flex" justifyContent="space-evenly" sx={{ mt:10}}>
          <Box sx={{ height: 150 }}>
            <SimpleCard title="SUBJECT">
              <SubjectRecord />
            </SimpleCard>
          </Box>
          <Box>
            <SimpleCard title="WEEKLY">
              <WeeklyRecord />
              <CalendarComp />
              <DateRangeComp />
              <DateRangePickerComp />
            </SimpleCard>
          </Box>
        </Box> */}

        {/* <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={{ ml: 134, mt: 15 }}
          position="fixed"
        >
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
        </Button> */}
      </Container>
    </>
  );
}
