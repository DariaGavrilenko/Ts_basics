import { useState } from "react";
export type ValueType = 0|1|2|3|4|5
type RatingPropsType = {
    defaultValue?: ValueType
  } 
  
function UnControlledRating(props: RatingPropsType) {
    console.log("Rating rendering");
    const [value,setValue]=useState<ValueType>(props.defaultValue? props.defaultValue : 0)
    return (
        <div>
            <Star selected={value > 0} callBackStar={()=>setValue(1)}/> 
            <Star selected={value > 1} callBackStar={()=>setValue(2)}/>
            <Star selected={value > 2} callBackStar={()=>setValue(3)} /> 
            <Star selected={value > 3} callBackStar={()=>setValue(4)}/> 
            <Star selected={value > 4} callBackStar={()=>setValue(5)}/> 
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    callBackStar:()=>void
}

function Star(props: StarPropsType) {
    console.log("Star rendering");
    return <span onClick={props.callBackStar}>{props.selected? <b>star</b>:'star'} </span>
   
}
export default UnControlledRating  

