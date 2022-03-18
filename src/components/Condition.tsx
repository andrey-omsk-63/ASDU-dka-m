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

const Condition = () => {
  return (
    <Stack direction="column">
      <Box sx={{ border: 0, marginTop: -3, marginLeft: -3, marginRight: -3 }}>
        <Grid container>
          <Grid item xs >

            <Grid item xs={12} >
              <Grid item>
                <Box>
                  <Grid container sx={{ height: '62.5vh', }}>
                    <Grid item xs={4.25} sx={{ border: 0, }}>

                      <Stack direction="column">
                        <Box sx={{ border: 1, height: '15vh',}}>
                          <Grid container>
                            <Grid item xs >


                            </Grid>
                          </Grid>
                        </Box>

                        <Box sx={{ border: 1, height: '27vh', marginTop: 0.5, }}>
                          <Grid container>
                            <Grid item xs >

                            </Grid>
                          </Grid>
                        </Box>

                        <Box sx={{ border: 1, height: '18.6vh', marginTop: 0.5, }}>
                          <Grid container>
                            <Grid item xs >

                            </Grid>
                          </Grid>
                        </Box>

                      </Stack>



                    </Grid>
                    <Grid item xs={0.05} sx={{ border: 0, }}></Grid>
                    <Grid item xs={4.25} sx={{ border: 0 }}>

                    <Stack direction="column">
                        <Box sx={{ border: 1, height: '33vh',}}>
                          <Grid container>
                            <Grid item xs >


                            </Grid>
                          </Grid>
                        </Box>

                        <Box sx={{ border: 1, height: '15vh', marginTop: 0.5, }}>
                          <Grid container>
                            <Grid item xs >

                            </Grid>
                          </Grid>
                        </Box>
                  
                      </Stack>

                    </Grid>
                    <Grid item xs={0.05} sx={{ border: 0, }}></Grid>
                    <Grid item xs sx={{ border: 1 }}>

                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Box>

      <Box sx={{ border: 1, height: '22vh', marginTop: 0.5, marginLeft: -3, marginRight: -3 }}>
        <Grid container>
          <Grid item xs >

          </Grid>
        </Grid>
      </Box>

    </Stack>
  );
};

export default Condition;
