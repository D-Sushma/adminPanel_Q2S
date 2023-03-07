import React from 'react';
import { SimpleCard } from 'app/components';
// FOR SUBJECT RECORD.............................................
import { List, ListItem, ListItemText, Menu, MenuItem, Select, InputLabel, Input, FormControl } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
// validation---------------BUTTON
import { Button, Icon, Box } from '@mui/material';
import { Span } from 'app/components/Typography';
// const options = [//['GK - 13', 13], ['ENGLISH - 6', 6]];
//   {
//     label: 'GK - 13',
//     value: 13,
//   },
//   {
//     label: 'ENGLISH - 6',
//     value: 6,
//   },
// ];
import { useNavigate } from 'react-router-dom';

// const options = [
//   {
//     label: 'GK - 13',
//     value: 13,
//   },
//   {
//     label: 'ENGLISH - 6',
//     value: 6,
//   },
// ];
const options = [
  'Show Record Basis of Subject',
  'GK - 13',
  'ENGLISH - 6',
];
// style for mMenuRoot tag................................................
const MenuRoot = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 360,
  backgroundColor: theme.palette.background.paper,
}));
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

  // -------------FOR BACK BUTTON--------------------
  const navigate = useNavigate();

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ===============FOR SELECT OPTION IN WEEKLY RECORD======
  // let [weeklyDate, setWeeklyDate] = useState([]);
  // const selectionChangeHandler = (event) => {
  //   setWeeklyDate(event.target.value);
  //   console.log('event.target.value', event.target.value)
  //   // console.log('selected', selected)
  // };
  // ===============FOR SELECT OPTION IN WEEKLY RECORD======
  // let [subjectId, setSubjectId] = useState([]);
  // const selectionOptionChangeHandler = (event) => {
  //   setSubjectId(event.target.value);
  //   console.log('event.target.value', event.target.value)
  //   // console.log('selected', selected)
  // };

  // =====get details CLICK ON SUBMIT BUTTON (subject && weekly record)==========
  // let getDetails = () => {
  //   console.log("###reached get details--->", expiryDate);
  //   console.log(subjectId, weeklyDate);
  //   expiryDate.forEach((data) => {
  //     console.log(data.details.subjectId, data.details.date);
  //     if (data.details.subjectId == subjectId && data.details.date == weeklyDate) {
  //       setRegRecord(data.details);
  //       console.log('data.details', data)
  //     }
  //   })
  // }

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
                  // key={option.value}
                  disabled={index === 0}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                  {/* {option.label} */}
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
                  selected={index === 0}
                  onClick={(event) => handleMenuItemClick1(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </MenuRoot>
        </SimpleCard>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        {/* // FOR SUBJECT RECORD................................................... */}
        {/* <SimpleCard title="GK/ENGLISH">
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
        </SimpleCard> */}
        {/* // FOR WEEKLY RECORD..................................................... */}
        {/* <SimpleCard title="WEEKLY">
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
                    {dropdownData.map((eDate, i) => (
                    <MenuItem key={eDate}>{eDate}</MenuItem>
                    ))} 
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </SimpleCard> */}

        {/* SUBMIT BUTTON ........................................................... */}
        <Button
          // onClick={() => getDetails()}
          color="primary"
          variant="contained"
          type="submit"
          sx={{ width: 100, height: 40 }}
          onClick={() => setRegRecord("sushma")}
          // onClick={() => fetchData1()}
        >
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
        </Button>
      </Box >
    </>
  );
}
