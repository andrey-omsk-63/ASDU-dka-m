import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

// import FormControl, { useFormControl } from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import FormHelperText from '@mui/material/FormHelperText';

import BindRight from './BindComponents/BindRight';
import { styleBox, styleButtBox, styleXTG01 } from './BindComponents/BindDirectionsStyle';
import { styleXTG011, styleXTG02, styleXTG021 } from './BindComponents/BindDirectionsStyle';
import { styleXTG03, styleXTG0341 } from './BindComponents/BindDirectionsStyle';
import { styleXTG030, styleXTG032, styleXTG033 } from './BindComponents/BindDirectionsStyle';
import { styleXTG034, styleXTG035, styleXTG036 } from './BindComponents/BindDirectionsStyle';

import { DateRPU } from './../../interfaceRPU.d';
import { dateRpuGl } from './../../App';

let dateRpu: DateRPU;

const BindDirections = () => {
  dateRpu = dateRpuGl;
  const [size, setSize] = React.useState(0);
  let styleSetWidth = 650;

  if (size > 770) styleSetWidth = size - 50;

  let fSize = 10.5;
  if (size > 900) fSize = 14;
  let fSizeInp = 10.5;
  let widthBlok = size / 220;

  let kolFaz = dateRpu.timetophases.length;
  let xss = 11 / kolFaz;

  let masReds = [0, 0, 0];
  let napr = '';

  // const searchInput: any = React.useRef(null);
  // React.useEffect(() => {
  //   // current property is refered to input element
  //   searchInput.current.focus();
  // }, []);

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

  const styleBoxForm = {
    '& > :not(style)': {
      marginTop: 2,
      width: widthBlok.toString() + 'ch',
    },
  };

  const HeaderTopTab = () => {
    const ElemHeader = (xss: number, elem: string) => {
      return (
        <Grid item xs={xss} sx={styleXTG02}>
          <b>{elem}</b>
        </Grid>
      );
    };

    return (
      <>
        <Grid item container xs={12}>
          <Grid item xs={0.75} sx={styleXTG01}></Grid>
          {/* {ElemHeader(3.75, 'Выходы')}
          {ElemHeader(3.75, 'Базовый промтакт')}
          {ElemHeader(3.75, 'Универс.промтакт')} */}
          <Grid item xs={3.75} sx={styleXTG01}>
            <b>Выходы</b>
          </Grid>
          <Grid item xs={3.75} sx={styleXTG01}>
            <b>Базовый промтакт</b>
          </Grid>
          <Grid item xs={3.75} sx={styleXTG011}>
            <b>Универс.промтакт</b>
          </Grid>
        </Grid>

        <Grid item container xs={12}>
          {ElemHeader(0.75, 'Напр')}
          {ElemHeader(0.75, 'Зел.')}
          {ElemHeader(0.75, 'Жел.')}
          {ElemHeader(0.75, 'Кр1.')}
          {ElemHeader(0.75, 'Кр2.')}
          {ElemHeader(0.75, 'Кр3.')}
          {/* ========================== */}
          {ElemHeader(0.75, 'Тзм.')}
          {ElemHeader(0.75, 'Тж.')}
          {ElemHeader(0.75, 'Ткр.')}
          {ElemHeader(0.75, 'Ткж.')}
          {ElemHeader(0.75, 'Тзел.')}
          {/* ========================== */}
          {ElemHeader(0.75, 'Тзм.')}
          {ElemHeader(0.75, 'Тж.')}
          {ElemHeader(0.75, 'Ткр.')}
          {ElemHeader(0.75, 'Ткж.')}
          {ElemHeader(0.75, 'Тзел.')}
        </Grid>
      </>
    );
  };

  const HeaderBattomTab = () => {
    let resStrHeaderBattomTab = [];
    resStrHeaderBattomTab.push(
      <Grid item key={Math.random()} xs={1} sx={styleXTG021}>
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

  const StrokaTopTab = (i: number) => {
    return (
      <Grid container key={i}>
        <Grid xs={0.75} item sx={styleXTG03}>
          {dateRpu.tirtonap[i].num}
          {napr}
        </Grid>
        {InputTopTab(dateRpu.tirtonap[i].green, styleXTG032, i, 1)}
        {InputTopTab(dateRpu.tirtonap[i].yellow, styleXTG033, i, 2)}
        {/* {InputTopTab(masReds[0], styleXTG034, i, 3)}
        {InputTopTab(masReds[1], styleXTG034, i, 4)}
        {InputTopTab(masReds[2], styleXTG034, i, 5)} */}
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

  const MassTopTab = () => {
    let resStr = [];

    for (let i = 0; i < dateRpu.tirtonap.length; i++) {
      // masReds = [0, 0, 0];
      // napr = '';

      // for (let j = 0; j < dateRpu.tirtonap[i].reds.length; j++) {
      //   if (j < 3) masReds[j] = dateRpu.tirtonap[i].reds[j];
      // }
      // switch (dateRpu.tirtonap[i].type) {
      //   case 1:
      //     napr = ' Тран';
      //     break;
      //   case 2:
      //     napr = ' Пеш';
      //     break;
      //   case 3:
      //     napr = ' Пов';
      // }
      resStr.push(StrokaTopTab(i));
    }
    return resStr;
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
    }
  };

  const InputTopTab = (kuda: number, styleXX: any, i: number, numCol: number) => {
    const [valuen, setValuen] = React.useState(kuda);

    const handleChange = (event: any) => {
      setValuen(event.target.value);
      RecordInDateRpu(i, numCol, event.target.value);
      // switch (numCol) {
      //   case 1:
      //     dateRpu.tirtonap[i].green = event.target.value;
      //     break;
      //   case 2:
      //     dateRpu.tirtonap[i].yellow = event.target.value;
      //     break;
      //   case 6:
      //     dateRpu.prombase[i].gd = event.target.value;
      //     break;
      //   case 7:
      //     dateRpu.prombase[i].yel = event.target.value;
      //     break;
      //   case 8:
      //     dateRpu.prombase[i].red = event.target.value;
      //     break;
      //   case 9:
      //     dateRpu.prombase[i].ry = event.target.value;
      //     break;
      //   case 10:
      //     dateRpu.prombase[i].gd = event.target.value;
      //     break;
      //   case 11:
      //     dateRpu.prom[i].gd = event.target.value;
      //     break;
      //   case 12:
      //     dateRpu.prom[i].yel = event.target.value;
      //     break;
      //   case 14:
      //     dateRpu.prom[i].red = event.target.value;
      //     break;
      //   case 15:
      //     dateRpu.prom[i].ry = event.target.value;
      //     break;
      //   case 16:
      //     dateRpu.prom[i].gd = event.target.value;
      //     break;
      // }
    };

    const handleKey = (event: any) => {
      if (event.key === 'Enter') event.preventDefault();
    };

    return (
      <Grid xs={0.75} item sx={styleXX}>
        <Box component="form" sx={styleBoxForm} noValidate autoComplete="off">
          <TextField
            size="small"
            onKeyPress={handleKey} //отключение Enter
            inputProps={{ style: { fontSize: fSizeInp } }} // font size of input text
            value={valuen}
            //ref={searchInput}
            onChange={handleChange}
            variant="standard"
          />
        </Box>
      </Grid>
    );
  };

  const StrokaBattomTabMaxMin = (titl: string) => {
    let resStr: any = [];
    resStr.push(
      <Grid item key={Math.random()} xs={1} sx={styleXTG030}>
        {titl}
      </Grid>,
    );
    for (let i = 0; i < kolFaz; i++) {
      let j = dateRpu.timetophases[i].tmax;
      if (titl !== 'Тмах') j = dateRpu.timetophases[i].tmin;
      resStr.push(
        <Grid item key={Math.random()} xs={xss} sx={styleXTG030}>
          {j}
        </Grid>,
      );
    }
    return resStr;
  };

  const StrokaBattomTab = () => {
    let resStr: any = [];

    for (let i = 0; i < 40; i++) {
      resStr.push(
        <Grid item key={Math.random()} xs={1} sx={styleXTG03}>
          {i + 1}
        </Grid>,
      );
      for (let j = 0; j < kolFaz; j++) {
        resStr.push(<Grid item key={Math.random()} xs={xss} sx={styleXTG0341}></Grid>);
      }
    }
    return resStr;
  };

  const OutputNormalTop = () => {
    fSizeInp = fSize;
    return (
      <Box sx={{ marginTop: -2.1, fontSize: fSize, height: '43.5vh' }}>
        <HeaderTopTab />
        <Box sx={{ height: '39vh', overflowX: 'auto' }}>{MassTopTab()}</Box>
      </Box>
    );
  };

  const OutputNormalBattom = () => {
    return (
      <Box sx={{ marginTop: -2.5, fontSize: fSize, height: '47.5vh' }}>
        <Grid item container xs={12}>
          {HeaderBattomTab()}
          {StrokaBattomTabMaxMin('Тмах')}
          {StrokaBattomTabMaxMin('Тмин')}
        </Grid>
        <Box sx={{ height: '31.2vh', overflowX: 'auto' }}>
          <Grid item container xs={12}>
            {StrokaBattomTab()}
          </Grid>
        </Box>
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
              <Box sx={{ overflowX: 'auto', height: '88vh' }}>{MassTopTab()}</Box>
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
              <Grid item container xs={12}>
                {HeaderBattomTab()}
                {StrokaBattomTabMaxMin('Тмах')}
                {StrokaBattomTabMaxMin('Тмин')}
              </Grid>
              <Box sx={{ overflowX: 'auto', height: '82vh' }}>
                <Grid item container xs={12}>
                  {StrokaBattomTab()}
                </Grid>
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

  const handleOpenModal = (nom: string) => {
    setOpenSet(true);
    setValueTC(nom);
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
    prompt('handleCloseSet');
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
  //prompt('3')

  const BindLeft = () => {
    return (
      <Grid item xs={9}>
        <Stack direction="column">
          <Grid container sx={styleBox}>
            <Grid item xs={12} sx={{ fontSize: fSize, height: '45.4vh' }}>
              <TopTab />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs sx={{ height: '0.8vh' }}></Grid>
          </Grid>
          <Grid container sx={styleBox}>
            <Grid item xs sx={{ height: '40.8vh' }}>
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
