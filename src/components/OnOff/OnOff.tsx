import { useState } from 'react'
type OnOffPropsType = {
    turnOn:boolean
    changeTurnOn: (value:boolean)=>void
}


function OnOff(props:OnOffPropsType){
  
const on = {
    width: "40px",
    height: "20px",
    backgroundColor: props.turnOn ? "green": "grey",
    display: "inline-block",
    border: "1px solid black"
}
const off ={
    width: "40px",
    height: "20px",
    backgroundColor: !props.turnOn?  "red": "grey",
    display: "inline-block",
    border: "1px solid black",
    marginLeft: "3px"
}
const indicator = {
    width: "10px",
    height: "10px",
    backgroundColor: props.turnOn? "green":"red",
    display: "inline-block",
    borderRadius: "100%",
    border: "1px solid black",
    marginLeft: "5px"

}

    return (
        <div >
            <div style={on} onClick={()=>{props.changeTurnOn(true)}}>on</div>
            <div style={off} onClick={()=>{props.changeTurnOn(false)}}>off</div>
            <div style={indicator}></div>
        </div>
    )
}



export default OnOff