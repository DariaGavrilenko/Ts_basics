import { ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import Rating, { ValueType } from "./Rating";


export default {
    title: 'Rating',
component: Rating
};
  
const Template: ComponentStory<typeof Rating> = (args)=><Rating {...args}/>

export const EmptyRating = Template.bind({})
EmptyRating.args={
    value: 0
}
export const Rating1 = Template.bind({})
Rating1.args={
    value: 1
}

export const Rating2 = Template.bind({})
Rating2.args={
    value: 2
}

export const Rating3 = Template.bind({})
Rating3.args={
    value: 3
}

export const Rating4 = Template.bind({})
Rating4.args={
    value: 4
}

export const Rating5 = Template.bind({})
Rating5.args={
    value: 5
}

export const ModeChanging = ()=> {
const [value,setValue]= useState<ValueType>(0)
    return <Rating value={value} onClick={setValue}/>
}
