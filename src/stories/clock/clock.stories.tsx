import { useState } from "react";
import { Clock } from "./setInterval.stories";

export default {
    title: 'setInterval'
};

export const ClockOption = ()=>{
    const [option, setOption]= useState<string>("digital")
return(
    <>
    <Clock option={option}/>
    <button onClick={()=>setOption('digital')}>Digital</button>
    <button onClick={()=>setOption('analog)')}>Analog</button>
    </>
)
}