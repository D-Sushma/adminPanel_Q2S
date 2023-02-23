import React from 'react';
import moment from 'moment';
import { SimpleCard } from 'app/components';
// FOR SUBJECT RECORD.............................................
import { List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';

// FOR WEEKLY RECORD IMPORT PACKAGE..................................
import { useEffect, useRef, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import format from 'date-fns/format';
import { addDays } from 'date-fns';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
// ===================================================================
// validation---------------BUTTON
import { Button, Icon, Box } from '@mui/material';
import { Span } from 'app/components/Typography';

// FOR SUBJECT RECORD...................................................
const MenuRoot = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 360,
  backgroundColor: theme.palette.background.paper,
}));

const options = [
  'Show some love to Material-UI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];

export default function DateRangePickerComp() {
  // ----------DB FETCH------------------------------
  let [subjectrecord, setSubjectrecord] = useState([]);
  let fetchData = () => {
    fetch('http://localhost:4000/subjectrecord')
      .then((response) => {
        // console.log('response');
        return response.json();
      })
      .then((data) => {
        // console.log('inside data filter section', data);
        setSubjectrecord(data.response);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  // ----------DB FETCH END------------------------------
  // ----------DB FETCH------------------------------
  const [expiryDate, setExpiryDate ] = useState([]);
  // let expiryDate = [];
  const fetchData1 = () => {
    fetch('http://localhost:4000/memberregistration')
      .then((response) => {
        // console.log('response');
        return response.json();
      })
      .then((data) => {
        console.log('inside data subject date record', data);
        // setUsers(data.response);
        data.response.forEach((ele) => {
          let eDate =  moment(ele.expiry_date).format('DD-MM-YYYY');
          if(!expiryDate.includes(eDate)){
            setExpiryDate(expiryDate.push(eDate));
          }
          // console.log("ele", moment(ele.expiry_date).format('DD-MM-YYYY'));
        })
      });
      console.log('expiryDate',expiryDate);
  };
  useEffect(() => {
    fetchData1();
  }, []);



  // FOR SUBJECT RECORD...................................................
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  function handleClickListItem(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setAnchorEl(null);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  // FOR WEEKLY RECORD........................................................
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  //   open close --> (true)= display
  const [open, setOpen] = useState(false);

  //   now to detect outside click we will have to use useRef
  // get the target element to toggle
  const refOne = useRef(null);

  //   if will refresh the the page on load i want to display the date here on page load as well
  // ---> use useEffect Hook
  useEffect(() => {
    // set current date on component load with the current date
    // -----------CLOSE calender by clicking
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  //   hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key);
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current);
    // console.log(e.target);
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };


  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="0px">
        {/* // FOR SUBJECT RECORD................................................... */}
        <SimpleCard title="GK/ENGLISH">
          <MenuRoot sx={{ width: 300, height: 20 }}>
            <List component="nav" aria-label="Device settings">
              <ListItem
                button
                aria-haspopup="true"
                aria-controls="lock-menu"
                aria-label="When device is locked"
                onClick={handleClickListItem}
                sx={{ width: 250, marginTop: [-3], padding: 0 }}
              >
                <ListItemText
                  primary="Record Basis of Subject"
                  secondary={subjectrecord[selectedIndex]}
                // secondary={options[selectedIndex]}
                />
              </ListItem>
            </List>

            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {/* {options.map((option, index) => ( */}
              {subjectrecord.map((option, index) => (
                <MenuItem
                  key={option}
                  disabled={index === 0}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {/* {option} */}
                  GK - {option.subject_record}
                  <br />
                  ENGLISH - {option.c2_subject_record}
                  <br />
                </MenuItem>
              ))}
            </Menu>
          </MenuRoot>
        </SimpleCard>

        {/* // FOR WEEKLY RECORD..................................................... */}
        <SimpleCard title="WEEKLY">
          {/* margin="40px 0px 0px 60px" */}
          <Box sx={{ width: 300, height: 20 }}>
            <Box display="flex" border="1px solid gray" justifyContent="space-evenly">
              {/* <Box>{moment().format('MM/DD/YYYY')}</Box> */}
              {/* &nbsp; To &nbsp; */}
              {/* <Box border="1px solid gray" padding="3px" width="100px" height="30px" textAlign="center"> */}
              <Box>{moment(expiryDate[0], 'YYYY-MM-DD').subtract(6, 'days').format('DD/MM/YYYY')}</Box>
              <Box>{moment(expiryDate[0], 'YYYY-MM-DD').format('DD/MM/YYYY')}</Box>
            </Box>
            {expiryDate}
          </Box>
          {/* <div className="calendarWrap"> */}
          {/* <div>
              <input
                value={` ${format(range[0].startDate, 'MM/dd/yyyy')} `}
                //   value={` ${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")} `}
                readOnly
                className="inputBox"
                // now i want to display calender by clicking on the input box...
                onClick={() => setOpen((open) => !open)}
                // now i want to close calender by clicking on the input box... USE EVENT LISTENER IN useEffect
              />
              To
              <input
                value={` ${format(range[0].endDate, 'MM/dd/yyyy')} `}
                readOnly
                className="inputBox"
                // now i want to display calender by clicking on the input box...
                onClick={() => setOpen((open) => !open)}
                // now i want to close calender by clicking on the input box... USE EVENT LISTENER IN useEffect
              />
            </div> */}

          {/* <div ref={refOne}>
              // now we  want to close this calendar , we can create another state--> open , close
              it will true than show calendar
              {open && (
                <DateRangePicker
                  onChange={(item) => setRange([item.selection])}
                  editableDateInputs={true}
                  moveRangeOnFirstSelection={false}
                  ranges={range}
                  months={2}
                  direction="vertical"
                  className="calenderElement"
                />
              )}
            </div> */}
          {/* </div> */}
        </SimpleCard>

        {/* SUBMIT BUTTON ........................................................... */}
        <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={{ width: 100, height: 40 }}
        //   sx={{ ml: 134, mt: 15 }}
        //   position="fixed"
        >
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
        </Button>
      </Box>
    </>
  );
}
