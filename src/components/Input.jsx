import React from 'react'

function Input({search, fetchApi, setSearch}) {
 
  return (
    <section className='xl:flex xl:justify-center '>
      <div className='bg-white text-center px-5 py-8 rounded-md shadow-lg shadow-slate-300 xl:w-1/2 xl:m-auto'>
     <div className="input flex flex-row text-center w-full px-3 py-2 ">
       <input type="search" className='w-3/4 px-1.5 py-0.5 outline-none bg-transparent rounded-tl-md rounded-bl-md border-slate-100 bg-slate-100' value={search} onChange={(e) => setSearch(e.target.value)}/>
       <button className='text-white search-btn text-md w-1/4 rounded-tr-md rounded-br-md' onClick={fetchApi}>Search</button>
     </div>
    </div>
    </section>
  )

}

export default Input