import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { red, green,blue } from '@mui/material/colors';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

  if (total === 0) {
    return <p>No feedback given</p>;
  }



  return (

     <Grid item xs={12} md={6}>
       <List >
           <ListItem
           >
             <ListItemAvatar>
               <Avatar  sx={{ bgcolor: green[500] }}>
                {good}
               </Avatar>
             </ListItemAvatar>
             <ListItemText
               primary="Good"
             />
           </ListItem>
           <ListItem
           >
             <ListItemAvatar>
               <Avatar>
                {neutral}
               </Avatar>
             </ListItemAvatar>
             <ListItemText
               primary="Neutral"
             />
           </ListItem>
           <ListItem
           >
             <ListItemAvatar>
               <Avatar
               sx={{ bgcolor: red[500] }}
               
               >
                {bad}
               </Avatar>
             </ListItemAvatar>
             <ListItemText
               primary="Bad"
             />
           </ListItem>
           <ListItem
           >
             <ListItemAvatar>
               <Avatar sx={{ bgcolor: blue[500] }}>
                {total}
               </Avatar>
             </ListItemAvatar>
             <ListItemText
               primary="Total"
               
             />
           </ListItem>
       </List>
       <Stack spacing={2} 
       justifyContent="center"
  alignItems="center"
       direction="row">
      <Typography
          variant="h6"
          component="div"
          color="primary"
        >Positive Feedback</Typography>
       <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      
      <CircularProgress variant="determinate" value={positivePercentage} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="primary"
        >{positivePercentage}%</Typography>
      </Box>
    </Box>
    </Stack>
   </Grid>

  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;