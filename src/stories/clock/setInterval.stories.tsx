import { useEffect, useState } from "react"
import './clock.css'

export default {
    title: 'setInterval'
};

export const DigitalClock = () => {
  const [date, setData] = useState<Date>(new Date(Date.now()))

 useEffect(()=>{let id = setInterval(()=>setData(new Date(Date.now())),1000);
    return (() => { clearInterval(id) })},[])

 const addNull=(num:number)=>{
   return num<10? `0${num}` : num
 }
    return (
        <>
        <span>{addNull(date.getHours())}</span>
        :
        <span>{addNull(date.getMinutes())}</span>
        :
        <span>{addNull(date.getSeconds())}</span>
        </>
    )

}

export const AnalogClock = ()=>{
    const [date, setData] = useState<Date>(new Date(Date.now()))

    const deg = 6;
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() * deg;
    let hr = {
        transform: `rotateZ(${(hh) + (mm / 12)}deg)`
    }
    let mn = { transform: `rotateZ(${mm}deg)` }
    let sc = { transform: `rotateZ(${ss}deg)` }

    useEffect(()=>{
        let id = setInterval(() => {setData(new Date(Date.now()))
            console.log('tick')}, 1000);
        return (() => { clearInterval(id) })
    }, [])

       return (
           <>
           <div className="clock">
            <div className="hour">
                <div className="hr" style={hr}></div>
            </div>
            <div className="min">
                <div className="mn" style={mn}></div>
            </div>
            <div className="sec">
                <div className="sc" style={sc}></div>
            </div>
           </div>
           </>
       )
   
}
type PropsType = {
    option:string
}

 export const Clock = ({option}:PropsType)=>{
    return (
        <>
       {option == 'digital' ? <DigitalClock/> : <AnalogClock/>}
        </>
    )
}