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
  {value: '2022-10-01T18:30:00.000Z', label: '2022-10-01T18:30:00.000Z'},
  {value: '2022-10-01T18:30:00.000Z', label: '2022-10-01T18:30:00.000Z'},
  {value: '2022-10-01T18:30:00.000Z', label: '2022-10-01T18:30:00.000Z'}
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
              <Box sx={{ width: 300 }}>
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
                {/* <Input
                  type="select"
                  // id="deliveryCountry"
                  // name="deliveryCountry"
                  // onChange={selectionChangeHandler}
                  // value={selected}
                >
                
                  {expiryDate.map((data, key) => (
                    <option key={key} value={data.label}>
                      {data.label}
                    </option>
                  ))}
                </Input> */}

                {/* <Input
                  type="select"
                  id="dropdownData.value"
                  name="dropdownData.value"
                  onChange={(e) => { selectionChangeHandler(e) }}
                  value={dropdownData.value}
                >
                  {dropdownData.map((data, key) => (
                    <option key={key} value={data.value}>
                      {data.value}
                    </option>
                  ))}
                </Input> */}

<select value={expiryDate} onChange={selectionChangeHandler}>
  {options1.map(item => {
    
      return (<option sx={{ width: 500 }} key={item.value} value={item.value}>
        {console.log('item', item)}
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
