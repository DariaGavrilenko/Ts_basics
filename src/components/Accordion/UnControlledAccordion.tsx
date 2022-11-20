import { useReducer, useState } from "react";
import { reducer, TOOGLE_COLLAPSED } from "./reducer";

export type AccordionPropsType = {
    titleValue:string
  }
    

function UnControlledAccordion(props: AccordionPropsType) {




  const [state, dispatch] = useReducer(reducer,{collapsed:false})
  //const [collapsed, setCollapsed] = useState(false)


  const callBackAccordion = () => {
   dispatch({type:TOOGLE_COLLAPSED})
  }

  console.log("Accordion rendering");
  return (
    <div>
      <AccordionTitle title={props.titleValue} callBackAccordion={callBackAccordion} />
      {!state.collapsed && <AccordionBody />}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  callBackAccordion: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return <h3 onClick={props.callBackAccordion}>{props.title}</h3>
}


function AccordionBody() {
  console.log("AccordionBody rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
export default UnControlledAccordion;