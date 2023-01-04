import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainers = (props) => {
  return (
    <>
    <div class="p-3 mb-2 bg-secondary text-white">Sitio de Compras </div>

    <p class="text-white bg-dark">{props.mensaje}</p>

    <ItemCount stock={9}/>

   </> 
  )
}

export default ItemListContainers