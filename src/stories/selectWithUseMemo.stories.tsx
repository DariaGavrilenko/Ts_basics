
import React, { useCallback, useMemo } from "react";
import { useState } from "react";
import { Select } from "../components/Select/Select";




export default {
  title: 'SelectWithUseMemo',
  component: Select
};

const Counter = (props: { count: number }) => {
  return <div>{props.count}</div>
}

export const SelectM = React.memo(Select)

export const SelectMode = () => {
  const [count, setCount] = useState(0)
  const [selectItem, setSelectItem] = useState(0)

const [data,setData] = useState([
  { title: 'Dada', value: 1, gender: "girl", age: 26 },
  { title: 'Masha', value: 2, gender: "girl", age: 20 },
  { title: 'Lana', value: 3, gender: "girl", age: 30 },
  { title: 'Sasha', value: 4, gender: "boy", age: 23 },
  { title: 'Ivan', value: 5, gender: "boy", age: 40 },
  { title: 'Fedor', value: 6, gender: "boy", age: 20 },
])


const onChange = useCallback((value: any) => {
  setSelectItem(value)
}, [data])


  let boys = useMemo(()=>data.filter(d => d.gender === 'boy'),[data]) 
  //let boys = data.filter(d => d.gender === 'boy')
  //let over25 = data.filter(d => d.age >= 25)
  let over25 = useMemo(()=>data.filter(d => d.age >= 25),[data])



  return <>
    <button onClick={() => setCount(count + 1)}>+</button>
    <Counter count={count} />
    <SelectM items={data} onChange={onChange} selectItem={selectItem} />
    <SelectM items={boys} onChange={onChange} selectItem={selectItem}/>
  <SelectM items={over25} onChange={onChange} selectItem={selectItem}/>
  </>
}