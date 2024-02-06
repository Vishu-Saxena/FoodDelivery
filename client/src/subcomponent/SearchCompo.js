import React from 'react'
import { Link } from 'react-router-dom'

const SearchCompo = ({name , ratings , img , id}) => {
  return (
    <div className='col-10 d-flex'>
        <Link to={'/'}>
        <div className="img"> <img src={img} alt="" /> </div>
        <div className="contnt">
            <p className="name"> {name} </p>
            <p className="ratings"> {ratings} </p>
        </div>
      </Link>
    </div>
  )
}

export default SearchCompo
