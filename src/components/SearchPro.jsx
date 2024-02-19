import React, { useContext} from 'react'
import { MainContext } from '../App';
import { FaBagShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { MdCompare } from "react-icons/md";


const SearchPro = () => {

    const { searchResults, handleHover, setSingleProduct } = useContext(MainContext)

    
    return (
        <>
            <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mx-32 mt-20'>
                {
                    searchResults.map((x) => {
                        return (
                            <div key={x.id} className="shadow-xl overflow-hidden h-[50vh]">
                                <div>
                                    <div className="group  cursor-pointer hover:scale-110  transition-all duration-1000">
                                        <img onClick={() => setSingleProduct(x.id)} className='reletive-group ml-12 w-2/3 mx-auto block' src={x.img} onMouseEnter={() => handleHover(x.id)} onMouseLeave={() => handleHover(x.id)} alt="" />
                                        <div>
                                            <div className='absolute top-[90%] left-[30%]'>
                                                <div className='invisible group-hover:visible flex flex-1 gap-3'>
                                                    <div onClick={() => addToCart(x.id)} className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaBagShopping /></div>
                                                    <div onClick={() => addToWishlist(x.id)} className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaRegHeart /></div>
                                                    <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><MdCompare /></div>
                                                </div>
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

export default SearchPro
