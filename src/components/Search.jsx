import React, { useContext, useEffect, useState } from 'react'
import { GrClose } from "react-icons/gr";
import { NavLink } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { IoSearchOutline } from "react-icons/io5";
import { MainContext } from '../App';

const Search = () => {

    const { SearchProducts, searchPro } = useContext(MainContext)


    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div className='relative'>
                <div data-aos='zoom-in' data-aos-duration='500' className='absolute -top-40 border-2 h-[700px] z-50 w-full bg-slate-50'>
                    <NavLink to={-1}><GrClose className='absolute right-16 top-14 text-2xl hover:text-orange-600' /></NavLink>
                    <div data-aos='fade-up' data-aos-duration='2000'>
                        <input type="search" name="" className='absolute top-[320px] bg-slate-50 outline-none text-slate-400 left-[230px] w-[60%] text-5xl' placeholder='Search our store' value={searchPro} onChange={SearchProducts}  />
                        <NavLink to={'searchpro'}><IoSearchOutline className='absolute top-[340px] right-[340px] text-slate-400 hover:text-orange-600 scale-90 text-5xl' /></NavLink>
                        <div className='absolute top-[400px] left-[220px] bg-orange-600 h-0.5 w-[63%]'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
