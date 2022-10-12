import { useState } from "react";

type AccordionPropsType = {
    titleValue:string
  }
  
function UnControlledAccordion(props: AccordionPropsType) {
  const [collapsed, setCollapsed] = useState(false)

  const callBackAccordion = () => {
    setCollapsed(!collapsed)
  }
  console.log("Accordion rendering");
  return (
    <div>
      <AccordionTitle title={props.titleValue} callBackAccordion={callBackAccordion} />
      {!collapsed && <AccordionBody />}
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