import React, { useEffect, useState } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../features/timeline/timelineSlice';
export default  function TimelineC () {

  const timelineItems = useSelector((state) => state.timeline.item)
  //console.log('test',timelineItems);
  const dispatch = useDispatch();

  //const [timelineItems, setTimelineItems] = useState([]);

 useEffect(()=>{
    //const storedTimelineJSON =  localStorage.getItem('timeline');
    //const storedTimeline =  JSON.parse(storedTimelineJSON);  
    //setTimelineItems(storedTimeline);
 });

  return (
    <Timeline position="alternate">
      {
        (timelineItems.length > 0) ? timelineItems.map((item)=>{
          return(
          <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {item.time}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <AccessTimeOutlinedIcon style={{color:'blue'}} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {item.title} <DeleteIcon style={{color:'red'}} onClick={() => dispatch(deleteItem(item))}/>
          </Typography>
          <Typography>{item.desc}</Typography>
        </TimelineContent>
      </TimelineItem>
        )}) : 'No Items Available'
      }
    </Timeline>
  );
}