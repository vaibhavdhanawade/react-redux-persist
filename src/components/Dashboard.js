import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TimelineC from './TimelineC';
import AddTimeline from './AddTimeline';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item><TimelineC/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><AddTimeline/></Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard