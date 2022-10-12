import { ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import UnControlledAccordion from "./UnControlledAccordion";




export default {
title: 'UnControlledAccordion',
component: UnControlledAccordion
};

const Template: ComponentStory <typeof UnControlledAccordion> = (args)=> <UnControlledAccordion {...args}/>
export const ModeChanging = Template.bind({})
ModeChanging.args = {
    titleValue: 'User'
}

