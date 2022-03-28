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

const BindDirections = () => {
  let styleSetWidth = 650;
  if (window.innerWidth > 770) styleSetWidth = window.innerWidth - 50;
  let fSize = 12;
  if (window.innerWidth > 900) fSize = 14;

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

  const styleXTG01 = {
    borderRight: 1,
    borderColor: 'primary.main',
    textAlign: 'center',
    backgroundColor: '#C0C0C0',
    paddingTop: 1,
  };

  const styleXTG02 = {
    borderBottom: 1,
    borderColor: 'primary.main',
    textAlign: 'center',
    backgroundColor: '#C0C0C0',
    //paddingTop: 1,
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
    padding: 0.2,
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

  const HeaderTopTab = () => {
    return (
      <>
        <Grid item container xs={12}>
          <Grid item xs={0.75} sx={styleXTG01}></Grid>
          <Grid item xs={3.75} sx={styleXTG01}>
            <b>Выходы</b>
          </Grid>
          <Grid item xs={3.75} sx={styleXTG01}>
            <b>Базовый промтакт</b>
          </Grid>
          <Grid item xs={3.75} sx={styleXTG01}>
            <b>Универс.промтакт</b>
          </Grid>
        </Grid>

        <Grid item container xs={12}>
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Напр</b>
          </Grid>
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Зел.</b>
          </Grid>
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Жел.</b>
          </Grid>
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Кр1.</b>
          </Grid>
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Кр2.</b>
          </Grid>
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Кр3.</b>
          </Grid>
          {/* ========================== */}
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Тзм.</b>
          </Grid>
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Тж.</b>
          </Grid>
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Ткр.</b>
          </Grid>
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Ткж.</b>
          </Grid>
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Тзел.</b>
          </Grid>
          {/* ========================== */}
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Тзм.</b>
          </Grid>
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Тж.</b>
          </Grid>
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Ткр.</b>
          </Grid>
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Ткж.</b>
          </Grid>
          <Grid item xs={0.75} sx={styleXTG02}>
            <b>Тзел.</b>
          </Grid>
        </Grid>
      </>
    );
  };

  const HeaderBattomTab = () => {
    return (
      <>
        <Grid item container xs={12}>
          <Grid item xs={1.2} sx={styleXTG021}>
            <b>Фаза</b>
          </Grid>
          <Grid item xs={1.2} sx={styleXTG021}>
            <b>1</b>
          </Grid>
          <Grid item xs={1.2} sx={styleXTG021}>
            <b>2</b>
          </Grid>
          <Grid item xs={1.2} sx={styleXTG021}>
            <b>3</b>
          </Grid>
          <Grid item xs={1.2} sx={styleXTG021}>
            <b>4</b>
          </Grid>
          <Grid item xs={1.2} sx={styleXTG021}>
            <b>5</b>
          </Grid>
          <Grid item xs={1.2} sx={styleXTG021}>
            <b>6</b>
          </Grid>
          <Grid item xs={1.2} sx={styleXTG021}>
            <b>7</b>
          </Grid>
          <Grid item xs={1.2} sx={styleXTG021}>
            <b>8</b>
          </Grid>
          <Grid item xs={1.2} sx={styleXTG021}>
            <b>9</b>
          </Grid>
        </Grid>
      </>
    );
  };

  const StrokaTopTab = () => {
    let resStr = [];

    for (let i = 0; i < 69; i++) {
      resStr.push(
        <Grid key={Math.random()} container item xs={12}>
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            {i + 1}
          </Grid>
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            0
          </Grid>
          {/* ========================== */}
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            0
          </Grid>
          {/* ========================== */}
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={0.75} item sx={styleXTG03}>
            0
          </Grid>
        </Grid>,
      );
    }
    return resStr;
  };

  const StrokaBattomTab = () => {
    let resStr = [];

    for (let i = 0; i < 40; i++) {
      resStr.push(
        <Grid key={Math.random()} container item xs={12}>
          <Grid key={Math.random()} xs={1.2} item sx={styleXTG03}>
            {i + 1}
          </Grid>
          <Grid key={Math.random()} xs={1.2} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={1.2} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={1.2} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={1.2} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={1.2} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={1.2} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={1.2} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={1.2} item sx={styleXTG03}>
            0
          </Grid>
          <Grid key={Math.random()} xs={1.2} item sx={styleXTG03}>
            0
          </Grid>
        </Grid>,
      );
    }
    return resStr;
  };

  const OutputNormalTop = () => {
    return (
      // <Box sx={{ marginTop: 0 }}>
      <Box sx={{ marginTop: -3, fontSize: fSize, height: '41.5vh' }}>
        <HeaderTopTab />
        <Box sx={{ height: '37vh', overflowX: 'auto' }}>{StrokaTopTab()}</Box>
      </Box>
      // </Box>
    );
  };

  const OutputNormalBattom = () => {
    return (
      <Box sx={{ marginTop: -2.5, fontSize: fSize, height: '40vh' }}>
        <HeaderBattomTab />
        <Box sx={{ height: '38.5vh', overflowX: 'auto' }}>{StrokaBattomTab()}</Box>
      </Box>
    );
  };

  const OutputModalTop = (props: { Size: any }) => {
    styleSetWidth = 650;
    if (window.innerWidth > 770) styleSetWidth = window.innerWidth;

    return (
      <Modal open={openSet} onClose={handleCloseSet}>
        <Box sx={styleSet}>
          <ModalEnd />
          <Grid container>
            <Grid item xs sx={{ marginRight: 1, marginTop: -3, fontSize: 16 }}>
              <HeaderTopTab />
              <Box sx={{ overflowX: 'auto', height: '88vh' }}>{StrokaTopTab()}</Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    );
  };

  const OutputModalBattom = () => {
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

  const TopTab = () => {
    return (
      <TabContext value={value}>
        <Box sx={{ border: 0 }}>
          <Button sx={styleButtBox} variant="contained" onClick={() => handleOpenModal('33')}>
            <b>Привязка выходов</b>
          </Button>
          <OutputNormalTop />
          <TabPanel value="33">
            <OutputModalTop Size={size} />
          </TabPanel>
        </Box>
      </TabContext>
    );
  };

  const BattomTab = () => {
    return (
      <TabContext value={value}>
        <Box>
          <Button sx={styleButtBox} variant="contained" onClick={() => handleOpenModal('69')}>
            <b>Привязка фаз</b>
          </Button>
          <OutputNormalBattom />
          <TabPanel value="69">
            <OutputModalBattom />
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

  //отслеживание изменения размера экрана
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
            <Grid item xs={12} sx={{ fontSize: fSize, height: '42.4vh' }}>
              <TopTab />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs sx={{ height: '0.5vh' }}></Grid>
          </Grid>
          <Grid container sx={styleBox}>
            <Grid item xs sx={{ height: '42.3vh' }}>
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

export default BindDirections;
