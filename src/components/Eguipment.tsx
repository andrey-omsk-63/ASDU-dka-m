import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Modal from '@mui/material/Modal';

//import Tabs from '@mui/material/Tabs';
//import Tab from '@mui/material/Tab';

//import axios from 'axios';

const Eguipment = () => {
  const styleBox = {
    border: 1,
    borderRadius: 1,
    backgroundColor: 'white',
    borderColor: 'primary.main',
  };

  return (
    <Stack direction="column">
      <Box sx={{ marginTop: -3, marginLeft: -3, marginRight: -3 }}>
        <Grid container sx={styleBox}>
          <Grid item xs={12} sx={{ height: '65.5vh' }}>
            <Grid container></Grid>
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

export default Eguipment;
