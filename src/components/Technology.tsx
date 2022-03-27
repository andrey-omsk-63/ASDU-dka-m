import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Modal from '@mui/material/Modal';

//import Tabs from '@mui/material/Tabs';
//import Tab from '@mui/material/Tab';

//import axios from 'axios';

const Technology = () => {
  let fSize = 10.5;
  let izmena1 = 'Изм ';
  let izmena2 = ' кр';
  let izmena3 = ' зел';
  let izmena4 = ' направ';

  if (window.innerWidth > 1090) fSize = 12.9;
  if (window.innerWidth > 830) izmena1 = 'Изменить ';
  if (window.innerWidth > 840) izmena2 = ' красный';
  if (window.innerWidth > 840) izmena3 = ' зелёный';
  if (window.innerWidth > 800) izmena4 = ' направления';

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
    marginTop: '-0.8vh',
    backgroundColor: 'white',
    color: '#5B1080',
    textTransform: 'unset !important',
  };

  const styleButtBoxTablo = {
    fontSize: fSize - 1,
    maxHeight: '18px',
    minHeight: '18px',
    marginBottom: 1.5,
    backgroundColor: 'white',
    color: 'black',
    textTransform: 'unset !important',
  };

  const styleXTG021 = {
    borderBottom: 1,
    borderColor: 'primary.main',
    textAlign: 'center',
    backgroundColor: '#C0C0C0',
    padding: 0.5,
  };

  const styleXTG03 = {
    borderRight: 1,
    borderBottom: 1,
    borderColor: 'primary.main',
    padding: 0.7,
  };

  const HeaderTopTablLeft = () => {
    return (
      <Grid item container xs={12}>
        <Grid item xs={1.33} sx={styleXTG021}>
          <b>Тнач.</b>
        </Grid>
        <Grid item xs={1.33} sx={styleXTG021}>
          <b>Фаза ТУ</b>
        </Grid>
        <Grid item xs={1.33} sx={styleXTG021}>
          <b>Сдв пр.</b>
        </Grid>
        <Grid item xs={1.33} sx={styleXTG021}>
          <b>Тпр.</b>
        </Grid>
        <Grid item xs={1.33} sx={styleXTG021}>
          <b>Фаза ТС</b>
        </Grid>
        <Grid item xs={1.33} sx={styleXTG021}>
          <b>Тосн.</b>
        </Grid>
        <Grid item xs={1.33} sx={styleXTG021}>
          <b>Ттс</b>
        </Grid>
        <Grid item xs={1.33} sx={styleXTG021}>
          <b>Тту</b>
        </Grid>
        <Grid item xs={1.34} sx={styleXTG021}>
          <b>Сост.</b>
        </Grid>
      </Grid>
    );
  };

  const StrokaTopTablLeft = () => {
    let resStr = [];

    for (let i = 0; i < 18; i++) {
      resStr.push(
        <Grid key={Math.random()} container item xs={12}>
          <Grid key={Math.random()} xs={1.33} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={1.33} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={1.33} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={1.33} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={1.33} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={1.33} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={1.33} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={1.33} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={1.34} item sx={styleXTG03}></Grid>
        </Grid>,
      );
    }
    return resStr;
  };

  const TablRight = () => {
    return (
      <Grid container>
        <Button sx={styleButtBox} variant="contained" onClick={() => handleOpenModal('33')}>
          <b>Табло отсчёта</b>
        </Button>

        <Grid item xs={12}>
          <Grid container sx={{ height: '3.2vh' }}>
            <Button sx={styleButtBoxTablo} variant="contained">
              <b>Адапт.табло</b>
            </Button>
          </Grid>
          {/* ============ */}
          <Grid container sx={{ height: '3.2vh' }}>
            <Grid item xs={6}>
              <Button sx={styleButtBoxTablo} variant="contained">
                <b>Выкл.табло</b>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button sx={styleButtBoxTablo} variant="contained">
                <b>Тест цифр</b>
              </Button>
            </Grid>
          </Grid>
          {/* ============ */}
          <Grid container sx={{ height: '3.2vh' }}>
            <Grid item xs={6}>
              <Button sx={styleButtBoxTablo} variant="contained">
                <b>Тест 25с{izmena2}</b>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button sx={styleButtBoxTablo} variant="contained">
                <b>Тест 25с{izmena3}</b>
              </Button>
            </Grid>
          </Grid>
          {/* ============ */}
          <Grid container sx={{ height: '3.2vh' }}>
            <Grid item xs={6}>
              <Button sx={styleButtBoxTablo} variant="contained">
                <b>Показ адр.А1</b>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button sx={styleButtBoxTablo} variant="contained">
                <b>Показ адр.А2</b>
              </Button>
            </Grid>
          </Grid>
          {/* ============ */}
          <Grid container sx={{ height: '3.2vh' }}>
            <Grid item xs={6}>
              <Button sx={styleButtBoxTablo} variant="contained">
                <b>{izmena1}адр.А1</b>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button sx={styleButtBoxTablo} variant="contained">
                <b>{izmena1}адр.А2</b>
              </Button>
            </Grid>
          </Grid>
          {/* ============ */}
          <Grid container sx={{ height: '3.2vh' }}>
            <Grid item xs={0.6}></Grid>
            <Grid item xs={5.4}>
              <Box>002&nbsp;{'>>'}&nbsp;001</Box>
            </Grid>
            <Grid item xs={0.6}></Grid>
            <Grid item xs={5.4}>
              <Box>002&nbsp;{'>>'}&nbsp;001</Box>
            </Grid>
          </Grid>
          {/* ============ */}
          <Grid container sx={{ height: '3.2vh' }}>
            <Grid item xs={0.6}></Grid>
            <Grid item xs={5.4}>
              <Box>Номер{izmena4}</Box>
            </Grid>
            <Grid item xs={0.6}></Grid>
            <Grid item xs={5.4}>
              <Box>Номер табло</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const TopTopTab = () => {
    return (
      <Grid container sx={{ fontSize: fSize, height: '39.2vh' }}>
        <Grid item xs={9}></Grid>
        {/* <Grid item xs={0.1} sx={{ border: 0 }}></Grid> */}

        <Grid item xs sx={{ border: 1, height: '27vh' }}>
          <Box sx={styleBox}></Box>
        </Grid>
      </Grid>
    );
  };

  const TopTabls = (props: { Size: any }) => {
    return (
      <Stack direction="column">
        <Grid container>
          <Button sx={styleButtBox} variant="contained" onClick={() => handleOpenModal('69')}>
            <b>Технология</b>
          </Button>

          <Grid item xs={12} sx={{ border: 0, marginTop: '-2vh', height: '39.5vh' }}>
            <TopTopTab />
          </Grid>
          <Grid item xs={12}>
            <Grid container sx={{ fontSize: fSize, height: '25vh' }}>
              <Grid item xs={7.5} sx={styleBox}>
                <Box>
                  <HeaderTopTablLeft />
                  <Box sx={{ height: '22vh', overflowX: 'auto' }}>{StrokaTopTablLeft()}</Box>
                </Box>
              </Grid>
              <Grid item xs={0.1} sx={{ border: 0 }}></Grid>

              <Grid item xs sx={styleBox}>
                <TablRight />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
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

  return (
    <Stack direction="column">
      <Box sx={{ marginTop: -3, marginLeft: -3, marginRight: -3 }}>
        {/* <Grid container sx={styleBox}> */}
        <Grid container>
          <Grid item xs={12} sx={{ height: '65.5vh' }}>
            <TopTabls Size={size} />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: 0.5, marginLeft: -3, marginRight: -3 }}>
        <Grid container sx={styleBox}>
          <Grid item xs sx={{ height: '19vh' }}></Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default Technology;
