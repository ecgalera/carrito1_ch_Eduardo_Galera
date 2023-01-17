import React from 'react'
import Item from '../item/Item'
import { useState, useEffect } from 'react'
import "./ItemList.css"
import { Container } from 'react-bootstrap'


const ItemList = (props) => {

  const [product, setProduct] = useState([])
 


  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json.map(product => <Item key={product.id} id={"product" + product.id} data={product} />)))
  }, [])


  return (

    <div className='button'>

    <div>
      <button>Electronics</button>
      <button>Women's Clothing</button>
      <button>Jewelery</button>
      <button>Men's Clothing</button>
    </div>

    <Container className='itemlist'>
      <div className='row'>
        <div className='producto'>
          <div className="card-group mt-3">
            {product}
          </div>
        </div>
      </div>
    </Container>
    </div>

  )
}

export default ItemList