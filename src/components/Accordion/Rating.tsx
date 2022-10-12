
type RatingPropsType = {
  value:ValueType
  onClick:(value:ValueType)=>void
} 
export type ValueType = 0|1|2|3|4|5

function Rating(props: RatingPropsType) {
    console.log("Rating rendering");
  return (
    <div>
     <Star selected={props.value>0} onClick={props.onClick} value={1}/>
     <Star selected={props.value>1} onClick={props.onClick} value={2}/>
     <Star selected={props.value>2} onClick={props.onClick} value={3}/>
     <Star selected={props.value>3} onClick={props.onClick} value={4}/>
     <Star selected={props.value>4} onClick={props.onClick} value={5}/>
   </div>
   )
  }
  
  type StarPropsType={
    selected:boolean
    onClick:(value:ValueType)=>void
    value:ValueType
  }
  
    function Star(props:StarPropsType) {
    // if(props.selected === true){
    //   return <span><b>star</b> </span>
    // } else 
    //   return <span>star </span>
    return <span onClick={()=>props.onClick(props.value)}>{props.selected? <b> star</b>: ' star'}</span>
    }
export default Rating  