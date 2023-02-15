import React from 'react'
import './style.css'
function Review() {
    let reviews = [1,2]
  return (
    <div >
        {
        reviews.map((review)=>{
            return (
                <div className='one_review'>
                <img src='https://tse1.mm.bing.net/th?id=OIP.4w_XC3C-Vela3Ex6LtQsqwHaE6&pid=Api&P=0' className='image'/>
                <div className='review_1'>What is Lorem Ipsum? Simply put, loremipsum is dummy text that occupies the space where the real content should be. If you are designing an online business such as a blog and you do not have content already, you use a lorem ipsum generator to create placeholder or dummy text to show you how the business will look once you add the real content.</div> 
                </div>
            )
            })
            }
        
    </div>
  )
}

export default Review
