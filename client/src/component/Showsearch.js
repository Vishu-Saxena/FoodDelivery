import React from 'react'
import { useSearchContext } from '../context/SearchContext'

const Showsearch = () => {
    const {searchRes}= useSearchContext()
  return (
    <div className='row'>
      {searchRes.length ? searchRes.map((ele)=> <Showsearch name ={ele.name}  ratings={ele.ratings} img={ele.img} id = {ele._id} /> ) : ""}
    </div>
  )
}

export default Showsearch
