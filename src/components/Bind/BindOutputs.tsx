import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Modal from '@mui/material/Modal';

//import Tabs from '@mui/material/Tabs';
//import Tab from '@mui/material/Tab';

import BindRight from './BindComponents/BindRight';

//import axios from 'axios';

const BindOutputs = () => {
  const styleBox = {
    border: 1,
    borderRadius: 1,
    backgroundColor: 'white',
    borderColor: 'primary.main',
  };

  const styleButtBox = {
    fontSize: 15,
    maxHeight: '18px',
    minHeight: '18px',
    marginTop: -3.5,
    backgroundColor: 'white',
    color: '#5B1080',
    textTransform: 'unset !important',
  };

  const styleXTG01 = {
    borderBottom: 1,
    borderColor: 'primary.main',
    textAlign: 'center',
    backgroundColor: '#C0C0C0',
    p: 1,
  };

  // const styleXTG02 = {
  //   borderRadius: 1,
  //   borderBottom: 1,
  //   borderColor: 'primary.main',
  //   textAlign: 'center',
  //   backgroundColor: '#C0C0C0',
  // };

  const HeaderLBindOutputs = () => {
    return (
      <Grid item container xs={12}>
        <Grid item xs={1.5} sx={styleXTG01}>
          <b>№ вых</b>
        </Grid>
        <Grid item xs={2} sx={styleXTG01}>
          <b>Контр. конфликта</b>
        </Grid>
        <Grid item xs={2} sx={styleXTG01}>
          <b>Контр. перегорания</b>
        </Grid>
        <Grid item xs={2} sx={styleXTG01}>
          <b>Мощность</b>
        </Grid>
        <Grid item xs={1.5} sx={styleXTG01}>
          <b>Лампы</b>
        </Grid>
        <Grid item xs={1.5} sx={styleXTG01}>
          <b>Тип нагрузки</b>
        </Grid>
        <Grid item xs sx={styleXTG01}>
          <b>№ СБ Integra</b>
        </Grid>
      </Grid>
    );
  };

  return (
    <Box sx={{ marginTop: -3, marginLeft: -3, marginRight: -3 }}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container sx={{ height: '85.7vh' }}>
            <Grid item xs={9.4} sx={styleBox}>
              <Box sx={{ border: 0, height: '85.2vh' }}>
                <Button sx={styleButtBox} variant="contained">
                  Назначение выходов
                </Button>

                <Grid container sx={{ marginTop: -3, fontSize: 12 }}>
                  <HeaderLBindOutputs />
                  {/* <Col01Grid01 /> */}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={0.05}></Grid>
            <BindRight />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BindOutputs;
