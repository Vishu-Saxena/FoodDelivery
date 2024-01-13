import React from 'react'
import { useParams } from 'react-router-dom'

const DetailedFood = () => {
    const {id} = useParams();
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-5 dimgbx border"> <div> <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /> </div> </div>
            <div className="col-md-7 dbx" > 
                <h2> Name of dish </h2>
                <div className='d-flex'><h5>type : Thali</h5>
                <h5>Restaurent : Maharaja's Kitchen</h5></div>
                
             </div>
        </div>
      <h1> {id} </h1>
    </div>
  )
}

export default DetailedFood
