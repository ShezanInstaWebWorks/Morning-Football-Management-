import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Cost = () => {
  // const createUser=async()=>{}
   const names=["Slot Booking","Advance for Slot","Remaining for Slot","Football","Accessories","Other"];
   const [open, setOpen] =useState(false)
   const usersCollectionRef=collection(db,"cost");

   const handleClickOpen = () => {
    // console.log("Opening dialog");
     setOpen(true);
     
   };
 
   const handleClose = () => {
    // console.log("Closing dialog");
     setOpen(false);
   };
      const handleSubmit=async(e)=>{
      const form = document.forms.paymentForm;
      const cost = form.cost.value;
      const amount = form.amount.value;
      const date = form.date.value;
      // console.log("data",form);
      const user = { cost, amount, date };
      console.log("Form submitted:", user);
      await addDoc(usersCollectionRef,{amount:amount,cost:cost,date:date});
      setOpen(false);
      window.location.reload(false);

    }
    return (
        <div>
          <center>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",padding:"6px 0px 6px 0px",
            marginBottom:"30px",color:"white",bgcolor:"#4a148c",borderRadius:"5px",width:"230px"}}>
            <Typography variant='h6'>
              ADD COST DETAILS
              </Typography> 
            </Box></center>
            <Grid>
            <form name="paymentForm" onSubmit={(e) => e.preventDefault()}>
            <Grid item >
            <Typography sx={{paddingBottom:"5px"}}>Cost on</Typography>
            <FormControl sx={{ m: 1, minWidth: 220,paddingBottom:"15px" }} size="small">
          <InputLabel >Cost</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Cost"
            name="cost"
          >
            
              {names.map((name)=>(
                <MenuItem value={name}>
                   <em>{name}</em>
            </MenuItem>

              ))}
             
          </Select>
        </FormControl>
                
                </Grid>
                
            <Grid item >
            <Typography sx={{paddingBottom:"5px"}}>Input Amount</Typography>
                <TextField name="amount" size='small' id="outlined-basic" label="Amount" variant="outlined" sx={{paddingBottom:"30px"}}/>
                </Grid>
                <Grid item >
            <Typography sx={{paddingBottom:"5px"}}> Date</Typography>
                <TextField name="date" size='small' id="outlined-basic" type='date' variant="outlined" sx={{paddingBottom:"30px",width:"228px"}}/>
                </Grid>
                <Grid>
                  <Box>
                    <Button  variant='contained' onClick={handleClickOpen}>Submit</Button>
                    <Dialog
                    sx={{width:"330px",height:"280px"}}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Is all the information is Correct?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please check if all of the information given are correct.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleSubmit}>Agree</Button>
        </DialogActions>
      </Dialog>
       </Box>

                </Grid>
                </form>
            </Grid>
        </div>
    );
};

export default Cost;