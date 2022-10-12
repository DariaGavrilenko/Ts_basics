import { useState } from "react";

type RatingPropsType = {
    
  } 
  
function UnControlledRating(props: RatingPropsType) {
    console.log("Rating rendering");
    const [value,setValue]=useState(0)
    const callBackStar = (n:number)=>{
    setValue(n)
    }
    return (
        <div>
            <Star selected={value > 0} callBackStar={()=>callBackStar(1)}/> 
            <Star selected={value > 1} callBackStar={()=>callBackStar(2)}/>
            <Star selected={value > 2} callBackStar={()=>callBackStar(3)} /> 
            <Star selected={value > 3} callBackStar={()=>callBackStar(4)}/> 
            <Star selected={value > 4} callBackStar={()=>callBackStar(5)}/> 
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

