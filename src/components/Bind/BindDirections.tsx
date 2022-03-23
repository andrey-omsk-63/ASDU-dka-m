import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import TabContext from '@mui/lab/TabContext';
// import TabPanel from '@mui/lab/TabPanel';
// import Modal from '@mui/material/Modal';

import BindRight from './BindComponents/BindRight';

//import axios from 'axios';

const BindDirections = () => {
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
            Фаза
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

    for (let i = 0; i < 69; i++) {
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

  const TopTab = () => {
    return (
      <Box sx={{ border: 0 }}>
        <Button sx={styleButtBox} variant="contained">
          <b>Назначение выходов</b>
        </Button>
        <Box sx={{ border: 0, marginTop: -2, fontSize: 12, height: '41.5vh' }}>
          <HeaderTopTab />
          <Box sx={{ height: '37vh', overflowX: 'auto' }}>{StrokaTopTab()}</Box>
        </Box>
      </Box>
    );
  };

  const BattomTab = () => {
    return (
      <Box sx={{ border: 0 }}>
        <Button sx={styleButtBox} variant="contained">
          <b>Привязка фаз</b>
        </Button>
        <Box sx={{ border: 0, marginTop: -3, fontSize: 12, height: '40vh' }}>
          <HeaderBattomTab />
          <Box sx={{ height: '38.5vh', overflowX: 'auto' }}>{StrokaBattomTab()}</Box>
        </Box>
      </Box>
    );
  };

  const BindLeft = () => {
    return (
      <Grid item xs={9.3}>
        <Stack direction="column">
          <Grid container sx={styleBox}>
            <Grid item xs={12} sx={{ fontSize: 12, height: '42.4vh' }}>
              <TopTab />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs sx={{ height: '1vh' }}></Grid>
          </Grid>
          <Grid container sx={styleBox}>
            <Grid item xs sx={{ height: '41.8vh' }}>
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
