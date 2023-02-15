import React from 'react'
import './style.css'
import Star from '../star/Star'
function Result() {
  return (
    <div className='result_1'>
      <img src='https://tse4.mm.bing.net/th?id=OIP.k4JMO5bD97BK3hxEHefrmAHaFP&pid=Api&P=0' className='image'/>
      <div className='text'>

          <div className='title'>
          sandwitch
          </div>
          <div className='description'>
          Hash Table Hashing (Hash Function). In a hash table, a new index is processed using the keys. And, the element corresponding to... Hash Collision. When the hash function generates the same index
          </div>
          <div className='price'>
          price Rs.400
          </div>
          <div className='rating_star'>
            <p style={{'marginRight':'10px'}}>Rating 4.5</p><Star count = {3}/> 
          </div>
      </div>
      
    </div>
  )
}

export default Result
