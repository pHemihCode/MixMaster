import React from 'react'
import { useState, useEffect } from 'react'
import Input from '../components/Input'
import Body from '../components/Body'
import Loading from './Loading'

function Home() {
  const [search, setSearch] = useState('')
  const [drinks, setDrinks] = useState(null)
  const fetchApi = async () => {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      const data = await res.json();
      if(data.drinks){
        return setDrinks(data.drinks)
      }else{
        return setDrinks([])
      }
 }
 useEffect(()=> {
   setTimeout(() => {
    fetchApi()
   }, 100)
 }
 ,[])
  return (
    <section className='m-7 xl:p-12'>
      {
        drinks ? 
        <div>
         <Input search={search} fetchApi={fetchApi} setSearch={setSearch} />
         <Body drinks={drinks} fetchApi={fetchApi} setDrinks={setDrinks} />
      </div> :
      <Loading />
      }
      
    </section>
  )
}

export default Home