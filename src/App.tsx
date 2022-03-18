import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import TabContext from '@mui/lab/TabContext';
//import TabPanel from '@mui/lab/TabPanel';
//import Modal from '@mui/material/Modal';

//import axios from 'axios';

//import Logins from './components/Logins';

const App = () => {
  const styleAppMulka = {
    border: 1,
    borderRadius: 2,
    borderColor: '#F1F5FB',
    marginTop: 0.5,
    marginRight: 5,
    marginLeft: 3,
    height: '6vh',
    backgroundColor: '#F1F5FB',
    opacity: 0.7,
  };

  const styleAppMenu = {
    border: 1,
    borderRadius: 1,
    borderColor: '#F1F5FB',
    marginLeft: 0.5,
    height: '86vh',
    backgroundColor: '#F1F5FB',
    opacity: 0.85,
  };

  const styleAppPodv = {
    border: 0,
    marginRight: 5,
    marginLeft: 3,
    height: '6vh',
    p: 1,
  };

  const styleHeader = {
    fontSize: 24,
    textAlign: 'center',
    p: 0.5,
  };

  const styleButt01 = {
    fontSize: 16,
    maxHeight: '21px',
    minHeight: '21px',
    marginTop: 3,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'left',
    textTransform: 'unset !important',
  };

  const styleButt02 = {
    fontSize: 15,
    maxHeight: '21px',
    minHeight: '21px',
    marginTop: 3,
    backgroundColor: 'white',
    color: 'black',
    textTransform: 'unset !important',
  };

  const [value, setValue] = React.useState('0');

  return (
    <>
      <Grid container sx={{ height: '100vh' }}>
        <Grid item xs={12} sx={styleAppMulka}>
          <Box sx={styleHeader}>
            <b>Здесь будет Красивая Шапка</b>
          </Box>
        </Grid>
        <Grid container sx={{ marginRight: 2 }}>
          <Grid item xs={2.5} sx={styleAppMenu}>
            <Grid item sx={{ padding: 0.5 }}>
              <Stack direction="column">
                <Box sx={{ fontSize: 21, marginTop: 1, textAlign: 'center', color: '#5B1080' }}>
                  Главное меню ДКА-М
                </Box>
                <Grid container>
                  <Grid item xs>
                    <Button sx={styleButt01} variant="contained" onClick={() => setValue('1')}>
                      <b>Состояние </b>
                    </Button>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs>
                    <Button sx={styleButt01} variant="contained" onClick={() => setValue('1')}>
                      <b>Обмен </b>
                    </Button>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs>
                    <Button sx={styleButt01} variant="contained" onClick={() => setValue('1')}>
                      <b>Технология </b>
                    </Button>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs>
                    <Button sx={styleButt01} variant="contained" onClick={() => setValue('1')}>
                      <b>Оборудование </b>
                    </Button>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs>
                    <Box sx={{ fontSize: 17, marginTop: 3, marginLeft: 2 }}>
                      <b>Привязка </b>
                    </Box>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={10}>
                    <Button sx={styleButt02} variant="contained" onClick={() => setValue('1')}>
                      Выходы
                    </Button>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={10}>
                    <Button sx={styleButt02} variant="contained" onClick={() => setValue('1')}>
                      Направления
                    </Button>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={10}>
                    <Button sx={styleButt02} variant="contained" onClick={() => setValue('1')}>
                      Планы
                    </Button>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs>
                    <Button sx={styleButt01} variant="contained" onClick={() => setValue('1')}>
                      <b>Журнал</b>
                    </Button>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>

          <Grid item xs sx={styleAppMenu}></Grid>
        </Grid>
        <Grid item xs={12} sx={styleAppPodv}>
          <Box sx={{ textAlign: 'center', fontSize: 14 }}>
            <b>Место для различнoй занимательнoй информации</b>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
