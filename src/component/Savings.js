import { Box, Typography } from '@mui/material';
import React, { useContext } from "react";
import NoteContext from '../context/Context';


const Savings=()=>{
  const { value,value1 } = useContext(NoteContext);
  const result=value.reduce((total,obj)=>parseFloat(obj.amount)+total,0)-value1.reduce((total,obj)=>parseFloat(obj.amount)+total,0);
    return(
        <div>
<center>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",padding:"6px 0px 6px 0px",
            marginBottom:"30px",color:"white",bgcolor:"#4a148c",borderRadius:"5px",width:"230px"}}>
            <Typography sx={{fontSize:"18.5px"}}>
              AMOUNT ON ACCOUNT
              </Typography> 
            </Box></center>

            <Typography sx={{fontSize:"30px"}}>
            {result}
            </Typography>
            

        </div>
    )
}
export default Savings;