import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Modal from '@mui/material/Modal';
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

  // const styleBox02 = {
  //   border: 1,
  //   borderColor: 'primary.main',
  //   borderRadius: 1,
  //   backgroundColor: 'white',
  //   marginTop: 0.5,
  // };

  // const styleBox03 = {
  //   border: 1,
  //   borderRadius: 1,
  //   backgroundColor: 'white',
  //   borderColor: 'primary.main',
  //   height: '22.3vh',
  //   marginTop: 0.5,
  //   marginLeft: -3,
  //   marginRight: -3,
  // };

  const styleSet = {
    position: 'absolute',
    top: '12vh',
    right: '18vh',
    width: 512,
    bgcolor: 'background.paper',
    border: '3px solid #000',
    borderRadius: 2,
    boxShadow: 24,
    p: 3,
  };

  const styleModalEnd = {
    position: 'absolute',
    top: '0%',
    left: '90%',
    fontSize: 21,
  };

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

  const Col02Grid01 = () => {
    return (
      <>
        <Grid item xs={7.5}>
          <Box>
            <b>&nbsp;Тип модема:</b>
          </Box>
          <p>
            <b>&nbsp;Врсия ПО модема:</b>
          </p>
          <Box>
            <b>&nbsp;Оператор GSM:</b>
          </Box>
          <p>
            <b>&nbsp;Уровень сигнала:</b>
          </p>
          <Box>
            <b>&nbsp;Попытка связи:</b>
          </Box>
          <p>
            <b>&nbsp;IP адрес сервера:</b>
          </p>
          <Box>
            <b>&nbsp;Стадия соединения:</b>
          </Box>
          <p>
            <b>&nbsp;Состояние:</b>
          </p>
        </Grid>
        <Grid item xs>
          <Box>Нет данных</Box>
          <p>Нет данных</p>
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

  const Col02Grid02 = () => {
    return (
      <>
        <Grid item xs={7.5}>
          <Box>
            <b>&nbsp;IP адрес сервера:</b>
          </Box>
          <p>
            <b>&nbsp;Стадия соединения:</b>
          </p>
          <Box>
            <b>&nbsp;Состояние:</b>
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

  const Col03Grid02 = () => {
    return (
      <>
        <Grid item xs={6.1}>
          <Box>
            <b>&nbsp;IP адрес GPRS:</b>
          </Box>
          <p>
            <b>&nbsp;Порт GPRS:</b>
          </p>
          <Box>
            <b>&nbsp;IP адрес LAN:</b>
          </Box>
          <p>
            <b>&nbsp;Порт LAN:</b>
          </p>
          <Box>
            <b>&nbsp;Канал связи:</b>
          </Box>
          <p>
            <b>&nbsp;Табло отсчёта:</b>
          </p>
        </Grid>
        <Grid item xs>
          <Box>092.255.180.080</Box>
          <p>1094</p>
          <Box>192.168.115.055</Box>
          <p>1094</p>
          <Box>LAN+GPRS</Box>
          <p>Авто</p>
        </Grid>
      </>
    );
  };

  const Col03Grid03 = () => {
    return (
      <>
        <Grid item xs={6.2}>
          <Box>
            <b>&nbsp;IP адрес:</b>
          </Box>
          <p>
            <b>&nbsp;Маска подсети:</b>
          </p>
          <Box>
            <b>&nbsp;Основной шлюз:</b>
          </Box>
        </Grid>
        <Grid item xs>
          <Box>192.168.115.085</Box>
          <p>255.255.255.000</p>
          <Box>192.168.115.001</Box>
        </Grid>
        <p>
          <b>&nbsp;Получать адреса по DHCP: *</b>
        </p>
      </>
    );
  };

  const handleOpenModal = (nom: string) => {
    setOpenSet(true);
    setValue(nom);
  };

  const ConditionColGrid01 = () => {
    return (
      <Grid item xs={4} sx={{ border: 0 }}>
        <Stack direction="column">
          <Box>
            <Grid container sx={styleBox01}>
              <Grid item xs sx={{ height: '13.6vh' }}>
                <Button sx={styleButt01} variant="contained" onClick={() => handleOpenModal('11')}>
                  Информация
                </Button>
                <Grid container sx={{ fontSize: 12 }}>
                  <Col01Grid01 />
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ marginTop: 0.5 }}>
            <Grid container sx={styleBox01}>
              <Grid item xs sx={{ height: '24.6vh' }}>
                <Button sx={styleButt01} variant="contained" onClick={() => handleOpenModal('12')}>
                  Состояние
                </Button>
                <Grid container sx={{ fontSize: 12 }}>
                  <Col01Grid02 />
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ marginTop: 0.5 }}>
            <Grid container sx={styleBox01}>
              <Grid item xs sx={{ height: '22.5vh' }}>
                <Button sx={styleButt01} variant="contained" onClick={() => handleOpenModal('14')}>
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
      <Grid item xs={4.25}>
        <Stack direction="column">
          <Box>
            <Grid container sx={styleBox01}>
              <Grid item xs sx={{ height: '32vh' }}>
                <Button sx={styleButt01} variant="contained" onClick={() => handleOpenModal('21')}>
                  GPRS
                </Button>
                <Grid container sx={{ fontSize: 12 }}>
                  <Col02Grid01 />
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ marginTop: 0.5 }}>
            <Grid container sx={styleBox01}>
              <Grid item xs sx={{ height: '13.5vh' }}>
                <Button sx={styleButt01} variant="contained" onClick={() => handleOpenModal('22')}>
                  GPRS
                </Button>
                <Grid container sx={{ fontSize: 12 }}>
                  <Col02Grid02 />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    );
  };

  const ConditionColGrid03 = () => {
    return (
      <Grid item xs>
        <Stack direction="column">
          <Box>
            <Grid container sx={styleBox01}>
              <Grid item xs sx={{ height: '43vh' }}>
                <Button sx={styleButt01} variant="contained" onClick={() => handleOpenModal('32')}>
                  Настройки УСДК
                </Button>
                <Grid container sx={{ fontSize: 12 }}>
                  <Col03Grid02 />
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ marginTop: 0.5 }}>
            <Grid container sx={styleBox01}>
              <Grid item xs sx={{ height: '18.5vh' }}>
                <Button sx={styleButt01} variant="contained" onClick={() => handleOpenModal('33')}>
                  Настройки LAN
                </Button>
                <Grid container sx={{ fontSize: 11.5 }}>
                  <Col03Grid03 />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    );
  };

  const ModalEnd = () => {
    return (
      <Button sx={styleModalEnd} onClick={handleCloseSetBut}>
        &#10060;
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

  return (
    <Stack direction="column">
      <TabContext value={value}>
        <Box sx={{ border: 0, marginTop: -3, marginLeft: -3, marginRight: -3 }}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container sx={{ height: '62.5vh' }}>
                <ConditionColGrid01 />
                <Grid item xs={0.05}></Grid>
                <ConditionColGrid02 />
                <Grid item xs={0.05}></Grid>
                <ConditionColGrid03 />
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ marginTop: 0.5, marginLeft: -3, marginRight: -3 }}>
          <Grid container sx={styleBox01}>
            <Grid item xs sx={{ height: '22.3vh' }}></Grid>
          </Grid>
        </Box>

        <TabPanel value="11">
          <Modal open={openSet} onClose={handleCloseSet}>
            <Box sx={styleSet}>
              <ModalEnd />
              <Grid container sx={{ fontSize: 21 }}>
                <Col01Grid01 />
              </Grid>
            </Box>
          </Modal>
        </TabPanel>
        <TabPanel value="12">
          <Modal open={openSet} onClose={handleCloseSet}>
            <Box sx={styleSet}>
              <ModalEnd />
              <Grid container sx={{ fontSize: 21 }}>
                <Col01Grid02 />
              </Grid>
            </Box>
          </Modal>
        </TabPanel>
        <TabPanel value="14">
          <Modal open={openSet} onClose={handleCloseSet}>
            <Box sx={styleSet}>
              <ModalEnd />
              <Grid container sx={{ fontSize: 21 }}>
                <Col01Grid04 />
              </Grid>
            </Box>
          </Modal>
        </TabPanel>
        <TabPanel value="21">
          <Modal open={openSet} onClose={handleCloseSet}>
            <Box sx={styleSet}>
              <ModalEnd />
              <Grid container sx={{ fontSize: 21 }}>
                <Col02Grid01 />
              </Grid>
            </Box>
          </Modal>
        </TabPanel>

        <TabPanel value="22">
          <Modal open={openSet} onClose={handleCloseSet}>
            <Box sx={styleSet}>
              <ModalEnd />
              <Grid container sx={{ fontSize: 21 }}>
                <Col02Grid02 />
              </Grid>
            </Box>
          </Modal>
        </TabPanel>

        <TabPanel value="32">
          <Modal open={openSet} onClose={handleCloseSet}>
            <Box sx={styleSet}>
              <ModalEnd />
              <Grid container sx={{ fontSize: 21 }}>
                <Col03Grid02 />
              </Grid>
            </Box>
          </Modal>
        </TabPanel>

        <TabPanel value="33">
          <Modal open={openSet} onClose={handleCloseSet}>
            <Box sx={styleSet}>
              <ModalEnd />
              <Grid container sx={{ fontSize: 21 }}>
                <Col03Grid03 />
              </Grid>
            </Box>
          </Modal>
        </TabPanel>
      </TabContext>
    </Stack>
  );
};

export default Condition;
