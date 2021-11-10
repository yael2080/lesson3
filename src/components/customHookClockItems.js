//customHook
import React, { useState , useEffect} from 'react'

function Clock(props) {
    const ticks= ViewTimer()
   
    return(
    <p>{ticks}</p> 
    )
}
function Items(props) {
     const items=['good', 'exelent','nice']
     const ticks= ViewTimer(3000)
    return(
   <p>{items[ticks % items.length]}</p>
    )
}

 function ViewTimer(t=1000) {

    const [ticks, setTicks]= useState(0)
    
    function tick() {
        setTicks(val => ( val + 1));
    }

    useEffect(function () {
        const time = setInterval(tick, t);
                
            return function cancel() {
                clearInterval(time);
                }
    }, []);            
    return ticks
}
export default {Clock, Items }