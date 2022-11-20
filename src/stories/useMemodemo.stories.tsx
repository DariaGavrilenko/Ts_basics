import React, { useMemo } from "react"
import { useState } from "react"

export default {
    title: 'useMemo demo'
};

const Counter =(props:{count:number})=>{
    return <div>{props.count}</div>
}

const Users =(props:{users:Array<string>})=>{
    console.log('users')
    return <div>{props.users.map((u,i)=><div key={i}>{u}</div>)}</div>
}


 
const UsersM = React.memo(Users)
export const Exsample = () => {
    const[count,setCount] = useState(0)
    const[users,setUsers] = useState(['Dada', 'Sasha', 'Sonya'])

    let newArray = useMemo(()=>users.filter(u=>u.toLowerCase().includes('s')),[users])
    return (
        <>
        <button onClick={()=>setCount(count + 1 )}>+</button>
            <Counter count={count} />
            <UsersM users={newArray}/>
        </>
    )

}