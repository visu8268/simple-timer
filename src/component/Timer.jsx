import React, { useEffect, useState } from 'react'

const Timer=({sec,end,start})=> {

    const [timer,setTimer]=useState(0)

    useEffect(()=>{
        let id=setInterval(()=>{
            if(timer>=end){
                 clearInterval(id) 
                 setTimer(start)
                }
            else setTimer(timer+1)
        },sec)
        return ()=>{
            clearInterval(id)
        }
    },[timer])

  return (

      <div>
  <h2>Timer</h2>
  <h3>{timer}</h3>
  </div>
    // <h2>{timer}</h2>
  );
}

export default Timer