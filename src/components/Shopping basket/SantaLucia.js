import React, {useState} from 'react'

function ShoppingBasket(){
    //const [basket, setBasket] = useState({});
    const basket = [
        {product:'Tomatoes'},
        {product:'Milk'},
        {product:'Chocolate'},
        {product:'Cake'},
        {product:'Laptop'},
    ]
    
    return(
       <div>
        <h1 className='sbat'>SHOPPING BASKET</h1>
        <button className='btn'>ADD PRODUCTS</button>
        <button className='btn'>REMOVE PRODUCTS</button>
       </div>
    )
}
export default ShoppingBasket();