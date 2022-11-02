import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../Home/Home';


const TimeUp = () => toast.error('Time Up!!'
    , {
      position: "top-center",
      theme:"colored",
      autoClose: 2000,
      }
    );


const formatTime = (time)=>{
    let minutes = Math.floor(time/60);
    let seconds = Math.floor(time-minutes*60);

    if(minutes <= 10) minutes = "0" + minutes;
    if(seconds <= 10) seconds = "0" + seconds;
    return minutes + ':' + seconds;

}
 export default function CountDown({seconds}){
     const [countdown, setCountdown]= useState(seconds)
     const timerId = useRef()

     useEffect(()=>{
        timerId.current =setInterval(()=>{
            setCountdown(prev => prev -1)
        }, 1000)
        return () => clearInterval(timerId.current)

     },[])

     useEffect(()=>{
        if(countdown <= 0){
            clearInterval(timerId.current)
            // alert('End!')
          TimeUp()  
          
          return ;   
        }

     },[countdown])


     return (
       <p > {formatTime(countdown)}
       <ToastContainer  />
       </p>
    )
 }



   
