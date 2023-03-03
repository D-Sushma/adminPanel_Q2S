import React from 'react';
import moment from 'moment';
import { SimpleCard } from 'app/components';
// FOR SUBJECT RECORD.............................................
import { List, ListItem, ListItemText, Menu, MenuItem, Select, InputLabel, Input, FormControl } from '@mui/material';
import { styled } from '@mui/system';
import AbcIcon from '@mui/icons-material/Abc';

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
import { element } from 'prop-types';

// FOR SUBJECT RECORD...................................................
const MenuRoot = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 360,
  backgroundColor: theme.palette.background.paper,
}));

const options = [
  'Show Subject With Subject Code ',
  'GK - 13',
  'ENGLISH - 6',
  // 'Show some love to Material-UI',
  // 'Show all notification content',
  // 'Hide sensitive notification content',
  // 'Hide all notification content',
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
  const [dropdownData, setdropdownData] = useState([]);
  const [expiryDate, setExpiryDate] = useState([]);
  const fetchData1 = async () => {
    await fetch('http://localhost:4000/memberregistration')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('inside data subject date record', data.response.eDate);
        const e_result = data.response.eDate;
        let expiry = [];
        e_result.forEach((ele) => {
          expiry.push(ele.label);
          console.log('expiry', expiry);
        })
        setdropdownData(expiry);
        // dropdownData.push(expiry);
        console.log('dropdownData', dropdownData);
        // ====================<- OR ->=============================
        setExpiryDate(data.response.eDate);
        // let eDate = moment(ele.expiry_date).format('DD-MM-YYYY');
        // if (!expiryDate.includes(eDate)) {
        //   setExpiryDate(expiryDate.push(eDate));
        // }
      });
  };
  // console.log('expiryDate', expiryDate);
  useEffect(() => {
    fetchData1();
  }, []);

  // ===============FOR SELECT OPTION IN WEEKLY RECORD======
  let [selected, setSelected] = useState([]);
  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };



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

  // FOR WEEKLY RECORD BASIS OF EXPIRY DATE...................................................
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [selectedIndex1, setSelectedIndex1] = React.useState(1);

  function handleClickListItem1(event) {
    setAnchorEl1(event.currentTarget);
  }
  function handleMenuItemClick1(event, index) {
    setSelectedIndex1(index);
    setAnchorEl1(null);
  }
  function handleClose1() {
    setAnchorEl1(null);
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
                  secondary={options[selectedIndex]}
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
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  disabled={index === 0}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </MenuRoot>
        </SimpleCard>

        <SimpleCard title="Weekly">
          <MenuRoot sx={{ width: 300, height: 20 }}>
            <List component="nav" aria-label="Device settings">
              <ListItem
                button
                aria-haspopup="true"
                aria-controls="lock-menu1"
                aria-label="When device is locked"
                onClick={handleClickListItem1}
                sx={{ width: 250, marginTop: [-3], padding: 0 }}
              >
                <ListItemText
                  primary="Weekly Record Basis of Expiry Date"
                  secondary={dropdownData[selectedIndex1]}
                />
              </ListItem>
            </List>
              <Menu
              sx={{ height: 400 }}
                id="lock-menu1"
                anchorEl={anchorEl1}
                keepMounted
                open={Boolean(anchorEl1)}
                onClose={handleClose1}
              >
                {dropdownData.map((option, index) => (
                  <MenuItem
                    key={option}
                    // key={moment(option).format('DD-MM-YYYY')}
                    // disabled={index === 0}
                    // selected={index === selectedIndex1}
                    selected={index === 0}
                    onClick={(event) => handleMenuItemClick1(event, index)}
                  >
                    {option}
                    {/* {moment(option).format('DD-MM-YYYY')} */}
                  </MenuItem>
                ))}
              </Menu>
          </MenuRoot>
        </SimpleCard>

        {/* // FOR WEEKLY RECORD..................................................... */}
        {/* <SimpleCard title="WEEKLY">
          <Box sx={{ width: 300, height: 50 }}>
            <Box display="flex" border="1px solid white" justifyContent="space-evenly"> */}
        {/* <Box>{moment(expiryDate[0]).subtract(6, 'days').format('DD/MM/YYYY')}</Box>
              &nbsp; To &nbsp;
              <Box>{moment(expiryDate[0]).format('DD/MM/YYYY')}</Box> */}
        {/* <Box>
                <FormControl sx={{ width: 300, marginTop: 0, marginLeft: 0 }}>
                  <InputLabel sx={{ marginTop: -0.5 }}>Weekly Date</InputLabel> */}
        {/* <Select value={selected} onChange={selectionChangeHandler} > */}
        {/* <Select> */}
        {/* {expiryDate.map((eDate, i) => (
                      <MenuItem value={eDate.value} >
                        {moment(eDate.label).subtract(6,'days').format('DD-MM-YYYY')}
                        {' '} TO {' '}
                        {moment(eDate.label).format('DD-MM-YYYY')}</MenuItem>
                    ))} */}
        {/* {dropdownData.map((eDate, i) => (
                    <MenuItem key={eDate}>{eDate}</MenuItem>
                    ))}  */}
        {/* </Select> */}
        {/* </FormControl>
              </Box>
            </Box>
          </Box>
        </SimpleCard> */}

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
