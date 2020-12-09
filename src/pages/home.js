import React, {useState, useEffect} from 'react';
import {Searchbar} from '../components'

export default function Home (){
  const [searchterm, setSearchterm] = useState('')
  const handleChange = (e) => {
    const {value} = e.target
    setSearchterm(value)
}

  const handleSearch = () => {
    alert(searchterm);
    setSearchterm('')
  }

  return(
    <Searchbar>
      <Searchbar.Input value={searchterm} onChange={handleChange}/>
      <Searchbar.Submit onClick={handleSearch}>press me</Searchbar.Submit>
    </Searchbar>
  )
}