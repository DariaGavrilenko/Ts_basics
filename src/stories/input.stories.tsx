import { ComponentStory } from "@storybook/react";
import React, { ChangeEvent,MouseEvent, useRef, useState } from "react";


export default {
    title: 'input',
  
};


export const UnControlledInput = () => <input/>
export const TrakingValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const fixValue = (e:ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return(
        <div><input onChange={fixValue}/>{value}</div>

    )
}
export const GetValueOfUncontrolledInputByPressOnButton = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const saveValue = (e:MouseEvent<HTMLButtonElement>) => {
        const el = inputRef.current?.value 
        if(el){
            setValue(el)
        }
    }
    return(
        <div><input ref={inputRef} /><button onClick={saveValue}>save</button>{value}</div>

    )
}
export const СontrolledInput = () => {
    const [value, setValue] = useState('')
    const fixValue = (e:ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return(
        <div><input value={value} onChange={fixValue}/></div>

    )
}

export const ControlledCheckBox = () => {
    const [value, setValue] = useState<boolean>(true)
    const fixValue = (e:ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.checked)
    return(
        <div><input type='checkbox' checked={value} onChange={fixValue}/></div>

    )
} 
export const ControlledSelect = () => {
    const [value, setValue] = useState<string|undefined>("1")
    const fixValue = (e:ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value)
    return(
        <select value={value} onChange={fixValue}>
            <option > none</option>
            <option value="1">purr</option>
            <option value="2">meow</option>
            <option value="3">wow</option>
        </select>

    )
}


// const Template: ComponentStory = (args) => <input {...args} />
// export const OnMode = Template.bind({})
// OnMode.args = {
//     turnOn: true
// }
// export const OffMode = Template.bind({})
// OnMode.args = {
//     turnOn: false
// }

// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(false)
//     return <OnOff turnOn={value} changeTurnOn={setValue} />;
// }
