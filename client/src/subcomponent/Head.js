import React from 'react'
import '../style/head.css';
import { CiSearch } from "react-icons/ci";

const Head = () => {
  return (
    <div className='container-fluid hbg text-light text-center d-flex justify-content-center align-items-center'>
      <div className='headbox'>
        <h1 className='headingtxt'>Zomato</h1>
        <h2 className='headnortext'> Discover the best food and meals just in a blink</h2>
        <div className="searchbox">
            <div className='d-flex bg-light justify-content-around align-items-center' style={{'borderRadius' : "10px"}}>
                <CiSearch className='sicon text-secondary' />
                <input className="headsearch" type="search" placeholder="Search for your favourite cuisine or food"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Head
