import { ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import OnOff from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff
};

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />
export const OnMode = Template.bind({})
OnMode.args = {
    turnOn: true
}
export const OffMode = Template.bind({})
OnMode.args = {
    turnOn: false
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff turnOn={value} changeTurnOn={setValue} />;
}
