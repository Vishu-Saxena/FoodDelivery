import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../style/detail.css'
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

const DetailedFood = () => {
    const {id} = useParams();
    const [fooditm , setItm] = useState({});
    console.log(fooditm);

    // function to fetch the seleted food itm's complete details details 
    const details = async()=>{
      try {
        if(id){
          const res = await axios.get(`http://localhost:8080/api/food/getsingleFood/${id}`);
          console.log(res);
          if(res?.data?.success){
            setItm(res.data.foodData[0]);
          }
        }
      } catch (error) {
        console.log(error);
        window.alert("something went wront please try again latter")
      }
    }

    useEffect(()=>{
      details();
    },[])
  return (
    <div className='container'>
      {fooditm ? <div className="row mt-5">
            <div className="col-md-5 dimg"> <img src={fooditm.img} alt="" /> </div>
            <div className="col-md-7 border">
              <h2 className='text-center' style={{'textDecoration' : "underline red 4px"}}> {fooditm.restaurentName} </h2>
              <p className='text-center dtxt text-secondary mt-2'>  {fooditm.name} {<FaArrowRight />} {fooditm.CategoryName} {<FaArrowRight/>} Ratings <span class="badge bg-danger">{fooditm.ratings} <MdOutlineStar className='mb-1'/> </span></p>

              <p className='text-secondary'> <span style={{'textDecoration' : "underline red 2px" , 'color' : "black" , 'fontWeight' : "bold"}}>Description </span> : {fooditm.description} </p>

              <div className="row">
                <div className="dprice"></div>
                <div className="dqntity"></div>
              </div>

            </div>
        </div> : ""}
        
      
    </div>
  )
}

export default DetailedFood
