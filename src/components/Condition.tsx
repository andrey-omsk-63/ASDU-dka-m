import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
//import Modal from '@mui/material/Modal';
// import TextField from '@mui/material/TextField';
//import Tabs from '@mui/material/Tabs';
//import Tab from '@mui/material/Tab';

//import axios from 'axios';

const Condition = () => {
  const styleButt01 = {
    fontSize: 14,
    maxHeight: '18px',
    minHeight: '18px',
    marginTop: -2,
    backgroundColor: 'white',
    color: '#5B1080',
    textTransform: 'unset !important',
  };

  const styleBox01 = {
    border: 1,
    borderColor: 'primary.main',
    borderRadius: 1,
    backgroundColor: 'white',
  };

  const styleBox02 = {
    border: 1,
    borderColor: 'primary.main',
    borderRadius: 1,
    backgroundColor: 'white',
    marginTop: 0.5,
  };

  const styleBox03 = {
    border: 1,
    borderRadius: 1,
    backgroundColor: 'white',
    borderColor: 'primary.main',
    height: '22.3vh',
    marginTop: 0.5,
    marginLeft: -3,
    marginRight: -3,
  };

  const ConditionColGrid01 = () => {
    const Col01Grid01 = () => {
      return (
        <>
          <Grid item xs={7.5}>
            <Box>
              <b>&nbsp;Номер устройства:</b>
            </Box>
            <p>
              <b>&nbsp;Версия платы:</b>
            </p>
            <Box>
              <b>&nbsp;Версия ПО:</b>
            </Box>
          </Grid>
          <Grid item xs>
            <Box>Нет данных</Box>
            <p>Нет данных</p>
            <Box>Нет данных</Box>
          </Grid>
        </>
      );
    };

    const Col01Grid02 = () => {
      return (
        <>
          <Grid item xs={7.5}>
            <Box>
              <b>&nbsp;Активный канал:</b>
            </Box>
            <p>
              <b>&nbsp;Состояние ПБС:</b>
            </p>
            <Box>
              <b>&nbsp;GPS:</b>
            </Box>
            <p>
              <b>&nbsp;ПСПД:</b>
            </p>
            <Box>
              <b>&nbsp;Питание:</b>
            </Box>
            <p>
              <b>&nbsp;Память:</b>
            </p>
          </Grid>
          <Grid item xs>
            <Box>Нет данных</Box>
            <p>Нет данных</p>
            <Box>Нет данных</Box>
            <p>Нет данных</p>
            <Box>Нет данных</Box>
            <p>Нет данных</p>
          </Grid>
        </>
      );
    };

    const Col01Grid04 = () => {
      return (
        <>
          <Grid item xs={7.5}>
            <Box>
              <b>&nbsp;Спутники GPS:</b>
            </Box>
            <p>
              <b>&nbsp;Синхронизация:</b>
            </p>
            <Box>
              <b>&nbsp;Время RTC:</b>
            </Box>
            <p>
              <b>&nbsp;Время GPS:</b>
            </p>
            <Box>
              <b>&nbsp;Время системное:</b>
            </Box>
          </Grid>
          <Grid item xs>
            <Box>Нет данных</Box>
            <p>Нет данных</p>
            <Box>Нет данных</Box>
            <p>Нет данных</p>
            <Box>23:09:27</Box>
          </Grid>
        </>
      );
    };

    return (
      <Grid item xs={4.25} sx={{ border: 0 }}>
        <Stack direction="column">
          <Box sx={styleBox01}>
            <Grid container sx={{ height: '13.5vh' }}>
              <Grid item xs>
                <Button sx={styleButt01} variant="contained" onClick={() => setValue('11')}>
                  Информация
                </Button>
                <Grid container sx={{ fontSize: 12.9 }}>
                  <Col01Grid01 />
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Box sx={styleBox02}>
            <Grid container sx={{ height: '25.5vh' }}>
              <Grid item xs>
                <Button sx={styleButt01} variant="contained" onClick={() => setValue('12')}>
                  Состояние
                </Button>
                <Grid container sx={{ fontSize: 12.9 }}>
                  <Col01Grid02 />
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Box sx={styleBox02}>
            <Grid container sx={{ height: '21.6vh' }}>
              <Grid item xs>
                <Button sx={styleButt01} variant="contained" onClick={() => setValue('14')}>
                  Время
                </Button>
                <Grid container sx={{ fontSize: 12.9 }}>
                  <Col01Grid04 />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    );
  };

  const ConditionColGrid02 = () => {
    return (
      <Grid item xs={4.25} sx={{ border: 0 }}>
        <Stack direction="column">
          <Box sx={styleBox01}>
            <Grid container sx={{ height: '33vh' }}>
              <Grid item xs></Grid>
            </Grid>
          </Box>

          <Box sx={styleBox02}>
            <Grid container sx={{ height: '15vh' }}>
              <Grid item xs></Grid>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    );
  };

  const ConditionColGrid03 = () => {
    return (
      <Grid item xs sx={{ border: 0 }}>
        <Stack direction="column">
          <Box sx={styleBox01}>
            <Grid container sx={{ height: '43vh' }}>
              <Grid item xs></Grid>
            </Grid>
          </Box>

          <Box sx={styleBox02}>
            <Grid container sx={{ height: '18.5vh' }}>
              <Grid item xs></Grid>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    );
  };

  const [value, setValue] = React.useState('0');

  return (
    <Stack direction="column">
      <Box sx={{ border: 0, marginTop: -3, marginLeft: -3, marginRight: -3 }}>
        <TabContext value={value}>
          <Grid container>
            <Grid item xs={12}>
              <Box>
                <Grid container sx={{ height: '62.5vh' }}>
                  <ConditionColGrid01 />
                  <Grid item xs={0.05}></Grid>
                  <ConditionColGrid02 />
                  <Grid item xs={0.05}></Grid>
                  <ConditionColGrid03 />
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <TabPanel value="11"></TabPanel>
          <TabPanel value="12"></TabPanel>
          <TabPanel value="14"></TabPanel>
        </TabContext>
      </Box>

      <Box sx={styleBox03}>
        <Grid container>
          <Grid item xs></Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default Condition;
