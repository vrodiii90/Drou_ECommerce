import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import { MainContext } from '../App'
import { IoIosCloseCircleOutline } from "react-icons/io";


const Wishlist = () => {

    let { wishlist, Removelist} = useContext(MainContext)

    return (
        <>
            <div className='relative'>
                <div className=" bg-slate-100 h-32 mt-5">
                    <li className='absolute list-none left-32 top-16 text-gray-600 text-sm'><NavLink to={'/'}>Home</NavLink> / <span className='text-orange-600'>Wishlist</span></li>
                </div>
                {
                    wishlist.length == 0 ? <div className=" mt-16 inline-block align-baseline">
                    <div className='mx-32'>
                        <h3 className='text-3xl text-gray-600 font-semibold'>Your wishlist is currently empty!</h3>
                        <p className=' text-gray-800'>Continue browsing here.</p>
                    </div>
                </div> : 
                <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mx-32 mt-20'>
                {
                  wishlist.map((x) => {
                    return (
                      <div className="relative shadow-xl overflow-hidden">
                        <div>
                          <div className=" cursor-pointer hover:scale-110  transition-all duration-1000">
                            <img className=' w-2/3 mx-auto block' src={x.img} alt="" />
                         </div>
                          <h3 className='mt-9 truncate'>{x.title}</h3>
                          <h3><del>₹{x.price} </del>  <span className='ml-2 text-orange-600'>₹:{Math.trunc((x.price - x.discount))}</span></h3>
                        </div>
                        <div onClick={() => Removelist(x.id)} className='absolute top-0 right-2 rounded-3xl outline-none text-white bg-orange-600 cursor-pointer hover:bg-gray-600 transition-all duration-500 w-fit'><IoIosCloseCircleOutline className='text-3xl' /></div>
                      </div>
                    )
                  })
                }
              </div>
                }
                
            </div>
            <Footer />
        </>
    )
}

export default Wishlist
