import { ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { isTemplateSpan } from "typescript";
import { ItemType, Select } from "./Select";




export default {
    title: 'Select',
    component: Select
};



const Template: ComponentStory<typeof Select> = (args) => <Select{...args} />
export const CollapsedAccordion = Template.bind({})
CollapsedAccordion.args ={
    items: [{title:'Cat', value:1},{title:'Dog', value:2},{title:'Mouse', value:3} ],
    onChange:(value:any)=>{},

}

// const onChanges = (value:any)=>{
// const needItem = items.filter(el=>el.value == value)
// return needItem[0].value
// } 
export const SelectMode = () => {
  const [selectItem,setSelectItem] = useState(0)
  const onChange = (value:any)=> {
    setSelectItem(value)
  }
  return <Select items={[{title:'Cat', value:1},{title:'Dog', value:2},{title:'Mouse', value:3} ]} onChange={onChange} selectItem={selectItem}/>
}