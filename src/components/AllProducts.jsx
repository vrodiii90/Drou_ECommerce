import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import { MainContext } from '../App';
import Footer from './Footer';
import { FaBagShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { MdCompare } from "react-icons/md";

const AllProducts = () => {

  const { products, handleHover } = useContext(MainContext)

  const [accessories, setAccessories] = useState([])
  const [headphones, setHeadphones] = useState([])
  const [mobiles, setMobiles] = useState([])
  const [laptops, setLaptops] = useState([])
  const [tablets, setTablets] = useState([])
  const [watches, setWatches] = useState([])
  const [television, setTelevision] = useState([])



  useEffect(() => {
    let ACCESSORIES = products.filter((x) => x.category == 'accessories')
    setAccessories(ACCESSORIES)

    let HEADPHONE = products.filter((x) => x.category == 'headphones')
    setHeadphones(HEADPHONE)

    let MOBILES = products.filter((x) => x.category == 'mobiles')
    setMobiles(MOBILES)

    let LAPTOP = products.filter((x) => x.category == 'laptops')
    setLaptops(LAPTOP)

    let TELE = products.filter((x) => x.category == 'televisions')
    setTelevision(TELE)

    let TABLET = products.filter((x) => x.category == 'tablets')
    setTablets(TABLET)

    let WATCH = products.filter((x) => x.category == 'smart-watches')
    setWatches(WATCH)
  }, [])

  return (
    <>
      <div className='relative'>
        <div className=" bg-slate-100 h-32 mt-5">
          <li className='absolute list-none left-32 top-16 text-gray-600 text-sm'><NavLink to={'/'}>Home</NavLink> / <span className='text-orange-600'>All-Products</span></li>
        </div>
      </div>
      <div className='flex items-center justify-between mx-32 mt-10'>
        <h3 className='text-3xl font-semibold text-slate-800'>Accessories</h3>
        <div>
          <h3><NavLink to={'accessories'} className='flex flex-1 hover:text-orange-600 transition-all duration-500'>More Accessories <FaAngleRight className='mt-1.5 ml-1 text-sm' /></NavLink></h3>
        </div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-32 mt-10'>
        {
          accessories.slice(0, 4).map((x) => {
            return (
              <div key={x.id} className=" shadow-xl overflow-hidden">
                <div onClick={() => SetSingleProduct(x.id)}>
                  <div className="group cursor-pointer hover:scale-110  transition-all duration-1000">
                    <img className='reletive-group w-2/3 mx-auto block' src={x.img} onMouseEnter={() => handleHover(x.id)} onMouseLeave={() => handleHover(x.id)} alt="" />
                    <div>
                      <div className='absolute top-[90%] left-[30%]'>
                        <div className='invisible group-hover:visible flex gap-3'>
                          <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaBagShopping /></div>
                          <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaRegHeart /></div>
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
      <br />
      <hr className='mx-32 mt-20' />
      <div className='flex justify-between items-center mx-32 mt-20'>
        <h3 className='text-3xl font-semibold text-slate-800'>Headphones</h3>
        <div>
          <h3><NavLink to={'headphones'} className='flex flex-1 hover:text-orange-600 transition-all duration-500'>More Headphones <FaAngleRight className='mt-1.5 ml-1 text-sm' /></NavLink></h3>
        </div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-32 mt-20'>
        {
          headphones.slice(0, 4).map((x) => {
            return (
              <div key={x.id} className=" shadow-xl overflow-hidden">
                <div onClick={() => SetSingleProduct(x.id)}>
                  <div className="group cursor-pointer hover:scale-110  transition-all duration-1000">
                    <img className='reletive-group ml-12 w-2/3 mx-auto block' src={x.img} onMouseEnter={() => handleHover(x.id)} onMouseLeave={() => handleHover(x.id)} alt="" />
                    <div>
                      <div className='absolute top-[90%] left-[30%]'>
                        <div className='invisible group-hover:visible flex gap-3'>
                          <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaBagShopping /></div>
                          <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaRegHeart /></div>
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
      <br />
      <hr className='mx-32 mt-20' />
      <div className='flex justify-between items-center mx-32 mt-20'>
        <h3 className='text-3xl font-semibold text-slate-800'>Mobiles</h3>
        <div className=''>
          <h3><NavLink to={'mobiles'} className='flex flex-1 hover:text-orange-600 transition-all duration-500'>More Mobiles <FaAngleRight className='mt-1.5 ml-1 text-sm' /></NavLink></h3>
        </div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-32 mt-20'>
        {
          mobiles.slice(0, 4).map((x) => {
            return (
              <div key={x.id} className="group shadow-xl overflow-hidden">
                <div onClick={() => SetSingleProduct(x.id)}>
                  <div className=" cursor-pointer hover:scale-110  transition-all duration-1000">
                    <img className='reletive-group ml-12 w-2/3 mx-auto block' src={x.img} onMouseEnter={() => handleHover(x.id)} onMouseLeave={() => handleHover(x.id)} alt="" />
                    <div>
                      <div className='absolute top-[90%] left-[30%]'>
                        <div className='invisible group-hover:visible flex gap-3'>
                          <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaBagShopping /></div>
                          <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaRegHeart /></div>
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
      <br />
      <hr className='mx-32 mt-20' />
      <div className='flex items-center justify-between mx-32 mt-20'>
        <h3 className='text-center text-3xl font-semibold text-slate-800'>Laptops</h3>
        <div className=''>
          <h3><NavLink to={'laptops'} className='flex flex-1 hover:text-orange-600 transition-all duration-500'>More Laptops <FaAngleRight className='mt-1.5 ml-1 text-sm' /></NavLink></h3>
        </div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-32 mt-20'>
        {
          laptops.slice(0, 4).map((x) => {
            return (
              <div key={x.id} className="shadow-xl overflow-hidden">
                <div onClick={() => SetSingleProduct(x.id)}>
                  <div className="group cursor-pointer hover:scale-110  transition-all duration-1000">
                    <img className='reletive-group w-2/3 block mx-auto' src={x.img} onMouseEnter={() => handleHover(x.id)} onMouseLeave={() => handleHover(x.id)} alt="" />
                    <div>
                      <div className='absolute top-[90%] left-[30%]'>
                        <div className='invisible group-hover:visible flex gap-3'>
                          <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaBagShopping /></div>
                          <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaRegHeart /></div>
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
      <br />
      <hr className='mx-32 mt-20' />
      <div className='flex items-center justify-between mx-32 mt-20'>
        <h3 className='text-center text-3xl font-semibold text-slate-800'>Television</h3>
        <div className=''>
          <h3><NavLink to={'televisions'} className='flex flex-1 hover:text-orange-600 transition-all duration-500'>More Television <FaAngleRight className='mt-1.5 ml-1 text-sm' /></NavLink></h3>
        </div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-32 mt-20'>
        {
          television.slice(0, 4).map((x) => {
            return (
              <div key={x.id} className="group shadow-xl overflow-hidden">
                <div onClick={() => SetSingleProduct(x.id)}>
                  <div className=" cursor-pointer hover:scale-110 transition-all duration-1000">
                    <img className='reletive-group w-2/3 mx-auto block' src={x.img} onMouseEnter={() => handleHover(x.id)} onMouseLeave={() => handleHover(x.id)} alt="" />
                    <div>
                      <div className='absolute top-[90%] left-[30%]'>
                        <div className='invisible group-hover:visible flex gap-3'>
                          <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaBagShopping /></div>
                          <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaRegHeart /></div>
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
      <br />
      <hr className='mx-32 mt-20' />
      <div className='flex items-center justify-between mx-32 mt-20'>
        <h3 className='text-center text-3xl font-semibold text-slate-800'>Tablets</h3>
        <div className=''>
          <h3><NavLink to={'tablets'} className='flex flex-1 hover:text-orange-600 transition-all duration-500'>More Tablets <FaAngleRight className='mt-1.5 ml-1 text-sm' /></NavLink></h3>
        </div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-32 mt-20'>
        {
          tablets.slice(0, 4).map((x) => {
            return (
              <div key={x.id} className="group shadow-xl overflow-hidden">
                <div onClick={() => SetSingleProduct(x.id)}>
                  <div className=" cursor-pointer hover:scale-110  transition-all duration-1000">
                    <img className='reletive-group w-2/3 mx-auto block' src={x.img} onMouseEnter={() => handleHover(x.id)} onMouseLeave={() => handleHover(x.id)} alt="" />
                    <div>
                      <div className='absolute top-[90%] left-[30%]'>
                        <div className='invisible group-hover:visible flex gap-3'>
                          <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaBagShopping /></div>
                          <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaRegHeart /></div>
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
      <br />
      <hr className='mx-32 mt-20' />
      <div className='flex justify-between items-center mx-32 mt-20'>
        <h3 className='text-center text-3xl font-semibold text-slate-800'>Smart Watches</h3>
        <div className=''>
          <h3><NavLink to={'smart-watches'} className='flex flex-1 hover:text-orange-600 transition-all duration-500'>More Watches <FaAngleRight className='mt-1.5 ml-1 text-sm' /></NavLink></h3>
        </div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-32 mt-20'>
        {
          watches.slice(0, 4).map((x) => {
            return (
              <div key={x.id} className="group shadow-xl overflow-hidden">
                <div onClick={() => SetSingleProduct(x.id)}>
                  <div className=" cursor-pointer hover:scale-110  transition-all duration-1000">
                    <img className='reletive-group ml-12 w-2/3 mx-auto block' src={x.img} onMouseEnter={() => handleHover(x.id)} onMouseLeave={() => handleHover(x.id)} alt="" />
                    <div>
                      <div className='absolute top-[90%] left-[30%]'>
                        <div className='invisible group-hover:visible flex gap-3'>
                          <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaBagShopping /></div>
                          <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaRegHeart /></div>
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
      <Footer />
    </>
  )
}

export default AllProducts
