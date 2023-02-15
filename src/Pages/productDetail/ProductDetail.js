import React from 'react'
import Home_button from '../../components/home_button/Home_button'
import Review from './components/review/Review'
import './style.css'
function ProductDetail() {
  return (
    <div className='productdetail_1'>
      <div>
        <Home_button/>
      </div>
      <div className='productdetail_2'>
          <img src='https://tse2.mm.bing.net/th?id=OIP.eryfIfSPJqGh2tEHC5Aw2AHaHD&pid=Api&P=0' className='image_6'/>
          <div className='productdetail_3'>
            <p className='heading'>heading</p>
            Description
            <p className='description'> title='Why should i use getit ?' description='What is Lorem Ipsum? Simply put, loremipsum is dummy text that occupies the space where the real content should be. 
      If you are designing an online business such as a blog and you do not have content already, you use a lorem ipsum generator to create placeholder or dummy text to show you how the business will look once you add the real content.
        my name is amal and i am very happy to build this for your name and born on this age.'</p>
            <div className='productdetail_4'>
              <div className='productdetail_5'>
                <p>Price Rs.500</p>
                <p>Rating 4.5</p>
              </div>
              <div className='productdetail_6'>
                <button>Call</button>
                <button>Chat</button>
                <button>Page</button>
              </div>

            </div>
          </div>
      </div>
      <div className='line'></div>
      <div className='profile'>
        <img src='https://tse3.mm.bing.net/th?id=OIP.03LplpR-igom9O6antPLiAHaEK&pid=Api&P=0' className='image_7'/>
        <div className='text_dp'>
          <div>
          <b>Tecktrio</b>
          </div>
          <div>
          <p style={{'color':'white','fontSize':'10px'}}>I love programming</p>
          </div>
        </div>
       
      </div>
      
      <div className='review'>
        <p>Review</p>
        <div className='review_content'>
            <Review/>
        </div>
      </div>
      <div>
        <input type="text" className='send_review_input' placeholder='say something about your experience ? '/>
      </div>
      <div className='lets_go'>
        <p>Want to have a ride to your preffered destination</p>
      </div>
    </div>
  )
}

export default ProductDetail
