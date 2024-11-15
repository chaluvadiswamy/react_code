import React ,{useState,useEffect, useRef} from 'react';

export default function Timer() {
    const [time,setTime] = useState(0);
    const [isrun, setIsrun] = useState(false);
    const intervalRef = useRef(null);
    
    useEffect(()=> {
        if(isrun){
            intervalRef.current = setInterval(()=>{
                setTime(prevTime => prevTime + 1);
            },1000)
       }else{
        clearInterval(intervalRef.current);
       }
       return ()=>clearInterval(intervalRef.current);
    },[isrun]);

    // useEffect(()=>{
    //    if(isrun){
    //     console.log("=====",isrun);
    //         setInterval(()=>{
    //             setTime(prevTime => prevTime +1);
    //         },3000)
    //    }else{
    //     clearInterval();
    //    }
    //    return()=>{
    //         clearInterval();
    //         setTime(0);
    //    }
    // },[isrun]);

    const startTimer =()=>{
        setIsrun(true);
    }
    const pauseTimer =()=>{
        setIsrun(false);
    }
    const resetTimer =()=>{
        setIsrun(false);
        setTime(0);
    }

  return (
    <div>
        <h1>Timer Display</h1>
        <h2>{Math.floor(time/3600)} : {Math.floor((time % 3600)/60)} : {time % 60}</h2>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Rest / Stop</button>
      
    </div>
  )
}
