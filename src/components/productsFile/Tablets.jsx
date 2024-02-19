import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../App'
import { NavLink } from 'react-router-dom'
import { FaBagShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { MdCompare } from "react-icons/md";

const Tablets = () => {

    const { products, addToWishlist , handleHover, addToCart} = useContext(MainContext)

    const [tablets, setTablets] = useState([])

    useEffect(() => {
        let TABS = products.filter((x) => x.category == 'tablets')
        setTablets(TABS)
    }, [])
    return (
        <>
            <div className='relative'>
                <div className=" bg-slate-100 h-32 mt-5">
                    <li className='absolute list-none left-32 top-16 text-gray-600 text-sm'><NavLink to={'/'}>Home</NavLink>/<NavLink to={-1}>All-Products</NavLink> / <span className='text-orange-600'>Tablets Collection</span></li>
                </div>
            </div>
            <div>
                <h3 className='text-center mt-7 text-4xl text-orange-600'>All Tablets</h3>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-32 mt-20'>
                {
                    tablets.map((x) => {
                        return (
                            <div key={x.id} className=" shadow-xl overflow-hidden">
                                <div onClick={() => SetSingleProduct(x.id)}>
                                    <div className="group cursor-pointer hover:scale-110  transition-all duration-1000">
                                        <img className='reletive-group w-2/3 mx-auto block' src={x.img} onMouseEnter={() => handleHover(x.id)} onMouseLeave={() => handleHover(x.id)} alt="" />
                                        <div className='absolute top-[90%] left-[30%]'>
                                            <div className='invisible group-hover:visible flex flex-1 gap-3'>
                                                <div onClick={() => addToCart(x.id)} className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaBagShopping /></div>
                                                <div onClick={() => addToWishlist(x.id)} className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaRegHeart /></div>
                                                <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><MdCompare /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className='mt-9 truncate'>{x.title}</h3>
                                    <h3><del>₹{x.price} </del>  <span className='ml-2 text-orange-600'>₹:{Math.trunc((x.price - x.discount))}</span></h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Tablets
