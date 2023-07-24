import React, { useEffect } from 'react'
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Outlet, NavLink } from 'react-router-dom';
import { useState } from 'react';
function NavBar() {
    const [icons, setIcons] = useState(true)

  return (
    <section>
    <main className={icons ? 'bg-white p-5 relative xl:px-20 xl:flex xl:justify-between xl:items-end ': 'relative bg-white p-5 xl:px-20 xl:flex xl:items-center'}>
        <div className="logo">
            <h1 className='the-logo text-2xl xl:text-4xl'>MixMaster</h1>
        </div>
        <div className="pages xl:text-xl">
            <div className={icons ? 'hidden  xl:flex xl:space-x-5' : 'links-on xl:flex xl:space-x-5'}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/newsletter'>Newsletter</NavLink>
            </div>
            <div className="icon text-2xl absolute top-6 right-0 pr-5 xl:hidden">
            {
                icons ? <button onClick={()=> setIcons(!icons)}><RxHamburgerMenu/></button> : <button onClick={() => setIcons(!icons)}><RxCross2 /></button>
            }
            </div>
        </div> 
    </main>
    <Outlet />
    </section>
  )
}

export default NavBar