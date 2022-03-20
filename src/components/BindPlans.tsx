import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Modal from '@mui/material/Modal';

//import Tabs from '@mui/material/Tabs';
//import Tab from '@mui/material/Tab';

//import axios from 'axios';

const BindPlans = () => {
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
            <Grid item xs={10} sx={styleBox}></Grid>
            <Grid item xs={0.05}></Grid>
            <Grid item xs sx={styleBox}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BindPlans;
