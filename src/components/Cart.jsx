import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../App'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";


const Cart = () => {

  const { cart, RemovePro, QtyIncrease, QtyDecrease } = useContext(MainContext)
  let totalPrice = 0;
  let shippingCharges = 500;



  return (
    <>
      <div className='relative'>
        <div className=" bg-slate-100 h-32 mt-5">
          <li className='absolute list-none left-32 top-16 text-gray-600 text-sm'><NavLink to={'/'}>Home</NavLink> / <span className='text-orange-600'>Cart</span></li>
        </div>
        {
          cart.length == 0 ? <div className=" mt-16 inline-block align-baseline mb-auto">
            <div className='mx-32'>
              <h3 className='text-3xl text-center text-gray-600 font-semibold'>Your Cart is currently empty!</h3>
              <h3 className='text-6xl text-center'><PiShoppingCartThin /></h3>
              <p className=' text-gray-800 hover:text-orange-600 transition-all duration-700'><NavLink to={'/'}>Continue Shopping..</NavLink></p>
            </div>
          </div> :
            <div className='relative'>
              <h3 className='text-5xl font-semibold ml-36 mt-10 text-center'>Shopping Cart</h3>
              <hr className='mt-5 mx-32' />
              {
                cart.map((x) => {
                  totalPrice += x.price * x.qty
                  return (
                    <div className='relative  ml-36 space-x-5 mt-5'>
                      <img className='h-[200px] w-2/12 mx-0 block shadow-2xl cursor-pointer' src={x.img} alt="" /><br />
                      <div className='absolute top-3 left-[18%]'>
                        <div className='w-[50%]'>
                          <h3 className='font-semibold'>{x.title}</h3>
                          <h3 className='text-orange-600 font-semibold'>Rs. {x.price * x.qty}</h3>
                        </div>
                        <div className=' mt-5 p-0 w-[50%] flex flex-1 gap-2'>
                          <h3 onClick={() => QtyDecrease(x.id)} className='mt-1 text-2xl cursor-pointer'><CiSquareMinus /></h3>
                          <h3 className='text-xl'>{x.qty}</h3>
                          <h3 onClick={() => QtyIncrease(x.id)} className='mt-1 text-2xl cursor-pointer'><CiSquarePlus /></h3>
                        </div>
                        <div>
                          <button onClick={() => RemovePro(x.id)} className='text-xl mt-5 cursor-pointer text-orange-700 hover:scale-125 hover:text-orange-600 transition-all duration-500'>Remove</button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <div className='absolute top-24 right-[8%] w-[27%] bg-slate-100 p-3 rounded-md'>
                <h3 className='text-xl font-semibold'>Order Summary</h3>
                <div className='p-2 text-slate-500  '>
                  <div className='relative mt-5 flex flex-1 '>
                    <h3>SubTotal</h3>
                    <p className='absolute top-0 right-0'>{totalPrice}</p>
                  </div>
                  <hr />
                  <div className='relative mt-5 flex flex-1 space-x-[70%]'>
                    <h3 className=''>Shipping Estimate</h3>
                    <h3 className='absolute top-0 right-0'>{shippingCharges}</h3>
                  </div>
                  <hr />
                  <div className='relative mt-5 flex flex-1 space-x-[70%]'>
                    <h3 className='font-semibold text-black'>Order Total</h3>
                    <h3 className='absolute top-0 right-0 font-semibold text-black'>{totalPrice + shippingCharges}</h3>
                  </div>
                  <hr />
                </div>
                <button className='mt-5 p-2 w-full bg-orange-700 text-white hover:bg-orange-600 rounded-lg'>Checkout</button>
              </div>
            </div>
        }
      </div>
      <Footer />
    </>
  )
}

export default Cart
