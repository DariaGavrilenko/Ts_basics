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
}
export const UncollapsedAccordion = Template.bind({})
UncollapsedAccordion.args ={
    titleValue: 'User',
    collapsed: false
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue="User" collapsed={value} changeAccordionCollapsed={() => setValue(!value)} />
}

