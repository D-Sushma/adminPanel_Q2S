import React from 'react';
import moment from 'moment';
import { SimpleCard } from 'app/components';
// FOR SUBJECT RECORD.............................................
import { List, ListItem, ListItemText, Menu, MenuItem, Select, InputLabel, Input } from '@mui/material';
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

// {/* NEW CRETAE DROPDOWN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
const options2 = [
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
  { value: 'red', label: 'Red' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'orange', label: 'Orange' },
  { value: 'pink', label: 'Pink' },
  { value: 'purple', label: 'Purple' },
  { value: 'gray', label: 'Gray' }
];



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

const options1 = [
  { value: '2022-10-01T18:30:00.000Z', label: '2022-10-01T18:30:00.000Z' },
  { value: '2022-10-01T18:30:00.000Z', label: '2022-10-01T18:30:00.000Z' },
  { value: '2022-10-01T18:30:00.000Z', label: '2022-10-01T18:30:00.000Z' }
];
const dropdownData = [];

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
  const [expiryDate, setExpiryDate] = useState([]);
  const fetchData1 = async () => {
    await fetch('http://localhost:4000/memberregistration')
      .then((response) => {
        // console.log('response');
        return response.json();
      })
      .then((data) => {
        // console.log('inside data subject date record', data.response.eDate);
        // setExpiryDate(data.response.eDate);
        const e_result = data.response.eDate;
        var data = [];
        e_result.forEach((ele) => {
          // console.log('ele', ele)
          data.push(ele)
          // let eDate = moment(ele.expiry_date).format('DD-MM-YYYY');
          // if (!expiryDate.includes(eDate)) {
          //   setExpiryDate(expiryDate.push(eDate));
          // }
          // console.log("ele", moment(ele.expiry_date).format('DD-MM-YYYY'));
        })
        // dropdownData = data;
        dropdownData.push(data)
        console.log('dropdownData', dropdownData)

      });
  };
  // console.log('expiryDate', expiryDate);
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

  // ===============FOR SELECT OPTION IN WEEKLY RECORD======
  let [selected, setSelected] = useState([]);
  const selectionChangeHandler = (event) => {
    setExpiryDate(event.target.value);
    console.log('value', event.target.value)
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

        {/* // FOR WEEKLY RECORD..................................................... */}
        <SimpleCard title="WEEKLY">
          <Box sx={{ width: 300, height: 20 }}>
            <Box display="flex" border="1px solid gray" justifyContent="space-evenly">
              <Box>{moment(expiryDate[0]).subtract(6, 'days').format('DD/MM/YYYY')}</Box>
              &nbsp; To &nbsp;
              <Box>{moment(expiryDate[0]).format('DD/MM/YYYY')}</Box>
              <Box >
                {/* <InputLabel><AbcIcon /></InputLabel> */}
                {/* <Select value={selected} onChange={selectionChangeHandler} > */}
                {/* <Select>
                  {console.log('dropdownData', dropdownData)}
                  {expiryDate.map((eDate, i)=>{
                  <MenuItem key={i} value={eDate.label}>bye</MenuItem>
                  })} */}
                {/* <MenuItem value={2}>Feb</MenuItem>
                  <MenuItem value={3}>March</MenuItem>
                  <MenuItem value={4}>April</MenuItem>
                  <MenuItem value={5}>May</MenuItem> */}
                {/* </Select> */}


                <select value={expiryDate} onChange={selectionChangeHandler}>
                  {options1.map(item => {

                    return (<option key={item.value} value={item.value}>
                      {/* {console.log('item', item)} */}
                      {item.text}</option>);
                  })}
                </select>
                {/* <Select onChange={console.log('value')} >
                  {dropdownData?.map(option => {
                    return (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label ?? option.value}
                      </MenuItem>
                    );
                  })}
                </Select> */}

              </Box>
            </Box>
          </Box>
        </SimpleCard>

        {/* NEW CRETAE DROPDOWN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <div className="dropdown-container" style={{ width: "30%", height: "50%", textAlign: "left", border: "1px solid #ccc", position: "relative", borderRadius: "5px" }}>
          <div className="dropdown-input" style={{ padding: "5px", display: "flex", alignItems: "center", justifyContent: "space-between", userSelect: "none" }}>
            <div className="dropdown-selected-value" placeholder='select....'>select...</div>
            <div className="dropdown-tools">
              <div className="dropdown-tool">
                <svg height="20" width="20" viewBox="0 0 20 20">
                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="dropdown-menu" style={{ position: "absolute", width: "100%", border: "1px solid #ccc", maxHeight: "150px", backgroundColor: "#fff", overflow: "auto" }} >
            {options2.map((option) => (
              <div key={option.value} className="dropdown-item" style={{ padding: "5px", cursor: "pointer" }}>
                {option.label}
              </div>
            ))}
            {/* {dropdownData.map((option) => (
              <div key={option.value} className="dropdown-item" style={{ padding: "5px", cursor: "pointer" }}>
                {option.label}
              </div>
            ))} */}
          </div>
        </div>


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
