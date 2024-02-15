import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Payment = () => {
   const names=["Emran Bhai","Captain Kader","Rahul","Shezan","Mahadi","Tanveer","Shawon","Rakib","Fahim","Towmir","Niaz","Nasir","Asif"];
   const [open, setOpen] = React.useState(false);
   const paymentsCollectionRef=collection(db,"payments");

   const handleClickOpen = () => {
     setOpen(true);
   };
 
   const handleClose = () => {
     setOpen(false);
   };
    
    const handleSubmit=async(e)=>{
      
      const form = document.forms.paymentForm;
      const name = form.name.value;
      const received=form.received.value;
      const amount = form.amount.value;
      const date = form.date.value;
      const user = { name, amount, date,received };
      console.log("Form submitted:", user);
      await addDoc(paymentsCollectionRef,{amount:amount,name:name,date:date,received:received});
      setOpen(false);
      window.location.reload(false);
    }
    return (
        <div>
          <center>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",padding:"6px 0px 6px 0px",
            marginBottom:"30px",color:"white",bgcolor:"#4a148c",borderRadius:"5px",width:"230px"}}>
            <Typography sx={{fontSize:"18.5px"}}>
              ADD PAYMENT DETAILS
              </Typography> 
            </Box></center>
            <Grid >
            <form name="paymentForm" onSubmit={(e) => e.preventDefault()}>
            <Grid >
            <Typography sx={{paddingBottom:"5px"}}>Select Your Name</Typography>
            <FormControl sx={{ m: 1, minWidth: 220,paddingBottom:"15px" }} size="small">
          <InputLabel >name</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Name"
            name="name"
            
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
            <Typography sx={{paddingBottom:"5px"}}>Received By</Typography>
                <TextField name="received" size='small' id="outlined-basic" label="name" variant="outlined" sx={{paddingBottom:"30px"}}/>
                </Grid>
                <Grid item >
            <Typography sx={{paddingBottom:"5px"}}>Payment Date</Typography>
                <TextField name="date" size='small' id="outlined-basic" type='date' variant="outlined" sx={{paddingBottom:"30px",width:"228px"}}/>
                </Grid>
                <Grid>
                  <Box>
                    <Button  variant='contained' onClick={handleClickOpen} sx={{marginBottom:"20px"}}>Submit</Button>
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
            <img style={{width:"230px"}} src=''alt=''/>
        </div>
    );
};

export default Payment;
