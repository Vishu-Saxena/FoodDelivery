
import {FaTrashAlt ,FaMinus , FaPlus} from 'react-icons/fa';

import { useCartContext } from "../context/CartContentext"
import "../style/cart.css"
import CartTotal from '../subcomponent/CartTotal';
import { Link } from 'react-router-dom';
import EmptyCart from '../subcomponent/EmptyCart';


const CartPage = () => {
    
  const {cart ,Increment , Decrement , total_amount , total_items ,removeFromCart ,clearCart} = useCartContext();
  
  return (
    <>
    <div className="container" style={{'minHeight' : "17rem"}}>
    {!cart.length ? <EmptyCart/> : <table className="table table-hover text-secondary mt-5 mb-1 fnt" >
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col" className='td-hide' style={{"textAlign" : "center"}}>Price</th>
            <th scope="col" style={{"textAlign" : "center"}}>Quantity</th>
            <th scope="col" style={{"textAlign" : "center"}}>Subtotal</th>
            <th scope="col" style={{"textAlign" : "right"}}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((ele)=>{ 
            return <tr key={ele.id}>
              <td> <div className="crtNme">
                  <div className='crtImg'> <img src={ele.img} alt="" />  </div>
                  <div className='cartclr'> 
                    <p> {ele.name} </p>

                    {/* <div className='clrbtn crtclrbtn' style={{'background' : ele.color}}>  </div> */}
                  </div>
                </div> </td>
              <td className='td-hide' style={{"textAlign" : "center"}}> Rs{ele.price} </td>


              <td className='td-hide text-body-secondary' style={{"textAlign" : "center"}}> <div className='d-flex justify-content-center'> <FaMinus className='text-secondary' onClick={()=>Decrement(ele.id)} /> <p className='mx-2'> {ele.qty} </p> <FaPlus className='text-secondary' onClick={()=>Increment(ele.id)} /></div> </td>


              <td style={{"textAlign" : "center" , "margin" : "auto"}}> Rs{ele.subtotal} </td>
              <td style={{"textAlign" : "right"}} className=' mt-3'> < FaTrashAlt style={{"color" : "red"}} onClick={()=>{removeFromCart(ele.id)}} /> </td>
            </tr>
          })}
        </tbody>
      
      </table> }
      {cart?.length ? <><div className='btnDiv'>
        <Link to={'/'}> <button type="button" className="btn text-light"  style={{"background" : "#20c997"}}>Continue Shopping</button></Link>

        <button type="button" className={`btn btn-danger ${cart?.length ? "" : 'disabled'}` }onClick={clearCart}>Clear Cart</button>

      </div></> : ""}
      
      {cart?.length ? <CartTotal/> :""}
      
      </div>
      <p> {total_amount } {total_items} </p>
    </>
  )
}

export default CartPage
