import React from 'react'
import '../style/head.css';
import { CiSearch } from "react-icons/ci";
import { useSearchContext } from '../context/SearchContext';
import Showsearch from '../component/Showsearch';

const Head = () => {
  const { searchRes,searchResult} = useSearchContext();
  console.log(searchRes);
  return (
    <div className='container-fluid hbg text-light text-center d-flex justify-content-center align-items-center'>
      <div className='headbox'>
        <h1 className='headingtxt'>FeastFinder</h1>
        <h2 className='headnortext'> Discover the best food and meals just in a blink</h2>
        <div className="searchbox">
            <div className='d-flex bg-light justify-content-around align-items-center' style={{'borderRadius' : "10px"}}>
                <CiSearch className='sicon text-secondary' />
                <input className="headsearch" type="search" onChange={(e)=>{searchResult(e.target.value)}} placeholder="Search for your favourite cuisine or food"/>
                
            </div>
            {searchRes.length ? <Showsearch/>  : ""}
        </div>
      </div>
    </div>
  )
}

export default Head
