import { collection, getDocs } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../config/firebase';
import NoteContext from './Context';

const NoteState = (props) => {
    const [paymentDetails, setPaymentDetails] = useState([]);
  const paymentDetailsCollectionRef = collection(db, "payments");
  React.useEffect(()=>{
    const getPayments=async()=>{
      const data = await getDocs(paymentDetailsCollectionRef);
      setPaymentDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      
    };
    getPayments();
  },[])
  const [costDetails, setCostDetails] = React.useState([]);
  const CostDetailsCollectionRef = collection(db, "cost");
  React.useEffect(() => {
    const getCosts = async () => {
      const data = await getDocs(CostDetailsCollectionRef);
      setCostDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("fire",costDetails);
    };
    getCosts();
  }, []);
    return (
        <div>
            <NoteContext.Provider value={{value:paymentDetails,value1:costDetails}}>
                {props.children}
            </NoteContext.Provider>
        </div>
    );
};

export default NoteState;