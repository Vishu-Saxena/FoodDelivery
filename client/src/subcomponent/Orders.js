import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';

import EmptyCart from './EmptyCart';
import { useOrderHistory } from '../context/OdrHistContext';

const Orders = () => {
 
  const {orderHist , deleteOrder} = useOrderHistory();

  return (
   
    <div className="container mb-4" style={{'minHeight' : "19rem"}}>
   
    {!orderHist.length ? <EmptyCart page={"orders"}/> : <table className="table table-hover text-secondary mt-5 mb-1 fnt" >
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col" className='td-hide' style={{"textAlign" : "center"}}>Price</th>
            <th scope="col" style={{"textAlign" : "center"}}>Quantity</th>
            <th scope="col" style={{"textAlign" : "center"}}>Subtotal</th>
            <th scope="col" style={{"textAlign" : "center"}}>Status</th>
            <th scope="col" style={{"textAlign" : "right"}}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {orderHist.map((ele)=>{ 
            return <tr key={ele._id}>
              <td> <div className="crtNme">
                  <div className='crtImg'> <img src={ele.img} alt="" />  </div>
                  <div className='cartclr'> 
                    <p> {ele.name} </p>

                    {/* <div className='clrbtn crtclrbtn' style={{'background' : ele.color}}>  </div> */}
                  </div>
                </div> </td>
              <td className='td-hide' style={{"textAlign" : "center" , 'lineHeight' : "40px"}}> Rs{ele.price} </td>


              <td className='td-hide text-body-secondary' style={{"textAlign" : "center" , 'lineHeight' : "40px"}}> <div className='d-flex justify-content-center'> <p className='mx-2'> {ele.quantity} </p></div> </td>


              <td style={{"textAlign" : "center" , "margin" : "auto" , 'lineHeight' : "40px"}}> Rs{ele.subtotal} </td>
              <td style={{"textAlign" : "center" , "margin" : "auto" , 'lineHeight' : "40px"}}> Dilevered </td>
              <td style={{"textAlign" : "right", 'lineHeight' : "40px"}} className=' mt-3'> < FaTrashAlt style={{"color" : "red"}} onClick={()=>deleteOrder(ele._id)}  /> </td>
            </tr>
          })}
        </tbody>
      
      </table> }
      </div>
 
  )
}

export default Orders
