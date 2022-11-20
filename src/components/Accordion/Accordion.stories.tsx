import { ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import Accordion from "./Accordion";



export default {
    title: 'Accordion',
    component: Accordion
};



const Template: ComponentStory<typeof Accordion> = (args) => <Accordion{...args} />
export const CollapsedAccordion = Template.bind({})
CollapsedAccordion.args ={
    titleValue:'Menu',
    collapsed: true,
    items: [{title:'Cat', value:1},{title:'Dog', value:2},{title:'Mouse', value:3} ],
    chooseItem:(value)=>alert(`Item ${value} was clicked`)
}
export const UncollapsedAccordion = Template.bind({})
UncollapsedAccordion.args ={
    titleValue: 'User',
    collapsed: false,
    items: [{title:'Cat', value:1},{title:'Dog', value:2},{title:'Mouse', value:3} ],
    chooseItem:(value)=>alert(`Item ${value} was clicked`)
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue="User" collapsed={value} items={[{title:'Cat', value:1},{title:'Dog', value:2},{title:'Mouse', value:3} ]} changeAccordionCollapsed={() => setValue(!value)} chooseItem={(value)=>alert(`Item ${value} was clicked`)} />
}

