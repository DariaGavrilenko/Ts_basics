import { title } from "process";
import { isPropertySignature } from "typescript";

type AccordionPropsType = {
  titleValue:string
  collapsed:boolean
  changeAccordionCollapsed:()=>void
}

function Accordion(props:AccordionPropsType){
    console.log("Accordion rendering");
    return(
    <div>
    <AccordionTitle title={props.titleValue} changeAccordionCollapsed={props.changeAccordionCollapsed}/>
    {!props.collapsed && <AccordionBody/>}
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
  
  
  function AccordionBody(){
    console.log("AccordionBody rendering");
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    )
  }
  export default Accordion;