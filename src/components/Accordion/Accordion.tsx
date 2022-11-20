import { title } from "process";
import React from "react";
import { isPropertySignature } from "typescript";

export type ItemType = {
  title: string
  value: any
} 

type AccordionPropsType = {
  titleValue:string
  collapsed:boolean
  changeAccordionCollapsed:()=>void
  items:ItemType[]
  chooseItem:(value:any)=>void
}
export const AccordionM = React.memo(Accordion)

function Accordion(props:AccordionPropsType){
    console.log("Accordion rendering");
    return(
    <div>
    <AccordionTitleM title={props.titleValue} changeAccordionCollapsed={props.changeAccordionCollapsed}/>
    {!props.collapsed && <AccordionBodyM items={props.items} chooseItem={props.chooseItem}/>}
    </div>
    )
  }
  
  type AccordionTitlePropsType = {
    title:string
    changeAccordionCollapsed:()=>void
  }
  
  function AccordionTitle(props:AccordionTitlePropsType){
    console.log("AccordionTitle rendering");
    return <h3 onClick={props.changeAccordionCollapsed}>{props.title}</h3>
  }
  
  const AccordionTitleM = React.memo(AccordionTitle)
  
  export type AccordionBodyPropsType = {
    items:ItemType[]
    chooseItem:(value:any)=>void
  } 
  const AccordionBodyM = React.memo(AccordionBody)

  function AccordionBody(props:AccordionBodyPropsType){
    console.log("AccordionBody rendering");
    return (
      <ul>
      {props.items.map((el,index)=><li key={index} onClick={()=>props.chooseItem(el.value)}>{el.title}</li>) }
      </ul>
    )
  }
  export default Accordion;