import { useState } from 'react'

type UnControlledAccordionPropsType = {
    onChange: (v:boolean)=> void
}

export function UncontrolledOnOff({onChange}: UnControlledAccordionPropsType){
  
const [turnOn, setTurnOn] = useState(false)
const on = {
    width: "40px",
    height: "20px",
    backgroundColor: turnOn ? "green": "grey",
    display: "inline-block",
    border: "1px solid black"
}
const off ={
    width: "40px",
    height: "20px",
    backgroundColor: !turnOn?  "red": "grey",
    display: "inline-block",
    border: "1px solid black",
    marginLeft: "3px"
}
const indicator = {
    width: "10px",
    height: "10px",
    backgroundColor: turnOn? "green":"red",
    display: "inline-block",
    borderRadius: "100%",
    border: "1px solid black",
    marginLeft: "5px"

}
const turnon = () =>{
    setTurnOn(true)
    onChange(true)
}
const turnoff = () =>{
    setTurnOn(false)
    onChange(false)
}
    return (
        <div >
            <div style={on} onClick={turnon}>on</div>
            <div style={off} onClick={turnoff}>off</div>
            <div style={indicator}></div>
        </div>
    )
}



