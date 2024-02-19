import React, { useContext, useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition, Dialog } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { MainContext } from '../App';
import { FaBars } from "react-icons/fa";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    let [nav, setNav] = useState(false)

    const { cart, RemovePro } = useContext(MainContext)
    let totalPrice = 0;

    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div className="sticky top-0 z-10 bg-white">
                <div className='flex gap-20 justify-between items-center px-32  my-2'>
                    <div className=" w-48">
                        <img src="../src/img/droulogo.png" className='w-full' alt="Your Company" />
                    </div>
                    <button onClick={() => setNav(!nav)} className="navOpenBtn visible xl:invisible lg:invisible absolute top-7 right-56 border">
                            <FaBars />
                        </button>
                    <div className={`flex lg:flex-row flex-col lg:static absolute top-10 w-full ${nav ? 'top-16' : '-top-80'} bg-white lg:items-center p-5 lg:p-0 gap-2 lg:gap-7 transition-all duration-500 lg:my-5`}>
                        <li className='flex  items-center xl:text-sm text-xs font-semibold text-gray-900 mt-0.5 h-6 cursor-pointer list-none hover:text-orange-600 '><NavLink to={'/'}>HOME</NavLink></li>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full xl:text-sm text-xs hover:text-orange-600 font-semibold text-gray-900">
                                    ELECTRONICS
                                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-900 hover:text-orange-600" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute -left-60 z-10 mt-4 grid grid-cols-4 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="mt-5">
                                        <h4 className='text-sm font-bold text-gray-900 ml-3 mt-1 cursor-pointer'>Smart Phones</h4>

                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm fle flex-1'
                                                        )}
                                                    >
                                                        Apple
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Real Me
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Samsung
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Oppo
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Vivo
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Nothing
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h4 className='text-sm font-bold text-gray-900 ml-3 mt-1'>Laptops</h4>
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Lenovo
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Asus
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Dell
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Apple
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        HP
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Acer
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h4 className='text-sm font-bold text-gray-900 ml-3 mt-1'>Headphones</h4>
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Real Me
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        boAt
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        OnePlus
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Apple
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        JBL
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Nothing
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h4 className='text-sm font-bold text-gray-900 ml-3 mt-1'>Best Selling</h4>
                                        <div className="py-1">
                                            <Menu.Item>
                                                <img src="../src/img/apple.png" className='h-44 w-44' alt="" />
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? ' text-orange-600' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Apple Watch ultra
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <p className='text-sm font-semibold text-gray-600 ml-6 -mt-1'>$70.00 <del>$85.00</del></p>
                                        </div>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full xl:text-sm text-xs font-semibold text-gray-900 hover:text-orange-600">
                                    BLOG
                                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-900 hover:text-orange-600" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-in duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-out duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-0 z-10 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1 mt-5">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-orange-600' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Blog Listing
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-orange-600' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Blog Spot
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full xl:text-sm text-xs font-semibold text-gray-900 hover:text-orange-600">
                                    PAGES
                                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-900 hover:text-orange-600" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-in duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-out duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-0 z-10 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1 mt-5">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-orange-600' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    About Page
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-orange-600' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Contact Page
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-orange-600' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    FAQ Page
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-orange-600' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Privacy Policy
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? ' text-orange-600' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    404 Error Pages
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <li className='flex  items-center  xl:text-sm text-xs font-semibold text-gray-900 mt-0.5 cursor-pointer hover:text-orange-600 h-6 list-none'><NavLink to={'contact'}>CONTACT</NavLink></li>
                    </div>
                    <div className="relative flex gap-3 lg:gap-7 text-md  xl:text-2xl">
                        <div>
                            <h4 className=''><NavLink to={'search'}><IoSearchOutline className=' font-bold text-gray-900  cursor-pointer hover:text-orange-600' /></NavLink></h4>
                        </div>
                        <div>
                            <h4 className=''><NavLink to={'wishlist'}><FaRegHeart className=' font-bold text-gray-900  cursor-pointer hover:text-orange-600' /></NavLink></h4>
                        </div>
                        <div>
                            <h4 className='relative group'>
                                <NavLink to={'cart'}>
                                    <LuShoppingBag className='group font-bold text-gray-900 cursor-pointer' />
                                </NavLink>
                                <span className='absolute top-2 -right-2 cursor-pointer text-sm font-bold px-1.5 bg-orange-500 text-slate-100 rounded-xl'>{cart.length}</span>
                                {
                                    cart.length == 0 ? <div className='invisible group-hover:visible hover:transition-all ease-in-out rounded-md delay-300 absolute top-10 right-0 p-2 mt-2 border-2 h-18 w-[350px] shadow-md text-lg text-center bg-white'> Your Cart is Empty.</div>
                                        :
                                        <div className=''>
                                            {
                                                cart.map((x) => {
                                                    totalPrice += x.price * x.qty
                                                    return (
                                                        <div key={x.id} className=" invisible group-hover:visible inset-0 overflow-hidden">
                                                            <div className="inset-0 overflow-hidden">
                                                                <div className="pointer-events-none fixed inset-y-16 right-0 flex max-w-full pl-10">
                                                                    <div className="pointer-events-auto w-screen max-w-md">
                                                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                                                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                                                <div className="flex items-start z-50 justify-between">
                                                                                    <div className="text-lg text-center font-medium text-gray-900">Shopping cart</div>
                                                                                </div>

                                                                                <div className="mt-8">
                                                                                    <div className="flow-root">
                                                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                                                            {cart.map((x) => (
                                                                                                <li key={x.id} className="flex py-6">
                                                                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                                                        <img
                                                                                                            src={x.img}
                                                                                                            alt='Prduct Image'
                                                                                                            className="h-full w-full object-cover object-center"
                                                                                                        />
                                                                                                    </div>

                                                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                                                        <div>
                                                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                                                <h3 className=''>
                                                                                                                    {x.title}
                                                                                                                </h3>
                                                                                                                <p className="ml-4 text-orange-600">{x.price * x.qty}</p>
                                                                                                            </div>
                                                                                                            <p className="mt-1 text-sm text-gray-500">Black</p>
                                                                                                        </div>
                                                                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                                                                            <p className="text-gray-500">Qty. {x.qty}</p>

                                                                                                            <div className="flex">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="font-medium text-orange-600 hover:text-orange-400"
                                                                                                                    onClick={() => RemovePro(x.id)}
                                                                                                                >
                                                                                                                    Remove
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </li>
                                                                                            ))}
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <p>Subtotal</p>
                                                                                    <p>{totalPrice}</p>
                                                                                </div>
                                                                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                                                <div className="mt-6">
                                                                                    <h3 className='flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700'><NavLink>Checkout</NavLink></h3>
                                                                                </div>
                                                                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                                                    <p>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="font-medium text-orange-600 hover:text-orange-500"
                                                                                        >
                                                                                            <NavLink to={'cart'}>View Cart
                                                                                                <span aria-hidden="true"> &rarr;</span></NavLink>
                                                                                        </button>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </div>
                                }

                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
