import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { add, clear } from '../features/timeline/timelineSlice';


function AddTimeline() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState(false);
  //const existingItemJSON = localStorage.getItem('timeline');
  //const existingItems =  existingItemJSON ? JSON.parse(existingItemJSON) : []; 

  const clearAll = () =>{
    //localStorage.removeItem('timeline');
    dispatch(clear());
    toast.success("Timeline Cleared!");
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if(title !== '' && desc !== '' && time !== ''){
        const newTimeline = {
            title : title,
            desc : desc,
            time : time
        };

        //const updatedItem = [...existingItems,newTimeline];

        //const timelineJSON = JSON.stringify(updatedItem);
        //localStorage.setItem('timeline', timelineJSON);
        dispatch(add(newTimeline));
        
        toast.success("Timeline Added Successfully!");
        setTitle('');
        setDesc('');
        setTime('');
        setError(false);
    }else{
        setError(true);
        toast.error("Please fill required fields!");
    }    
  }  
  return (
    <>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h1>Add Timeline</h1>
        <div>
        <form>    
        <TextField
          required
          id="outlined-required"
          label="Title"
          defaultValue=""
          onChange={(e) => {setTitle(e.target.value)}}
          value={title}
          style={{ border: error ? '1px solid red' : '', borderRadius: '4px', }}
        /><br/>
        <TextField
          required
          id="outlined-disabled"
          label="Description"
          onChange={(e) => {setDesc(e.target.value)}}
          value={desc}
          style={{ border: error ? '1px solid red' : '', borderRadius: '4px', }}
        /><br/>
        <TextField
          required
          id="outlined-password-input"
          label="Time"
          placeholder="9:40 am"
          onChange={(e) => {setTime(e.target.value)}}
          value={time}
          style={{ border: error ? '1px solid red' : '', borderRadius: '4px', }}
        /><br/>
        <Button color={error ? 'error' : 'primary'} style={{marginRight:'10px'}} onClick={handleSubmit} type="submit" variant="outlined">
        ADD
        </Button>
        <Button onClick={clearAll}  variant="outlined" color="secondary">
        Clear All
        </Button>
        </form>
        </div>
        </Box>
    </>
  )
}

export default AddTimeline