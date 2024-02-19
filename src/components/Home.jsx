import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer.jsx'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { MainContext } from '../App.jsx';
import { FaBagShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { MdCompare } from "react-icons/md";
import Timer from './Timer.jsx';
import { TbTruckDelivery } from "react-icons/tb";
import { TbCoinRupee } from "react-icons/tb";
import { GoNote } from "react-icons/go";




const Home = () => {

  let { products, addToWishlist, setProducts, addToCart, setSingleProduct, handleHover } = useContext(MainContext);
  const [myActive, setMyActive] = useState(false)

  const [items, setItems] = useState([])

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    focusOnSelect: true,
    speed: 1500,
    Animation: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    Aos.init();
    filterItem('accessories')
  }, [])




  const filterItem = (category) => {
    let updateditems = products.filter((x) => {
      return x.category == category
    })
    setItems(updateditems)
    setMyActive(category)
  }


  return (
    <>
      <div>
        <Slider className='w-[98%]' {...settings}>
          <div>
            <div className='relative'>
              <div className=''>
                <img className='w-[70%] ml-[400px] h-[500px]' src="../src/img/applewatch.jpg" alt="Apple Products" />
              </div>
              <div className='absolute top-[180px] left-[130px]' data-aos='fade-up' data-aos-duration='2000'>
                <h3 className='text-orange-600 text-2xl'> SALE UP TO 30% OFF</h3>
                <h3 className='mt-5 text-5xl text-slate-700'>Apple Watch Series</h3>
                <h5 className='w-[77%] mt-5 text-slate-700'>Feature Packed at a better value than ever Powerful sendors to monitor your fitness</h5>
                <div className=''>
                  <button className='bg-orange-600 w-[150px] mt-5 text-slate-50 font-semibold p-3 rounded-[40px] hover:bg-gray-800'>Shop Now </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='relative'>
              <div className=''>
                <img className='w-[70%] ml-[400px] h-[500px]' src="../src/img/headphone.png" alt="Accessories" />
              </div>
              <div className='absolute top-[180px] left-[130px]'>
                <h3 className='text-orange-600 text-2xl'> New arrivals collection</h3>
                <h3 className='mt-5 text-5xl text-slate-700'>Mobile Accessories</h3>
                <h5 className='w-[77%] mt-5 text-slate-700'>Snap on a case, wallet, wireless charger battery pack all accessories you're looking</h5>
                <div className=''>
                  <button className=' bg-orange-600 w-[150px] mt-5 text-slate-50 font-semibold p-3 rounded-[40px] hover:bg-gray-800'>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div>
        <div>
          <h3 className='mx-36 mt-10 text-3xl font-semibold text-slate-800'>Trending Categories</h3>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 mx-36  mt-10 gap-14'>
          <div className='items-center text-center'>
            <NavLink to={'all-products/mobiles'}> <img src="../src/products/iPhone.jpg" className='cursor-pointer block hover:scale-110 transition-all duration-1000' alt="iPhones" />
              <h4 className='mt-5 cursor-pointer'>Mobiles</h4></NavLink>
          </div>
          <div className='items-center text-center'>
            <NavLink to={'all-products/televisions'}>
              <img src="../src/products/television.png" className='cursor-pointer hover:scale-110 transition-all block duration-1000' alt="Mini Speakers" />
              <h4 className='mt-5 cursor-pointer'>Television</h4>
            </NavLink>
          </div>
          <div className='items-center text-center'>
            <NavLink to={'all-products/tablets'}>
              <img src="../src/products/tablet.jpg" className='cursor-pointer hover:scale-110 transition-all block duration-1000' alt="Tablets" />
              <h4 className='mt-2.5 cursor-pointer'>Tablets</h4>
            </NavLink>
          </div>
          <div className='items-center text-center'>
            <NavLink to={'all-products/headphones'}>
              <img src="../src/products/headphones.jpg" className='cursor-pointer hover:scale-110 transition-all block duration-1000' alt="Headphones" />
              <h4 className='mt-5 cursor-pointer'>Headphones</h4>
            </NavLink>
          </div>
          <div className='items-center text-center'>
            <NavLink to={'all-products/laptops'}>
              <img src="../src/products/laptop.jpg" className='mt-7 cursor-pointer hover:scale-110 transition-all block duration-1000' alt="Laptops" />
              <h4 className='mt-9 cursor-pointer'>Laptop</h4>
            </NavLink>
          </div>
          <div className='items-center text-center'>
            <NavLink to={'all-products/accessories'}>
              <img src="../src/products/accessories.jpg" className='cursor-pointer hover:scale-110 transition-all block duration-1000' alt="Accessories" />
              <h4 className='mt-5 cursor-pointer'>Accessories</h4>
            </NavLink>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-2 mt-10 gap-10 mx-36' data-aos='fade-up' data-aos-duration='2000'>
        <div className='bg-slate-100 relative'>
          <div className='hover:scale-105 transition-all duration-1000'>
            <img src="../src/products/home/smarttv.png" className='w-[100%]' alt="" />
          </div>
          <div className='absolute top-[70px] left-[200px] text-slate-900'>
            <h3>Smart Televisions</h3>
            <h3 className='mt-3 text-3xl'>Just Starting at Rs. 7,999</h3>
            <button className='mt-3 p-3 text-white w-[50%] hover:bg-slate-700 bg-orange-600 rounded-3xl'>Shop Now</button>
          </div>
        </div>
        <div className='bg-slate-100 relative'>
          <div>
            <img src="../src/products/home/appleairpod.png" className='w-[80%] h-[400px]' alt="" />
          </div>
          <div className='absolute top-[70px] left-[200px] text-slate-900'>
            <h3>Earbuds</h3>
            <h3 className='mt-3 text-3xl'>Just Starting at Rs. 1,200</h3>
            <button className='mt-3 p-3 text-white w-[50%] hover:bg-slate-700 bg-orange-600 rounded-3xl'>Shop Now</button>
          </div>
        </div>
      </div>

      <div className='px-20 my-20'>
        <div className='flex justify-between items-center'>
          <h3 className=' text-3xl font-semibold text-slate-800'>Our Products</h3>
          <div>
            <h3 className=' hover:text-orange-600 transition-all duration-700 font-semibold'><NavLink to={'all-products'} className={'flex flex-1'}>View All Products <FaArrowRight className='ml-3 mt-1 text-orange-600' /></NavLink></h3>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-36 mt-20 gap-4'>
          {
            products.slice(0, 5).map((x) => {
              return (
                <div key={x.id} className="shadow-md h-[50vh]">
                  <div>
                    <div className="group cursor-pointer hover:scale-110  transition-all duration-1000">
                      <img onClick={() => setSingleProduct(x.id)} className='reletive-group w-2/3 mx-auto block' src={x.img} onMouseEnter={() => handleHover(x.id)} onMouseLeave={() => handleHover(x.id)} alt="" />
                      <div className='absolute top-[90%] left-[60px]'>
                        <div className='invisible group-hover:visible flex flex-1 gap-3'>
                          <div onClick={() => addToCart(x.id)} className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaBagShopping /></div>
                          <div onClick={() => addToWishlist(x.id)} className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><FaRegHeart /></div>
                          <div className='p-2 rounded-3xl text-white bg-gray-800 cursor-pointer hover:bg-orange-600'><MdCompare /></div>
                        </div>
                      </div>
                    </div>
                    <h3 className='mt-8'>{x.title}</h3>
                    {/* <h3>{x.price}</h3> */}
                    <h3><del>₹{x.price} </del>  <span className='ml-2 text-orange-600'>₹: {Math.trunc((x.price - x.discount))}</span></h3>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

      <div className='flex p-10 bg-slate-100 mt-10'>
        <div className='mx-20 mt-5 w-full'>
          <h3 className='p-3 w-[30%] font-sans font-bold bg-orange-600 text-center text-white mx-24'>Hurry Up !</h3>
          <h3 className='mt-3 text-slate-700 text-5xl font-sans font-bold'>Up To 25% Discount</h3>
          <h3 className='mt-3 text-slate-700 text-5xl font-sans font-bold mx-20'>Check it Out</h3>
          <Timer />
          <button className='hover:text-orange-600 transition-all duration-200 mt-10 text-xl mx-36'>Shop Now</button>
        </div>
        <div>
          <img src="../src/products/home/iPhones.png" className=' w-[100%]' alt="iPhones" />
        </div>

      </div>

      <div className='mx-36 mt-10'>
        <div className='flex justify-between items-center'>
          <h3 className='text-3xl font-semibold text-slate-800'>Popular Products</h3>
          <div className='justify-end flex flex-1 gap-5'>
            <li onClick={() => filterItem('accessories')} className={`hover:text-orange-600 transition-all duration-500 list-none cursor-pointer ${myActive == 'accessories' ? 'text-orange-600' : ''}`}>Accessories</li>
            <li onClick={() => filterItem('mobiles')} className={`hover:text-orange-600 transition-all duration-500 list-none cursor-pointer ${myActive == 'mobiles' ? 'text-orange-600' : ''}`}>Mobiles</li>
            <li onClick={() => filterItem('laptops')} className={`hover:text-orange-600 transition-all duration-500 list-none cursor-pointer ${myActive == 'laptops' ? 'text-orange-600' : ''}`}>Laptops</li>
          </div >
        </div >
      </div >
      <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-5 mx-32 mt-20'>
        {
          items.slice(0, 8).map((x) => {
            return (
              <div key={x.id} className="group shadow-xl overflow-hidden">
                <div>
                  <div className=" cursor-pointer hover:scale-110  transition-all duration-1000">
                    <img onClick={() => setSingleProduct(x.id)} className='reletive-group w-2/3 mx-auto block ' src={x.img} onMouseEnter={() => handleHover(x.id)} onMouseLeave={() => handleHover(x.id)} alt="" />
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

      <div className='mt-32 bg-slate-100'>
        <div className='overflow-hidden flex justify-between items-center'>
          <div className='mx-48'>
            <h3 className='text-slate-600 mx-14'>BIG DISCOUNT</h3>
            <h3 className='mt-5 text-3xl font-mono text-slate-900'>Apple Macbooks</h3>
            <h3 className='mt-5 mx-10 font-bold text-orange-600 text-2xl'>Rs. 1,20,000</h3>
            <button className='mt-5 mx-10 px-2 py-3 hover:bg-orange-400 bg-orange-600 rounded-3xl text-white font-bold w-[60%] '>Shop Now</button>
          </div>
          <img src="../src/products/home/laptop.png" className='cursor-pointer hover:scale-110 transition-all duration-700 w-[50%]' alt="products" />

        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-3 mt-16 mx-32'>
        <div className='mx'>
          <TbTruckDelivery className='text-6xl text-slate-700' />
          <h3 className='mt-5 text-xl text-slate-900'>Free delivery</h3>
          <h3 className='mt-3 text-slate-700'>And free returns. See checkout for</h3>
          <h3 className='mt-2 text-slate-700'>delivery dates.</h3>
        </div>
        <div>
          <TbCoinRupee className='text-6xl text-slate-700' />
          <h3 className='mt-5 text-xl text-slate-900'>Pay monthly at 0% APR</h3>
          <h3 className='mt-3 text-slate-700'>Choose to check out with Apple Card</h3>
          <h3 className='mt-2 text-slate-700'>Monthly Installments.</h3>
        </div>
        <div>
          <GoNote className='text-6xl text-slate-700' />
          <h3 className='mt-5 text-xl text-slate-900'>Personalize it</h3>
          <h3 className='mt-3 text-slate-700'>Engrave your device with your name or a</h3>
          <h3 className='mt-2 text-slate-700'>personal note</h3>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Home
