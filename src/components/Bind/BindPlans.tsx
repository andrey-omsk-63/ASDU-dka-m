import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Modal from '@mui/material/Modal';

import BindRight from './BindComponents/BindRight';

//import axios from 'axios';

const BindPlans = () => {
  let styleSetWidth = 650;
  if (window.innerWidth > 770) styleSetWidth = window.innerWidth - 50;

  const styleBox = {
    border: 1,
    borderRadius: 1,
    backgroundColor: 'white',
    borderColor: 'primary.main',
  };

  const styleButtBox = {
    fontSize: 19,
    maxHeight: '21px',
    minHeight: '21px',
    marginTop: -3.5,
    backgroundColor: 'white',
    color: '#5B1080',
    textTransform: 'unset !important',
  };

  const styleXTG021 = {
    borderBottom: 1,
    borderColor: 'primary.main',
    textAlign: 'center',
    backgroundColor: '#C0C0C0',
    paddingTop: 1,
  };

  const styleXTG03 = {
    borderRight: 1,
    borderBottom: 1,
    borderColor: 'primary.main',
    padding: 0.7,
  };

  const styleSet = {
    position: 'absolute',
    marginTop: '1vh',
    marginLeft: '1vh',
    width: styleSetWidth,
    bgcolor: 'background.paper',
    border: '3px solid #000',
    borderColor: 'primary.main',
    borderRadius: 2,
    boxShadow: 24,
    paddingRight: 3,
    paddingTop: 3,
  };

  const HeaderBattomTab = () => {
    return (
      <>
        <Grid item container xs={12}>
          <Grid item xs={2} sx={styleXTG021}>
            <b>№ перекл.</b>
          </Grid>
          <Grid item xs={2} sx={styleXTG021}>
            <b>Время вкл.</b>
          </Grid>
          <Grid item xs={2} sx={styleXTG021}>
            <b>Типы фазы</b>
          </Grid>
          <Grid item xs={2} sx={styleXTG021}>
            <b>№ фазы</b>
          </Grid>
          <Grid item xs={2} sx={styleXTG021}>
            <b>Длитель-ть</b>
          </Grid>
          <Grid item xs={2} sx={styleXTG021}>
            <b>Продление пред.</b>
          </Grid>
        </Grid>
      </>
    );
  };

  const StrokaBattomTab = () => {
    let resStr = [];

    for (let i = 0; i < 12; i++) {
      resStr.push(
        <Grid key={Math.random()} container item xs={12}>
          <Grid key={Math.random()} xs={2} item sx={styleXTG03}>
            {i + 1}
          </Grid>
          <Grid key={Math.random()} xs={2} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={2} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={2} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={2} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={2} item sx={styleXTG03}></Grid>
        </Grid>,
      );
    }
    return resStr;
  };

  const OutputNormalBattom = () => {
    return (
      <Box sx={{ border: 0, marginTop: -3, fontSize: 12, height: '59.9vh' }}>
        <HeaderBattomTab />
        <Box sx={{ height: '58.5vh', overflowX: 'auto' }}>{StrokaBattomTab()}</Box>
      </Box>
    );
  };

  const OutputModalBattom = (props: { Size: any }) => {
    return (
      <Modal open={openSet} onClose={handleCloseSet}>
        <Box sx={styleSet}>
          <ModalEnd />
          <Grid container>
            <Grid item xs sx={{ marginRight: 1, marginTop: -3, fontSize: 18 }}>
              <HeaderBattomTab />
              <Box sx={{ overflowX: 'auto', height: '88vh' }}>{StrokaBattomTab()}</Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    );
  };

  const BattomTab = () => {
    return (
      <TabContext value={value}>
        <Box>
          <Button sx={styleButtBox} variant="contained" onClick={() => handleOpenModal('69')}>
            <b>Планы</b>
          </Button>
          <OutputNormalBattom />
          <TabPanel value="69">
            <OutputModalBattom Size={size} />
          </TabPanel>
        </Box>
      </TabContext>
    );
  };

  const handleOpenModal = (nom: string) => {
    setOpenSet(true);
    setValue(nom);
  };

  const ModalEnd = () => {
    const styleModalEnd = {
      position: 'absolute',
      top: '0%',
      left: 'auto',
      right: '-2%',
      maxHeight: '21px',
      minHeight: '21px',
      width: '6%',
      fontSize: 19,
      color: 'black',
    };

    return (
      <Button sx={styleModalEnd} onClick={handleCloseSetBut}>
        <b>&#10006;</b>
      </Button>
    );
  };

  const [value, setValue] = React.useState('0');
  const [openSet, setOpenSet] = React.useState(false);

  const handleCloseSet = (event: any, reason: string) => {
    if (reason !== 'backdropClick') setOpenSet(false);
  };

  const handleCloseSetBut = () => {
    setOpenSet(false);
  };

  const [size, setSize] = React.useState([0, 0]);

  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const BindLeft = () => {
    return (
      <Grid item xs={9}>
        <Stack direction="column">
          <Grid container sx={styleBox}>
            <Grid item xs={12} sx={{ height: '24.4vh' }}>
              <Grid container></Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs sx={{ height: '0.5vh' }}></Grid>
          </Grid>
          <Grid container sx={styleBox}>
            <Grid item xs sx={{ height: '60vh' }}>
              <BattomTab />
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    );
  };

  return (
    <Box sx={{ marginTop: -3, marginLeft: -3, marginRight: -3 }}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container sx={{ height: '85.7vh' }}>
            <BindLeft />
            <Grid item xs={0.05}></Grid>
            <BindRight />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BindPlans;
