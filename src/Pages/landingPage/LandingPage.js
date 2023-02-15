import React from 'react'
import Dashbord from './components/dashBoard/Dashbord'
import GetitLabel from '../../components/getitLabel/GetitLabel'
import HowtoUse from './components/HowToUse/HowtoUse'
import JoinNow from './components/joinNow/JoinNow'
import SearchBar from '../../components/searchBar/SearchBar'
import './style.css'
import Footer from '../../components/footer/Footer'
function LandingPage() {
  return (
    <div className='container_1'>
      <div className='container_2'>
        <div className='container_3'>
            <Dashbord/>
        </div>
      </div>
      <div className='container_4'>
          <GetitLabel/>
      </div>      
      <div className='container_5'>
          <SearchBar/>
      </div>  
      <div className='container_6'>
          <HowtoUse title='Why should i use getit ?' description='What is Lorem Ipsum? Simply put, loremipsum is dummy text that occupies the space where the real content should be. 
      If you are designing an online business such as a blog .'/>
          <HowtoUse  title='how it work ?' description='What is Lorem Ipsum? Simply put, loremipsum is dummy text that occupies the space where the real content should be. 
      If you are designing an online business.'/>
          <HowtoUse  title='couldnt find your need ?' description='What is Lorem Ipsum? Simply put, loremipsum is dummy text that occupies the space where the real content should be. 
      If you are designing.'/>
      </div>  
      <div className='container_7'>
          <JoinNow/>
          <JoinNow/>
          <JoinNow/>
          <JoinNow/>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPage
