import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import ProductCart from '../ProductCart'

function App() {
  const[product, setProduct]=useState([
    {
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "quantity":1,
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      "title": " Gold & Silver Chain Bracelet",
      "price": 695,
      "quantity":1,
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      "title": "White Gold Plated Princess",
      "price": 9.99,
      "quantity":1,
      "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      "title": "Hooded Leather Moto Biker Jacket",
      "price": 29.95,
      "quantity":1,
      "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    }
  ]
  )

  const[cart,setCart] = useState([])

  
  function cartNumber(){
    product.map((item)=>{
      let no = 0;
      return no+=item.quantity;

    })
  }

  const[total, setTotal] = useState(0);

  useEffect(()=>{
    let sum = 0;
    product.forEach((item, index)=>{
      sum += item.price * item.quantity;
    });
    setTotal(sum);
  },[product]);



  function increaseQuantity(index){
      let temp = [...product]
      temp[index].quantity += 1;
      setProduct(temp);
  }

  function decreaseQuantity(index){
    let temp = [...product]
    if(temp[index].quantity >1){
      temp[index].quantity -= 1;
      setProduct(temp);
    }else{
      removeItem(index);
    }
    
  }

  function removeItem(index){
    let temp = [...product];
    temp.splice(index,1);
    setProduct(temp);
  }

 
  return (
    <>
      <Header cartNumber={cartNumber} />

      {
        product.length > 0 ? (
          <>
          {
        product.map((item,index)=>{
          return <ProductCart img={item.image}
          key={index}
          price={item.price}
          title={item.title} 
          quantity={item.quantity}
          inc={increaseQuantity}
          dec={decreaseQuantity}
          ind={index}
          remove = {removeItem}
           />
        })
      }
      <div id="footer">
      <h3>Total price : {total}</h3>
      <button onClick={()=>setProduct([])}>Clear cart</button>
      </div>

      </>
        ):(<p>product is empty</p>)
      }

    </>
  )
}

export default App
