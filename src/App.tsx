import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
//import Modal from '@mui/material/Modal';

//import axios from 'axios';

import Condition from './components/Condition';
import Technology from './components/Technology';
import Eguipment from './components/Eguipment';
import BindDirections from './components/Bind/BindDirections';
import BindOutputs from './components/Bind/BindOutputs';
import BindPlans from './components/Bind/BindPlans';
import BindDiagram from './components/Bind/BindDiagram';
import Journal from './components/Journal/Journal';

const App = () => {
  const styleAppMulka = {
    border: 1,
    borderRadius: 2,
    borderColor: '#F1F5FB',
    marginTop: 0.5,
    marginRight: 3.5,
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
    opacity: 0.95,
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
    //   display: 'block',
    //   width: 100,
    //   height: 100,
    //   backgroundRepeat: 'no-repeat',
    //   backgroundImage:
  };

  const styleButt01 = {
    fontSize: 16.5,
    maxHeight: '27px',
    minHeight: '27px',
    //maxWidth: '18vh',
    //minWidth: '18vh',
    marginTop: 4,
    backgroundColor: '#F1F5FB',
    color: 'black',

    textTransform: 'unset !important',
  };

  const styleButt02 = {
    fontSize: 16.5,
    maxHeight: '27px',
    minHeight: '27px',
    marginTop: 4,
    backgroundColor: '#F1F5FB',
    color: '#003300',
    textTransform: 'unset !important',
  };

  const ButtonKnobLevel1 = (soob: string, val: string) => {
    return (
      <Grid container>
        <Grid item xs>
          <Button sx={styleButt01} variant="contained" onClick={() => setValue(val)}>
            <b>{soob}</b>
          </Button>
        </Grid>
      </Grid>
    );
  };

  const ButtonKnobLevel2 = (soob: string, val: string) => {
    return (
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs>
          <Button sx={styleButt02} variant="contained" onClick={() => setValue(val)}>
            <b>{soob}</b>
          </Button>
        </Grid>
      </Grid>
    );
  };

  const [value, setValue] = React.useState('1');

  return (
    <>
      <Grid container sx={{ height: '100vh' }}>
        <Grid item xs={12} sx={styleAppMulka}>
          <Box sx={styleHeader}>
            <b>Здесь будет Красивая Шапка</b>
          </Box>
        </Grid>
        <Grid container sx={{ marginRight: 0.5 }}>
          <TabContext value={value}>
            <Grid item xs={2.6} sx={styleAppMenu}>
              <Grid item sx={{ padding: 0.1 }}>
                <Stack direction="column">
                  <Box
                    sx={{
                      fontSize: 24,
                      marginTop: 1,
                      textAlign: 'left',
                      marginLeft: 4,
                      color: '#5B1080',
                    }}>
                    <b>ДКАМ</b>
                  </Box>
                  {ButtonKnobLevel1('Состояние', '1')}
                  {ButtonKnobLevel1('Технология', '2')}
                  {ButtonKnobLevel1('Оборудование', '3')}
                  <Grid container>
                    <Grid item xs>
                      <Box sx={{ fontSize: 19, marginTop: 3, marginLeft: 2 }}>
                        <b>Привязка</b>
                      </Box>
                    </Grid>
                  </Grid>
                  {ButtonKnobLevel2('Выходы', '41')}
                  {ButtonKnobLevel2('Направления', '42')}
                  {ButtonKnobLevel2('Планы', '43')}
                  {ButtonKnobLevel2('Диаграмма', '44')}

                  {ButtonKnobLevel1('Журнал', '5')}
                </Stack>
              </Grid>
            </Grid>

            <Grid item xs sx={styleAppMenu}>
              <TabPanel value="0"></TabPanel>
              <TabPanel value="1">
                <Condition />
              </TabPanel>
              <TabPanel value="2">
                <Technology />
              </TabPanel>
              <TabPanel value="3">
                <Eguipment />
              </TabPanel>
              <TabPanel value="41">
                <BindOutputs />
              </TabPanel>
              <TabPanel value="42">
                <BindDirections />
              </TabPanel>
              <TabPanel value="43">
                <BindPlans />
              </TabPanel>
              <TabPanel value="44">
                <BindDiagram />
              </TabPanel>
              <TabPanel value="5">
                <Journal />
              </TabPanel>
            </Grid>
          </TabContext>
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
