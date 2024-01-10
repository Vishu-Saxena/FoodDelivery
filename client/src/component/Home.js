import React from 'react'
import Head from '../subcomponent/Head'
import FoodCard from '../subcomponent/FoodCard'
import { useFoodContext } from '../context/FoodData'
import Slider from '../subcomponent/Slider'
import HomeBody from '../subcomponent/HomeBody'

const Home = () => {
  const {allFood } = useFoodContext();
  return (
    <>
    <Head/>

    <HomeBody/>

    {/* <FoodCard/>
    {allFood? allFood.map((food)=> <FoodCard food={food}/> ) : ""} */}
    </>
  )
}

export default Home
