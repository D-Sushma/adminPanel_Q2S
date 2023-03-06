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
import { useNavigate } from 'react-router-dom';

// FOR SUBJECT RECORD...................................................
const MenuRoot = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 360,
  backgroundColor: theme.palette.background.paper,
}));

const options = [//['GK - 13', 13], ['ENGLISH - 6', 6]];
  {
    label: 'GK - 13',
    value: 13,
  },
  {
    label: 'ENGLISH - 6',
    value: 13,
  },
];

export default function DateRangePickerComp({ setRegRecord }) {
  // ----------DB FETCH------------------------------
  const [dropdownData, setdropdownData] = useState([]);
  const [expiryDate, setExpiryDate] = useState([]);
  const fetchData1 = async () => {
    await fetch('http://localhost:4000/memberregistration')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('inside data subject date record', data.response);
        const e_result = data.response.eDate;
        let expiry = [];
        e_result.forEach((ele) => {
          expiry.push(ele.label);
          // console.log('expiry', expiry);
        })
        setdropdownData(expiry);
        // dropdownData.push(expiry);
        console.log('dropdownData', dropdownData);
        // ====================<- OR ->=============================
        setExpiryDate(data.response.eDate);
      });
  };
  // console.log('expiryDate', expiryDate);
  useEffect(() => {
    fetchData1();
  }, []);

  // ===============FOR SELECT OPTION IN WEEKLY RECORD======
  let [weeklyDate, setWeeklyDate] = useState([]);
  const selectionChangeHandler = (event) => {
    setWeeklyDate(event.target.value);
    console.log('event.target.value', event.target.value)
    // console.log('selected', selected)
  };
  // ===============FOR SELECT OPTION IN WEEKLY RECORD======
  let [subjectId, setSubjectId] = useState([]);
  const selectionOptionChangeHandler = (event) => {
    setSubjectId(event.target.value);
    console.log('event.target.value', event.target.value)
    // console.log('selected', selected)
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
  // const [selectedIndex1, setSelectedIndex1] = React.useState(1);
  const [selectedIndex1, setSelectedIndex1] = React.useState(0);

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

  // -------------FOR BACK BUTTON--------------------
  const navigate = useNavigate();

  // =====get details============
  let getDetails = () => {
    console.log("###reached get details--->", expiryDate);
    console.log(subjectId, weeklyDate);
    expiryDate.forEach((data) => {
      console.log(data.details.subjectId, data.details.date);
      if (data.details.subjectId == subjectId && data.details.date == weeklyDate) {
        setRegRecord(data.details);
        console.log('data.details', data)
      }
    })
  }

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="0px">

        {/* // FOR SUBJECT RECORD................................................... */}
        {/* <SimpleCard title="GK/ENGLISH">
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
        </SimpleCard> */}

        {/* <SimpleCard title="Weekly">
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
                    // disabled={index === 0}
                    // selected={index === selectedIndex1}
                    selected={index === 0}
                    onClick={(event) => handleMenuItemClick1(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
          </MenuRoot>
        </SimpleCard> */}

        <SimpleCard title="GK/ENGLISH">
          <Box sx={{ width: 300, height: 50 }}>
            <Box display="flex" border="1px solid white" justifyContent="space-evenly">
              <Box>
                <FormControl sx={{ width: 300, marginTop: 0, marginLeft: 0 }}>
                  <InputLabel sx={{ marginTop: -0.5 }}>Gk-13/ENGLISH-6</InputLabel>
                  <Select value={subjectId} onChange={selectionOptionChangeHandler} >
                    {options.map((option, index) => (
                      <MenuItem value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </SimpleCard>
        {/* // FOR WEEKLY RECORD..................................................... */}
        <SimpleCard title="WEEKLY">
          <Box sx={{ width: 300, height: 50 }}>
            <Box display="flex" border="1px solid white" justifyContent="space-evenly">
              <Box>
                <FormControl sx={{ width: 300, marginTop: 0, marginLeft: 0 }}>
                  <InputLabel sx={{ marginTop: -0.5 }}>Weekly Date</InputLabel>
                  <Select value={weeklyDate} onChange={selectionChangeHandler} >
                    {expiryDate.map((eDate, i) => (
                      <MenuItem value={eDate.label.split(' ')[2].trim()}>
                        {eDate.label}
                      </MenuItem>
                    ))}
                    {/* {dropdownData.map((eDate, i) => (
                    <MenuItem key={eDate}>{eDate}</MenuItem>
                    ))}  */}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </SimpleCard>

        {/* SUBMIT BUTTON ........................................................... */}
        <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={{ width: 100, height: 40 }}
          //   sx={{ ml: 134, mt: 15 }}
          //   position="fixed"
          onClick={() => getDetails()}
        >
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
        </Button>
      </Box >
    </>
  );
}
