import React from 'react'
import { useRouteError } from 'react-router-dom';

function Error() {
    let error = useRouteError();
    console.log(error)
  return (
    <div className='flex flex-col justify-center h-screen items-center text-3xl italic'>
      <h1 className=''>Oops!</h1>
      <p className='text-xl'>Sorry! Please check your connection</p>
    </div>
  )
}

export default Error