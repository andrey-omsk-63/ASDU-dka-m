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
    borderColor: 'primary.main',
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
    borderColor: 'primary.main',
    marginLeft: 0.5,
    height: '87vh',
    backgroundColor: '#F1F5FB',
    opacity: 0.85,
  };

  const styleAppPodv = {
    border: 0,
    marginRight: 5,
    marginLeft: 3,
    height: '3vh',
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

  // const styleApp01 = {
  //   fontSize: 14,
  //   marginRight: 0.5,
  //   width: '18%',
  //   maxHeight: '21px',
  //   minHeight: '21px',
  //   backgroundColor: '#F1F3F4',
  //   color: 'black',
  //   textTransform: 'unset !important',
  // };

  // const styleApp02 = {
  //   fontSize: 14,
  //   marginRight: 0.5,
  //   borderRadius: 1,
  //   width: '12%',
  //   maxHeight: '21px',
  //   minHeight: '21px',
  //   backgroundColor: '#FFE295',
  //   color: 'black',
  //   textAlign: 'center',
  // };

  // const styleModalMenu = {
  //   fontSize: 13.9,
  //   maxHeight: '20px',
  //   minHeight: '20px',
  //   backgroundColor: '#F1F3F4',
  //   color: 'black',
  //   marginRight: 1,
  //   textTransform: 'unset !important',
  // };

  // const styleModal = {
  //   position: 'relative',
  //   bottom: '-45vh',
  //   marginLeft: '60vh',
  //   transform: 'translate(-50%, -50%)',
  //   width: 150,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   borderRadius: 2,
  //   boxShadow: 24,
  //   p: 3,
  // };

  // const [open, setOpen] = React.useState(false);
  // const [crossData, setCrossData] = React.useState(0);

  // const handleOpen = () => setOpen(true);

  // const handleClose = (numer: number) => {
  //   if (numer !== 777) {
  //     setCrossData(numer);
  //     setValue('1');
  //     extData =
  //       points[numer].slice(11, 13) +
  //       '.' +
  //       points[numer].slice(8, 10) +
  //       '.' +
  //       points[numer].slice(3, 7);
  //   }
  //   setOpen(false);
  // };

  // const SpisData = () => {
  //   let resStr = [];
  //   let stroka = '';
  //   let strDat = '';

  //   for (let i = 0; i < points.length; i++) {
  //     stroka = points[i];
  //     strDat = stroka.slice(11, 13) + '.' + stroka.slice(8, 10) + '.' + stroka.slice(3, 7);
  //     resStr.push(
  //       <Button key={i} sx={styleModalMenu} variant="contained" onClick={() => handleClose(i)}>
  //         <b>{strDat}</b>
  //       </Button>,
  //     );
  //   }
  //   resStr.push(
  //     <Button key={777} sx={styleModalMenu} variant="contained" onClick={() => handleClose(777)}>
  //       <b>Выход</b>
  //     </Button>,
  //   );
  //   return resStr;
  // };

  // const ChoiceData = () => {
  //   return (
  //     <>
  //       <Button sx={styleApp01} variant="contained" onClick={handleOpen}>
  //         <b>Выбор по дате</b>
  //       </Button>
  //       <Modal
  //         open={open}
  //         aria-labelledby="modal-modal-title"
  //         aria-describedby="modal-modal-description">
  //         <Box sx={styleModal}>
  //           <Stack direction="column">{SpisData()}</Stack>
  //         </Box>
  //       </Modal>
  //     </>
  //   );
  // };

  // const [points, setPoints] = React.useState<Array<string>>([]);
  // //const ipAdress: string = 'http://localhost:3000/otladkaGlob.json';
  // const ipAdress = window.location.href;

  // React.useEffect(() => {
  //   axios.post(ipAdress).then(({ data }) => {
  //     setPoints(data.fileNames);
  //   });
  // }, [ipAdress]);

  // const [value, setValue] = React.useState('0');

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
            Место для различнщй занимательнщй информации
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
