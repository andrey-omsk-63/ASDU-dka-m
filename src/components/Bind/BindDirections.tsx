import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Modal from '@mui/material/Modal';

//import Tabs from '@mui/material/Tabs';
//import Tab from '@mui/material/Tab';

import BindRight from './BindComponents/BindRight';

//import axios from 'axios';

const BindDirections = () => {
  const styleBox = {
    border: 1,
    borderRadius: 1,
    backgroundColor: 'white',
    borderColor: 'primary.main',
  };

  return (
    <Box sx={{ marginTop: -3, marginLeft: -3, marginRight: -3 }}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container sx={{ height: '85.7vh' }}>
            <Grid item xs={9.4} sx={styleBox}></Grid>
            <Grid item xs={0.05}></Grid>
            <BindRight />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BindDirections;
