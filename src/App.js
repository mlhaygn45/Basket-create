import './index.css';
import Product from './componets/Product';
import productl from './productl.json';
import Basket from './componets/Basket';
import { useEffect, useState } from 'react';



function App(){
  const[basket,setBasket]=useState([])
  const [cost,setCost] = useState();

  useEffect(()=>{
    const totalPrice = basket.reduce((pre,basket) => pre +(basket.amount*basket.price),0);
    setCost(totalPrice);

  },[basket])
  
  return(
         
         

         <div className='productContainer'>
        <div className='productBoxs'>
        { productl.map(product =>( 
            <Product key={product.id} basket={basket} setBasket={setBasket} product={product} />
            
          ) )}
       
        </div>
        <Basket basket={basket} cost={cost}  />
         </div>
         

  )


}

export default App
