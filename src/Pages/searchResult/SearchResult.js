import React from 'react'
import Footer from '../../components/footer/Footer'
import GetitLabel from '../../components/getitLabel/GetitLabel'
import Home_button from '../../components/home_button/Home_button'
import SearchBar from '../../components/searchBar/SearchBar'
import Result from './components/result/Result'
import "./style.css"
function SearchResult() {
  return (
    <div className='searchresult_1'>
        <Home_button/>
      <div className='searchresult_4'>
        <GetitLabel/>
        <SearchBar/>
      </div>
      <div>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default SearchResult
