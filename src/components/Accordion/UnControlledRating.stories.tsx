import { ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import UnControlledRating from "./UnControlledRating";



export default {
    title: 'UnControlledRating',
component: UnControlledRating
};

const Template: ComponentStory <typeof UnControlledRating> = (args)=><UnControlledRating {...args}/>

export const EmptyRating = Template.bind({})
EmptyRating.args={
    defaultValue: 0
}
export const Rating1 = Template.bind({})
Rating1.args={
    defaultValue: 1
}

export const Rating2 = Template.bind({})
Rating2.args={
    defaultValue: 2
}

export const Rating3 = Template.bind({})
Rating3.args={
    defaultValue: 3
}

export const Rating4 = Template.bind({})
Rating4.args={
    defaultValue: 4
}

export const Rating5 = Template.bind({})
Rating5.args={
    defaultValue: 5
}


export const ModeChanging = ()=> {
    return <UnControlledRating/>
}
