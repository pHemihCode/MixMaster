import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Detail() {

    const [details , setDetails] = useState([])
    const { id } = useParams()
    const fetchId = async() => {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json();
        setDetails(data.drinks);
    }
    useEffect(() => {fetchId() }, [])
  return (
    <div className='the-images rounded-md the-details overflow-y-auto'>
        {
            details.map((detail) => {
                const {strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7} = detail
                return(
                    <div key={detail.idDrink}>
                       <div className='header text-center'>
                        <Link to='/' className='details font-normal'>Back Home</Link>
                        <h1 className='font-normal text-2xl'>{detail.strDrink}</h1>
                       </div>
                       <div className="img-details text-md font-semibold">
                         <img src={detail.strDrinkThumb} alt={detail.strDrink} className='my-5' />
                         <div className="full my-8">
                            <h1 className=''><span>Name : </span>{detail.strDrink}</h1>
                            <h1 className=''><span>Category :</span>{detail.strCategory}</h1>
                            <h1 className=''><span>Info :</span>{detail.strAlcoholic}</h1>
                            <h1><span>Glass :</span>{detail.strGlass}</h1>
                            <h1><span>Ingredients :</span>{strIngredient1 && strIngredient1}, {strIngredient2}, {strIngredient3}</h1>
                            <h1><span>Instructions :</span>{detail.strInstructions}</h1>
                         </div>
                       </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Detail