import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import BindRight from './BindComponents/BindRight';

//let flagInput = false;

const BindPlans = () => {
  const [size, setSize] = React.useState(0);

  let styleSetWidth = 650;
  if (size > 770) styleSetWidth = window.innerWidth - 50;
  let formSett = ['План 0(РП)', 0];
  let fSize = 11.5;
  if (window.innerWidth > 860) fSize = 14;

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
    marginTop: '-52.5vh',
    backgroundColor: 'white',
    color: '#5B1080',
    textTransform: 'unset !important',
  };

  const styleXTG021 = {
    borderBottom: 1,
    borderColor: 'primary.main',
    textAlign: 'center',
    backgroundColor: '#C0C0C0',
    padding: 0.7,
  };

  const styleXTG03 = {
    borderRight: 1,
    borderBottom: 1,
    borderColor: 'primary.main',
    padding: 0.7,
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

  const HeaderBattomTab = () => {
    return (
      <>
        <Grid item container xs={12}>
          <Grid item xs={2} sx={styleXTG021}>
            <b>№ перекл.</b>
          </Grid>
          <Grid item xs={2} sx={styleXTG021}>
            <b>Время вкл.</b>
          </Grid>
          <Grid item xs={2} sx={styleXTG021}>
            <b>Типы фазы</b>
          </Grid>
          <Grid item xs={2} sx={styleXTG021}>
            <b>№ фазы</b>
          </Grid>
          <Grid item xs={2} sx={styleXTG021}>
            <b>Длитель-ть</b>
          </Grid>
          <Grid item xs={2} sx={styleXTG021}>
            <b>Продление пред.</b>
          </Grid>
        </Grid>
      </>
    );
  };

  const StrokaBattomTab = () => {
    let resStr = [];

    for (let i = 0; i < 12; i++) {
      resStr.push(
        <Grid key={Math.random()} container item xs={12}>
          <Grid key={Math.random()} xs={2} item sx={styleXTG03}>
            {i + 1}
          </Grid>
          <Grid key={Math.random()} xs={2} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={2} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={2} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={2} item sx={styleXTG03}></Grid>
          <Grid key={Math.random()} xs={2} item sx={styleXTG03}></Grid>
        </Grid>,
      );
    }
    return resStr;
  };

  const OutputNormalBattom = () => {
    return (
      <Box sx={{ marginTop: -2.6, fontSize: fSize, height: '59.9vh' }}>
        <HeaderBattomTab />
        <Box sx={{ height: '58.5vh', overflowX: 'auto' }}>{StrokaBattomTab()}</Box>
      </Box>
    );
  };

  // const OutputModalBattom = (props: { Size: any }) => {
  const OutputModalBattom = () => {
    return (
      <Modal open={openSet} onClose={handleCloseSet}>
        <Box sx={styleSet}>
          <ModalEnd />
          <Grid container>
            <Grid item xs sx={{ marginRight: 1, marginTop: -3, fontSize: 18 }}>
              <Box sx={{ marginTop: -3 }}>
                <TopTabInput />
              </Box>
              <Box sx={{ marginTop: 2 }}>
                <HeaderBattomTab />
                <Box sx={{ overflowX: 'auto', height: '69vh' }}>{StrokaBattomTab()}</Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    );
  };

  const InpForm = (nom: number) => {
    let labelTextField = 'Номер плана:';
    if (nom > 0) labelTextField = 'Время цикла, сек:';
    const [valuen, setValuen] = React.useState(formSett[nom]);

    const handleChange = (event: any) => {
      setValuen(event.target.value);
      formSett[nom] = event.target.value;
      //flagInput = true;
    };

    const handleKey = (event: any) => {
      if (event.key === 'Enter') event.preventDefault();
    };

    //console.log('formSett:', formSett);

    return (
      <TextField
        size="small"
        onKeyPress={handleKey} //отключение Enter
        label={labelTextField}
        inputProps={{ style: { fontSize: fSize } }} // font size of input text
        InputLabelProps={{ style: { fontSize: fSize } }} // font size of input label
        value={valuen}
        onChange={handleChange}
        variant="outlined"
      />
    );
  };

  const TopTabInput = () => {
    return (
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 0.5, width: '20ch' } }}
        noValidate
        autoComplete="off">
        <Stack direction="column">
          <Box sx={{ marginTop: 4 }}>{InpForm(0)}</Box>
          <Box sx={{ marginTop: 4 }}>{InpForm(1)}</Box>
        </Stack>
      </Box>
    );
  };

  const BattomTab = () => {
    return (
      <TabContext value={value}>
        <Box>
          <Button sx={styleButtBox} variant="contained" onClick={() => handleOpenModal('69')}>
            <b>Планы</b>
          </Button>
          <OutputNormalBattom />
          <TabPanel value="69">
            {/* <OutputModalBattom Size={size} /> */}
            <OutputModalBattom />
          </TabPanel>
        </Box>
      </TabContext>
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

  //отслеживание изменения размера экрана
  // const [size, setSize] = React.useState([0, 0]);
  //const [size, setSize] = React.useState(0);

  React.useLayoutEffect(() => {
    // React.useEffect(() => {
    function updateSize() {
      //setSize([window.innerWidth, window.innerHeight]);
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  //console.log('size:', size);

  const BindLeft = () => {
    return (
      <Grid item xs={9}>
        <Stack direction="column">
          <Grid container sx={styleBox}>
            <Grid item xs={12} sx={{ height: '24.4vh' }}>
              <TopTabInput />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs sx={{ height: '0.5vh' }}></Grid>
          </Grid>
          <Grid container sx={styleBox}>
            <Grid item xs sx={{ height: '60vh' }}>
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

export default BindPlans;
