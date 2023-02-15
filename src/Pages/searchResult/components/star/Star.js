import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

function Star(props) {
    let blow = props.count
    let dark = 5-blow
    let star = []
    for(let i=0;i<5;i++){
        if(i <blow)star.push(true)
        else star.push(false)
    }
  return (
    <div>
    {star.map((blow)=>{
        return (
            blow?<AiFillStar/>:<AiOutlineStar/>
        )
    })}

    </div>
  )
}

export default Star
