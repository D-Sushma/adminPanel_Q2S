import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/system';
import { H6 } from 'app/components/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemStore from '../../../utils/store';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function FullScreenDialog({ regRecord }) {

  // -------------FOR BACK BUTTON--------------------
  const navigate = useNavigate();

  // FULL SCREEN--------------------------------
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }


//   const increasePopulation = useBearStore((state) => state.increasePopulation)
// console.log('increasePopulation', increasePopulation)

const addItem = ItemStore((state) => state.addItem);
  
  const myItems = (paramtr) => {
    addItem({'item': paramtr})
    console.log('paramtr', paramtr)
  }

  return (
    <>
      <Box display="flex" justifyContent="space-evenly">
        <Button onClick={() => myItems('hello')}>click me</Button>
        <Box>
          Total Registration
          <br />
          <br />
          <Button
            variant="outlined" color="primary"
            sx={{ width: 150 }}
            onClick={() => navigate('/filter/TotalRecordDetails')} 
            // onClick={(i) => myItems(i)}
            // onClick={() => navigate(`/filter/TotalRecordDetails/${regRecord.subjectId}/${regRecord.dates}`)}
          >
            {/* Hello {regRecord.count} */}
            {regRecord ? regRecord.totalReg.length : "-"}
          </Button>
        </Box>
        {/* <Box>
          Total Competition
          <br />
          <br />
          <Button variant="outlined" color="primary" sx={{ width: 150 }} >
            {regRecord ? regRecord.totalComp.length : "-"}
          </Button>
        </Box> */}

        <Box>
        Total Competition
          <br />
          <br />
          <Button variant="outlined" color="primary" sx={{ width: 150 }} onClick={handleClickOpen}>
          {regRecord ? regRecord.totalComp.length : "-"}
          </Button>

          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
                  <CloseIcon />
                </IconButton>
                <H6 sx={{ flex: 1, marginLeft: theme.spacing(2) }}>Sound</H6>
                <Button color="inherit" onClick={handleClose}>
                  save
                </Button>
              </Toolbar>
            </AppBar>

            <List>
              <ListItem button>
                <ListItemText primary="Phone ringtone" secondary="Titania" />
              </ListItem>

              <Divider />

              <ListItem button>
                <ListItemText primary="Default notification ringtone" secondary="Tethys" />
              </ListItem>
            </List>
          </Dialog>
        </Box>

      </Box>
    </>
  );
}

