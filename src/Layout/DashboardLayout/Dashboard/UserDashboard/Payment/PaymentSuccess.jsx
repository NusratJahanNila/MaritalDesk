import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

const PaymentSuccess = () => {
    const [searchParams]=useSearchParams({});
    const [transactionId,setTransactionId]=useState();

    const sessionId=searchParams.get("session_id")
    console.log(sessionId);

     const api = axios.create({
    baseURL: 'http://localhost:3000', // Backend server
    headers: {
      'Content-Type': 'application/json'
    }
  })

    useEffect(()=>{
        if(sessionId){
            api.post(`/payment-success`,{
                    sessionId: sessionId
                })
            .then(res=>{
                console.log(res.data);
                setTransactionId(res.data.transactionId)
            })
        }
    },[sessionId, api])
    return (
        <div>
           successful payment
           <p>TransactionId: {transactionId}</p>
        </div>
    );
};

export default PaymentSuccess;