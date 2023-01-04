import React from 'react'
import {useState} from "react"

const ItemCount = (props) => {

    const [count, setCount]= useState(0)

    const addOne = ()=>{
        if(count < props.stock ){
        setCount(count+1)}
    }
    
    const disOne = ()=>{
        if(count > 0){
        setCount(count-1)}
    }

    const onAdd = ()=>{
        console.log(count)
    }


  return (
    <>
   
    <div>
        <button onClick={addOne}>+</button>
    </div>
        <p>{count}</p>
    <div>
        <button onClick={disOne}>-</button>
    </div><br></br>
    <div>
        <button onClick={onAdd}>Agregar al Carrito</button>
    </div>

    <p>{props.stock}</p>
    </>
  )
}

export default ItemCount