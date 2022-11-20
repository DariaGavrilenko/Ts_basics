import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion, { AccordionM } from './components/Accordion/Accordion';
import Rating, { ValueType } from './components/Accordion/Rating';
import UnControlledAccordion from './components/Accordion/UnControlledAccordion';
import UnControlledRating from './components/Accordion/UnControlledRating';
import { UncontrolledOnOff } from './components/OnOff/UncontrolledOnOff';
import OnOff from './components/OnOff/OnOff';

function App() {
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  const [turnOn, setTurnOn] = useState(false)
  const [turnOnU, setTurnOnU] = useState(false)
  const [ratingValue, setRatingValue] = useState<ValueType>(0)
  //const chooseItem = (value: any) => alert(`Item ${value} was clicked`)
  // const changeTurnOn = (value:boolean) => setTurnOn(value) 
  // const changeAccordionCollapsed = () => setAccordionCollapsed(!accordionCollapsed)
  console.log("App rendering");
  const changeAccordionCollapsed = useCallback(() => setAccordionCollapsed(!accordionCollapsed), [])
  const chooseItem = useCallback((value: any) => alert(`Item ${value} was clicked`), [])

  // const AccordionM = React.memo(Accordion)
  const UnControlledAccordionM = React.memo(UnControlledAccordion)
  const RatingM = React.memo(Rating)
  const UnControlledRatingM = React.memo(UnControlledRating)
  const UncontrolledOnOffM = React.memo(UncontrolledOnOff)
  const OnOffM = React.memo(OnOff)


  return (
    <div className={"App"}>
      <h1>Accordion controled</h1>
      <hr/>
      <AccordionM titleValue={"Menu"} collapsed={accordionCollapsed} changeAccordionCollapsed={changeAccordionCollapsed} items={[]} chooseItem={chooseItem}/>
      <AccordionM titleValue={"User"} collapsed={accordionCollapsed} changeAccordionCollapsed={changeAccordionCollapsed} items={[{title:'Cat', value:1},{title:'Dog', value:2},{title:'Mouse', value:3} ]} chooseItem={chooseItem} />
      <h1>Accordion uncontroled</h1>
      <hr/>
      <UnControlledAccordionM titleValue={"Menu"}  />
      <UnControlledAccordionM titleValue={"User"}  />
      <h1>Rating controled</h1>
      <hr/>
      <RatingM value={ratingValue} onClick={setRatingValue} />
    
      <h1>Rating uncontroled</h1>
      <hr/>
      <UnControlledRatingM />
      <h1>On/Off uncontroled</h1>
      <hr/>
      <UncontrolledOnOffM onChange={setTurnOnU}/>
      {turnOnU.toString()}
      <h1>On/Off controled</h1>
      <hr/>
      <OnOffM turnOn={turnOn} changeTurnOn={setTurnOn}/>
    </div>
  );
}


export default App;

