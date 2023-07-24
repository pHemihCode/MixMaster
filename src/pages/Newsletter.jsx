import React, { useEffect, useState} from 'react'

function Newsletter() {
  const [submit,setSubmit] = useState(true);
  
  const handleSubmit =()=>{
    setSubmit(false)
}
  useEffect(() => {
    setTimeout(() =>{handleSubmit},2000)
  },[])
  

  return (
    <section className='xl:flex xl:justify-center'>
      <form onSubmit={handleSubmit} className='py-10 pt-7 flex flex-col justify-center items-center h-4/5 bg-white rounded-md shadow-xl shadow-slate-200 m-8 xl:w-1/2'>
      <h1 className='text-lg mb-5 text-center xl:text-3xl'>Our Newsletter</h1>
      <div className="the-inputs xl:w-full xl:px-12">
        <div className="inputs">
          <label htmlFor="name" className='text-md'>Name</label><br></br>
          <input type="text" id='name' className='text-input xl:w-full' required/>
        </div>
        <div className="inputs">
          <label htmlFor="lname" className='text-md'>Last Name</label><br></br>
          <input type="text" id='lname' className='text-input xl:w-full' required/>
        </div>
        <div className="inputs">
          <label htmlFor="email" className='text-md'>Email</label><br></br>
          <input type="email" id='email' className='text-input xl:w-full' required />
        </div>
        <button className='submit-btn text-md py-1 rounded-md text-white bg-red-300 w-full' type='submit'>{submit ? 'Submit' : 'Submitting'}</button>
      </div>
    </form>
    </section>
  )
}

export default Newsletter