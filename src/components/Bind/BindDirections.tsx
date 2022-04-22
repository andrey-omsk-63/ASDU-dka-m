import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import BindRight from './BindComponents/BindRight';
import { styleBox, styleButtBox, styleXTG01 } from './BindComponents/BindDirectionsStyle';
import { styleXTG011, styleXTG02, styleXTG021 } from './BindComponents/BindDirectionsStyle';
import { styleXTG03, styleXTG0341, styleXTG0342 } from './BindComponents/BindDirectionsStyle';
import { styleXTG030, styleXTG032, styleXTG033 } from './BindComponents/BindDirectionsStyle';
import { styleXTG032Norm, styleXTG033Norm } from './BindComponents/BindDirectionsStyle';
import { styleXTG034Norm } from './BindComponents/BindDirectionsStyle';
import { styleXTG034, styleXTG035, styleXTG036 } from './BindComponents/BindDirectionsStyle';
import { styleXTG035Norm, styleXTG036Norm } from './BindComponents/BindDirectionsStyle';

import { DateRPU } from './../../interfaceRPU.d';
import { dateRpuGl } from './../../App';

let dateRpu: DateRPU;

let massFaza: Array<Array<number>> = [[]];
let flagMassFaza = true;
//let needRend = -1

//let colonkaGlob = 0;
//let strokaGlob = 0;

const BindDirections = () => {
  dateRpu = dateRpuGl;
  let kolFaz = dateRpu.timetophases.length;

  // инициализация massFaza
  if (flagMassFaza) {
    massFaza = Array.from({ length: kolFaz }, () =>
      Array.from({ length: dateRpu.tirtonap.length }, () => 0),
    );
    // i - столбец
    for (let i = 0; i < kolFaz; i++) {
      // j - строка
      for (let j = 0; j < dateRpu.tirtonap.length; j++) {
        if (dateRpu.naptoph[i].naps.includes(j + 1)) {
          massFaza[i][j] = j + 1;
        }
      }
    }
    flagMassFaza = false;
    console.log('massFaza:', massFaza, Math.random());
  }

  const [size, setSize] = React.useState(0);
  let sizeGl = window.innerWidth;

  let styleSetWidth = 650;
  if (sizeGl > 770) styleSetWidth = sizeGl - 50;
  let fSize = 10.5;
  if (sizeGl > 900) fSize = 14;
  let widthButtBatt = '6vh';
  if (sizeGl > 800) widthButtBatt = '12vh';
  if (sizeGl > 1100) widthButtBatt = '18vh';
  let heightButtBatt = '4.2vh';
  if (sizeGl > 880) heightButtBatt = '8.4vh';
  let fSizeInp = 10.5;
  let widthBlok = size / 110;

  let xss = 11.25 / kolFaz;
  let xsss = 0.75;
  let napr = '';

  const styleBackdrop = {
    color: '#fff',
    zIndex: (theme: any) => theme.zIndex.drawer + 1,
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

  const ReadNapravlenie = (i: number) => {
    switch (dateRpu.tirtonap[i].type) {
      case 1:
        napr = ' Тран';
        if (size > 800) napr = ' Трансп.';
        break;
      case 2:
        napr = ' Пеш';
        if (size > 800) napr = ' Пешех.';
        break;
      case 3:
        napr = ' Пов';
        if (size > 800) napr = ' Повор.';
    }
  };

  const RecordInDateRpu = (i: number, numCol: number, chego: number) => {
    switch (numCol) {
      case 1:
        dateRpu.tirtonap[i].green = chego;
        break;
      case 2:
        dateRpu.tirtonap[i].yellow = chego;
        break;
      case 3:
        dateRpu.tirtonap[i].reds[0] = chego;
        break;
      case 4:
        dateRpu.tirtonap[i].reds[1] = chego;
        break;
      case 5:
        dateRpu.tirtonap[i].reds[2] = chego;
        break;
      case 6:
        dateRpu.prombase[i].gd = chego;
        break;
      case 7:
        dateRpu.prombase[i].yel = chego;
        break;
      case 8:
        dateRpu.prombase[i].red = chego;
        break;
      case 9:
        dateRpu.prombase[i].ry = chego;
        break;
      case 10:
        dateRpu.prombase[i].gd = chego;
        break;
      case 11:
        dateRpu.prom[i].gd = chego;
        break;
      case 12:
        dateRpu.prom[i].yel = chego;
        break;
      case 14:
        dateRpu.prom[i].red = chego;
        break;
      case 15:
        dateRpu.prom[i].ry = chego;
        break;
      case 16:
        dateRpu.prom[i].gd = chego;
        break;
      case 21:
        dateRpu.timetophases[i].tmax = chego;
        break;
      case 22:
        dateRpu.timetophases[i].tmin = chego;
    }
  };

  const InputTopTab = (kuda: number, styleXX: any, i: number, numCol: number) => {
    const [valuen, setValuen] = React.useState(kuda);


    const styleBoxForm = {
      '& > :not(style)': {
        marginTop: 2,
        width: widthBlok.toString() + 'ch',
      },
    };

    const handleChange = (event: any) => {
      setValuen(event.target.value);
      // let biba = event.target.value;
      RecordInDateRpu(i, numCol, event.target.value);
    };

    const handleKey = (event: any) => {
      if (event.key === 'Enter') event.preventDefault();
    };

    return (
      // <Grid xs={xsss} key={Math.random()} item sx={styleXX}>
      <Grid xs={xsss} item sx={styleXX}>
        <Box component="form" sx={styleBoxForm} noValidate autoComplete="off">
          <TextField
            size="small"
            onKeyPress={handleKey} //отключение Enter
            type="number"
            inputProps={{ style: { fontSize: fSizeInp } }} // font size of input text
            value={valuen}
            onChange={handleChange}
            variant="standard"
          />
        </Box>
      </Grid>
    );
  };

  //== TopTab =======================================

  const HeaderTopTab = () => {
    const ElemHeader = (xss: number, elem: string, styleXX: any) => {
      return (
        <Grid item xs={xss} sx={styleXX}>
          <b>{elem}</b>
        </Grid>
      );
    };

    return (
      <>
        <Grid item container xs={12}>
          {ElemHeader(0.75, '', styleXTG01)}
          {ElemHeader(3.75, 'Выходы', styleXTG01)}
          {ElemHeader(3.75, 'Базовый промтакт', styleXTG01)}
          {ElemHeader(3.75, 'Универс.промтакт', styleXTG011)}
        </Grid>
        <Grid item container xs={12}>
          {ElemHeader(0.75, 'Напр', styleXTG02)}
          {ElemHeader(0.75, 'Зел.', styleXTG02)}
          {ElemHeader(0.75, 'Жел.', styleXTG02)}
          {ElemHeader(0.75, 'Кр1.', styleXTG02)}
          {ElemHeader(0.75, 'Кр2.', styleXTG02)}
          {ElemHeader(0.75, 'Кр3.', styleXTG02)}
          {/* ========================== */}
          {ElemHeader(0.75, 'Тзм.', styleXTG02)}
          {ElemHeader(0.75, 'Тж.', styleXTG02)}
          {ElemHeader(0.75, 'Ткр.', styleXTG02)}
          {ElemHeader(0.75, 'Ткж.', styleXTG02)}
          {ElemHeader(0.75, 'Тзел.', styleXTG02)}
          {/* ========================== */}
          {ElemHeader(0.75, 'Тзм.', styleXTG02)}
          {ElemHeader(0.75, 'Тж.', styleXTG02)}
          {ElemHeader(0.75, 'Ткр.', styleXTG02)}
          {ElemHeader(0.75, 'Ткж.', styleXTG02)}
          {ElemHeader(0.75, 'Тзел.', styleXTG02)}
        </Grid>
      </>
    );
  };

  const OutputTopTab = (chego: any, styleXX: any) => {
    return (
      <Grid xs={0.75} item key={Math.random()} sx={styleXX}>
        {chego}
      </Grid>
    );
  };

  const StrokaTopTabNormal = (i: number) => {
    let begin = dateRpu.tirtonap[i].num + napr;

    return (
      <Grid container key={i}>
        {OutputTopTab(begin, styleXTG03)}
        {OutputTopTab(dateRpu.tirtonap[i].green, styleXTG032Norm)}
        {OutputTopTab(dateRpu.tirtonap[i].yellow, styleXTG033Norm)}
        {OutputTopTab(dateRpu.tirtonap[i].reds[0], styleXTG034Norm)}
        {OutputTopTab(dateRpu.tirtonap[i].reds[1], styleXTG034Norm)}
        {OutputTopTab(dateRpu.tirtonap[i].reds[2], styleXTG034Norm)}
        {/* ========================== */}
        {OutputTopTab(dateRpu.prombase[i].gd, styleXTG035Norm)}
        {OutputTopTab(dateRpu.prombase[i].yel, styleXTG033Norm)}
        {OutputTopTab(dateRpu.prombase[i].red, styleXTG034Norm)}
        {OutputTopTab(dateRpu.prombase[i].ry, styleXTG036Norm)}
        {OutputTopTab(dateRpu.prombase[i].gd, styleXTG032Norm)}
        {/* ========================== */}
        {OutputTopTab(dateRpu.prom[i].gd, styleXTG035Norm)}
        {OutputTopTab(dateRpu.prom[i].yel, styleXTG033Norm)}
        {OutputTopTab(dateRpu.prom[i].red, styleXTG034Norm)}
        {OutputTopTab(dateRpu.prom[i].ry, styleXTG036Norm)}
        {OutputTopTab(dateRpu.prom[i].gd, styleXTG032Norm)}
      </Grid>
    );
  };

  const StrokaTopTabModal = (i: number) => {
    let begin = dateRpu.tirtonap[i].num + napr;
    xsss = 0.75;
    widthBlok = sizeGl / 220;

    return (
      <Grid container key={i}>
        {OutputTopTab(begin, styleXTG03)}
        {InputTopTab(dateRpu.tirtonap[i].green, styleXTG032, i, 1)}
        {InputTopTab(dateRpu.tirtonap[i].yellow, styleXTG033, i, 2)}
        {InputTopTab(dateRpu.tirtonap[i].reds[0], styleXTG034, i, 3)}
        {InputTopTab(dateRpu.tirtonap[i].reds[1], styleXTG034, i, 4)}
        {InputTopTab(dateRpu.tirtonap[i].reds[2], styleXTG034, i, 5)}
        {/* ========================== */}
        {InputTopTab(dateRpu.prombase[i].gd, styleXTG035, i, 6)}
        {InputTopTab(dateRpu.prombase[i].yel, styleXTG033, i, 7)}
        {InputTopTab(dateRpu.prombase[i].red, styleXTG034, i, 8)}
        {InputTopTab(dateRpu.prombase[i].ry, styleXTG036, i, 9)}
        {InputTopTab(dateRpu.prombase[i].gd, styleXTG032, i, 10)}
        {/* ========================== */}
        {InputTopTab(dateRpu.prom[i].gd, styleXTG035, i, 11)}
        {InputTopTab(dateRpu.prom[i].yel, styleXTG033, i, 12)}
        {InputTopTab(dateRpu.prom[i].red, styleXTG034, i, 14)}
        {InputTopTab(dateRpu.prom[i].ry, styleXTG036, i, 15)}
        {InputTopTab(dateRpu.prom[i].gd, styleXTG032, i, 16)}
      </Grid>
    );
  };

  const MassTopTab = (mode: string) => {
    let resStr = [];

    for (let i = 0; i < dateRpu.tirtonap.length; i++) {
      ReadNapravlenie(i);
      if (mode === 'Normal') {
        resStr.push(StrokaTopTabNormal(i));
      } else {
        resStr.push(StrokaTopTabModal(i));
      }
    }
    Output();
    return resStr;
  };

  const OutputNormalTop = () => {
    fSizeInp = fSize;
    return (
      <Box sx={{ marginTop: -2.1, fontSize: fSize, height: '39.5vh' }}>
        <HeaderTopTab />
        <Box sx={{ height: '34vh', overflowX: 'auto' }}>{MassTopTab('Normal')}</Box>
      </Box>
    );
  };

  const OutputModalTop = () => {
    fSizeInp = 16;
    return (
      <Modal open={openSet} onClose={handleCloseSet}>
        <Box sx={styleSet}>
          <ModalEnd />
          <Grid container>
            <Grid item xs sx={{ marginRight: 1, marginTop: -3, fontSize: 16 }}>
              <HeaderTopTab />
              <Box sx={{ overflowX: 'auto', height: '88vh' }}>
                {open ? <Loader /> : <>{MassTopTab('Modal')}</>}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    );
  };

  const TopTab = () => {
    return (
      <TabContext value={valueTC}>
        <Box sx={{ border: 0 }}>
          <Button sx={styleButtBox} variant="contained" onClick={() => handleOpenModal('33')}>
            <b>Привязка выходов</b>
          </Button>
          <OutputNormalTop />
          <TabPanel value="33">
            <OutputModalTop />
          </TabPanel>
        </Box>
      </TabContext>
    );
  };

  //== BattomTab =======================================

  const HeaderBattomTab = () => {
    let resStrHeaderBattomTab = [];
    resStrHeaderBattomTab.push(
      <Grid item key={Math.random()} xs={0.75} sx={styleXTG021}>
        <b>Фаза</b>
      </Grid>,
    );
    for (let i = 0; i < kolFaz; i++) {
      resStrHeaderBattomTab.push(
        <Grid item key={Math.random()} xs={xss} sx={styleXTG021}>
          <b>{i + 1}</b>
        </Grid>,
      );
    }
    return resStrHeaderBattomTab;
  };

  const StrokaBattomTabMaxMin = (titl: string, mode: string) => {
    let resStr: any = [];
    xsss = xss;
    widthBlok = sizeGl / 110;

    resStr.push(
      <Grid item key={Math.random()} xs={0.75} sx={styleXTG030}>
        {titl}
      </Grid>,
    );
    for (let i = 0; i < kolFaz; i++) {
      let j = dateRpu.timetophases[i].tmax;
      let numCol = 21;
      if (titl !== 'Тмах') {
        j = dateRpu.timetophases[i].tmin;
        numCol = 22;
      }
      if (mode === 'Normal') {
        resStr.push(
          <Grid item key={Math.random()} xs={xss} sx={styleXTG030}>
            {j}
          </Grid>,
        );
      } else {
        resStr.push(InputTopTab(j, styleXTG030, i, numCol));
      }
    }
    return resStr;
  };

  const styleButtBattRed = {
    height: heightButtBatt,
    width: widthButtBatt,
    backgroundColor: '#FE929A',
  };

  const styleButtBattGreen = {
    height: heightButtBatt,
    width: widthButtBatt,
    backgroundColor: '#59CB68',
  };

  const handleClickBattomTab = (i: number, j: number) => {
    if (massFaza[i][j] === 0) {
      massFaza[i][j] = j + 1;
    } else {
      massFaza[i][j] = 0;
    }
    setSize(window.innerWidth + Math.random())
    console.log('massFazaNew:', massFaza,);
  };

  const StrokaBattomTab = (mode: string) => {
    let resStr: any = [];
    let styleXX = styleXTG0341;
    let styleXXX = styleButtBattGreen;

    for (let j = 0; j < dateRpu.tirtonap.length; j++) {
      ReadNapravlenie(j);
      let begin = j + 1 + napr;
      resStr.push(OutputTopTab(begin, styleXTG03));
      for (let i = 0; i < kolFaz; i++) {
        styleXX = styleXTG0341;
        styleXXX = styleButtBattRed;
        //styleXXX = styleButtBattGreen;
        if (massFaza[i][j] > 0) {
          styleXX = styleXTG0342;
          styleXXX = styleButtBattGreen;
          //styleXXX = styleButtBattRed;
        }
        if (mode !== 'Modal') {
          resStr.push(<Grid item key={Math.random()} xs={xss} sx={styleXX}></Grid>);
        } else {
          resStr.push(
            <Grid item key={Math.random()} xs={xss} sx={styleXX}>
              <Button
                // key={i}
                sx={styleXXX}
                onClick={() => handleClickBattomTab(i, j)}></Button>
            </Grid>,
          );
        }
      }
    }
    return resStr;
  };

  const OutputNormalBattom = () => {
    return (
      <Box sx={{ marginTop: -2.5, fontSize: fSize, height: '40.5vh' }}>
        <Grid item container xs={12}>
          {HeaderBattomTab()}
          {StrokaBattomTabMaxMin('Тмах', 'Normal')}
          {StrokaBattomTabMaxMin('Тмин', 'Normal')}
        </Grid>
        <Box sx={{ height: '31.2vh', overflowX: 'auto' }}>
          <Grid item container xs={12}>
            {StrokaBattomTab('Normal')}
          </Grid>
        </Box>
      </Box>
    );
  };

  const OutputModalBattom = () => {
    fSizeInp = 16;
    let fntSize = 18;
    if (sizeGl > 1200) fntSize = 21;
    if (sizeGl > 1500) fntSize = 27;
    return (
      <Modal open={openSet} onClose={handleCloseSet}>
        <Box sx={styleSet}>
          <ModalEnd />
          <Grid container>
            <Grid item xs sx={{ marginRight: 1, marginTop: -3, fontSize: fntSize }}>
              <Grid container>
                {HeaderBattomTab()}
                {StrokaBattomTabMaxMin('Тмах', 'Normal')}
                {StrokaBattomTabMaxMin('Тмин', 'Normal')}
              </Grid>
              <Box sx={{ overflowX: 'auto', height: '69vh' }}>
                <Grid item container xs={12}>

                  {StrokaBattomTab('Modal')}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    );
  };

  const BattomTab = () => {
    return (
      <TabContext value={valueTC}>
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

  //== Common ======================================

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const Output = () => {
    React.useEffect(() => {
      setTimeout(() => {
        setOpen(false);
      }, 100);
    }, []);
  };

  const Loader = () => {
    return (
      <Backdrop sx={styleBackdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  };

  const handleOpenModal = (nom: string) => {
    setOpenSet(true);
    setValueTC(nom);
    setOpen(true);
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

  const [valueTC, setValueTC] = React.useState('0');
  const [openSet, setOpenSet] = React.useState(false);

  const handleCloseSet = (event: any, reason: string) => {
    if (reason !== 'backdropClick') setOpenSet(false);
  };

  const handleCloseSetBut = () => {
    setOpenSet(false);
  };

  //отслеживание изменения размера экрана
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // const [sizeRend, setSizeRend] = React.useState([0, 0]);

  //   React.useLayoutEffect(() => {
  //     function updateSize() {
  //       setSizeRend([window.innerWidth, needRend]);
  //     }
  //     window.addEventListener('resize', updateSize);
  //     updateSize();
  //     return () => window.removeEventListener('resize', updateSize);
  //   }, []);
  //   console.log('needRend:', needRend)


  // React.useLayoutEffect(() => {
  //   function updateSize() {
  //     setSizeRend([window.innerWidth, needRend]);
  //   }
  //   window.addEventListener('resize', updateSize);
  //   updateSize();
  //   return () => window.removeEventListener('resize', updateSize);
  // }, []);



  const BindLeft = () => {
    return (
      <Grid item xs={9}>
        <Stack direction="column">
          <Grid container sx={styleBox}>
            <Grid item xs={12} sx={{ border: 0, fontSize: fSize, height: '41.4vh' }}>
              <TopTab />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs sx={{ height: '0.8vh' }}></Grid>
          </Grid>
          <Grid container sx={styleBox}>
            <Grid item xs sx={{ border: 0, height: '41.8vh' }}>
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
