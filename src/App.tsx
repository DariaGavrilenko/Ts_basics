import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Accordion/Rating';
import UnControlledAccordion from './components/Accordion/UnControlledAccordion';
import UnControlledRating from './components/Accordion/UnControlledRating';
import UncontrolledOnOff from './components/OnOff/UncontrolledOnOff';
import OnOff from './components/OnOff/OnOff';

function App() {
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  const [turnOn, setTurnOn] = useState(false)
  const [turnOnU, setTurnOnU] = useState(false)
  // const changeTurnOn = (value:boolean) => setTurnOn(value) 
  const changeAccordionCollapsed = () => setAccordionCollapsed(!accordionCollapsed)
  console.log("App rendering");
  return (
    <div className={"App"}>
      <h1>Accordion controled</h1>
      <hr/>
      <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} changeAccordionCollapsed={changeAccordionCollapsed}/>
      <Accordion titleValue={"User"} collapsed={accordionCollapsed} changeAccordionCollapsed={changeAccordionCollapsed}/>
      <h1>Accordion uncontroled</h1>
      <hr/>
      <UnControlledAccordion titleValue={"Menu"}  />
      <UnControlledAccordion titleValue={"User"}  />
      <h1>Rating controled</h1>
      <hr/>
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <h1>Rating uncontroled</h1>
      <hr/>
      <UnControlledRating />
      <h1>On/Off uncontroled</h1>
      <hr/>
      <UncontrolledOnOff onChange={setTurnOnU}/>
      {turnOnU.toString()}
      <h1>On/Off controled</h1>
      <hr/>
      <OnOff turnOn={turnOn} changeTurnOn={setTurnOn}/>
    </div>
  );
}


export default App;

