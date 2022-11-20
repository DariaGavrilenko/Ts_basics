import React from "react"
import { useState, KeyboardEvent, useEffect } from "react"

export type ItemType = {
    title: string
    value: any
  } 
  type SelectPropsType = {
    items:ItemType[]
    onChange:(value:any)=>void
    selectItem: any
  }  


export const Select = (props:SelectPropsType) =>{
   console.log('select rendering') 
const mainDiv = {
    width: "80px",
    height: "35px",
    backgroundColor: "white",
    // textAlign: "center",
    border: "1px solid black"
}
const choosenDiv = {
    width: "80px",
    height: "20px",
    backgroundColor: "gray",
    // textAlign: "center",
    border: "1px solid black"
}

const hoverDiv = {
    width: "80px",
    height: "20px",
    backgroundColor: "blue",
    // textAlign: "center",
    border: "1px solid black"
}



    const [collapsed, setCollapsed] = useState(true)
    const [hoverItem, setHoverItem] = useState(props.selectItem)


    useEffect(()=>{
        setHoverItem(props.selectItem)
    },[props.selectItem])

    
    const onKeyHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoverItem) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement)
                        props.onChange(pretendentElement.value)
                    break
                }
            }
        }
        if(e.key === "Enter" || e.key === "Escape"){
           setCollapsed(true)
        }
    }

    const itemsrendre = props.items.map((el,index)=>{
        const onClickhandler = () => {
            props.onChange(el.value)
            setCollapsed(true)
        } 
      
    return (<div key={index} style={hoverItem === el.value? hoverDiv : choosenDiv} onClick={onClickhandler} 
    onMouseEnter={()=>setHoverItem(el.value)}
    
    >{el.title}</div>)
})

    return (
        <div tabIndex={0} onKeyUp={onKeyHandler} >
            <div style={mainDiv} onClick={()=>setCollapsed(!collapsed)}>{props.items.find(el=>el.value === props.selectItem)?.title}</div>
           {!collapsed && itemsrendre}
        </div>
    )

}
