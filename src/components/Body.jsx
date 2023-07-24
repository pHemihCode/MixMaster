import React from 'react'
import { Link } from 'react-router-dom'

function Body({drinks}) {
  return (
    <div className='my-10 sm:my-0 '>
       {
        drinks ? 
        <div className='sm:grid sm:grid-cols-2 sm:gap-5 my-10 xl:grid-cols-3 xl:gap-8'>
        {
          drinks.map((drink) => {
            return(
              <div key={drink.idDrink} className='bg-white my-10 rounded-md shadow-lg shadow-slate-300 sm:my-0'>  
                <img src={drink.strDrinkThumb} alt={drink.strDrink} className='rounded-tr-md rounded-tl-md'/>
                <div className="the-text px-5 py-6">
                  <h1 className='font-semibold text-lg'>{drink.strDrink}</h1>
                  <p>{drink.strGlass}</p>
                  <p className='opacity-60'>{drink.strAlcoholic}</p>
                  <Link to={`/${drink.idDrink}`}><button className='details'>Details</button></Link>
                </div>
              </div>
            )
          })
        }
      </div> : 
        <h1>Not found</h1>
       }
           
    </div>
  )
}

export default Body