import React from 'react'
import Options from './components/options/Options'
import './style.css'
function Home() {
  return (
  <div className='home_1'>
    <div className='home_2'>    
      <div className='title'>
        <img src='https://tse1.mm.bing.net/th?id=OIP.tC10_Fzb-ZeOTlV8ATopGgHaHa&pid=Api&P=0' className='image' alt='image'/>courses
      </div>
      <div >
        <input type="text" className='search'/>
      </div>
    </div>
    <div className='body'>
      <div className='options'>
        <Options/>
        <Options/>
        <Options/>
        <Options/>
        <Options/>
      </div>
      <div className='courses'>
        <p style={{'margin':'10px'}}>hello buddy, are you tired of studying <splan style={{'color':'red'}}> here is a way to take rest</splan></p>
        <div  className='content'>
          <img src='https://tse1.mm.bing.net/th?id=OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC&pid=Api&P=0' className='image_2'/>
          <div className='content_2'>
              <h2>heading</h2>
              <p>
Le Boutique Hotel & SpaOpens in new window
Bordeaux City-Centre, BordeauxShow on map0.6 km from centre
Travel Sustainable property
Located at the heart of Bordeaux’s historic centre, Le Boutique Hotel is an 18th-century town house surrounding a lush, green courtyard.</p>
<button className='continue'>Continue The Course</button>
            </div>
          </div>
          <div className='progress'>
            <div className='left'>
              <p>Subjects</p>
              <ol>
                <li>chapter 1</li>
                <li>chapter 2</li>
                <li>chapter 3</li>
                <li>chapter 4</li>
                <li>chapter 5</li>
              </ol>
              <img src='https://tse1.mm.bing.net/th?id=OIP.MmAQwTP8CcKQdIosCeiZUgHaEK&pid=Api&P=0' className='image_3'/>
              </div>
              <div className='right'>
                progress
                <p>you have completed <span style={{'color':'blue','fontSize':'25px','fontWeight':'bold'}}>50%</span></p>
              <img src='https://tse3.mm.bing.net/th?id=OIP.IS3i31wUnCMCaph2YHq8JAHaFj&pid=Api&P=0' className='image_4'/>
              </div>
            </div>
      </div>
    </div>
  </div> 
  )}
export default Home