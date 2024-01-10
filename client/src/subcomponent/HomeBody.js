import React from 'react'
import { useFoodContext } from '../context/FoodData'
import FoodCard from './FoodCard';

const HomeBody = () => {
    const {Hrated , Hdemand , Party} = useFoodContext();
    console.log(Party);
  return (
    <div className='container border'>
      <div className="row border justify-content-around mt-3">
        <h2> <span className='text-danger'> Highest </span> Rating</h2>
        {Hrated ? Hrated.slice(0,8).map((food)=> <FoodCard food = {food}/>) :""}
      </div>
      <div className="row border justify-content-around mt-3">
        <h2> <span className='text-danger'> High o</span>n demand</h2>
        {Hdemand ? Hdemand.slice(0,8).map((food)=> <FoodCard food = {food}/>) :""}
      </div>
      <div className="row border justify-content-around mt-3">
        <h2><span className='text-danger'> Wanna Party?</span> We got you</h2>
        {Party ? Party.slice(0,4).map((food)=> <FoodCard food = {food}/>) :""}
      </div>
    </div>
  )
}

export default HomeBody
