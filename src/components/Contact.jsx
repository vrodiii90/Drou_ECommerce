import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsTelephone } from "react-icons/bs";
import { PiMapPinBold } from "react-icons/pi";
import { MdOutlineWatchLater } from "react-icons/md";
import Footer from '../components/Footer'




const Contact = () => {

    return (
        <>
            <div className='relative'>
                <div className=" bg-slate-100 h-32 mt-5">
                    <li className='absolute list-none left-32 top-16 text-gray-600 text-sm'><NavLink to={'/'}>Home</NavLink> / <span className='text-orange-600'>Contact</span></li>
                </div>
                <div className="mt-16 inline-block align-baseline">
                    <div className='mx-32'>
                        <h3 className='text-4xl text-gray-700 font-bold'>We're always eager to hear from you!</h3>
                        <p className=' text-gray-800'>You can call us in working time or visit our office. All mails will get the response within 24 hours. Love to hear from you!</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-40 mx-32 mt-32'>
                    <div>
                        <div className='flex gap-2 text-xl font-semibold'>
                            <PiMapPinBold className='text-orange-600 text-3xl' /> ADDRESS
                        </div>
                        <div className='w-2/3 mt-5'>
                            <p>1800 Abbot Kinney Blvd. Unit D & E Venice</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex gap-2 text-xl font-semibold'>
                            <BsTelephone className='text-orange-600 text-2xl' /> CONTACT
                        </div>
                        <div className='w-52 mt-5'>
                            <p>Mobile: <span className='font-bold'> (+88) – 1990 – 6886</span></p>
                            <p>Hotline: <span className='font-bold'> 1800 – 1102</span></p>
                            <p>Mail: <span className='font-bold'> contact@drou.com</span></p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex gap-2 text-xl font-semibold'>
                            <MdOutlineWatchLater className='text-orange-600 text-3xl' /> HOUR OF OPERATION
                        </div>
                        <div className='w-60 mt-5'>
                            <p>Monday – Friday : 09:00 – 20:00</p>
                            <p>Sunday & Saturday: 10:30 – 22:00</p>
                        </div>
                    </div>
                </div>
                <div className='mt-[70px] mx-40'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.674256248118!2d72.55926827477064!3d23.03572961583813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e837ae22fe273%3A0xe6c960874031d0f2!2sCODING%20CLOUD%20INSTITUTE!5e0!3m2!1sen!2sin!4v1703233156192!5m2!1sen!2sin" width="1200" height="550" loading="lazy"></iframe>

                </div>
                <div>
                    <div className=''>
                        <h3 className='text-center mt-14 text-4xl text-gray-700'>Ask us anything here</h3>
                    </div>
                    <div className='flex mt-10 text-center mx-32 gap-10 '>
                        <div>
                            <input type="text" title='Please fill in this field' placeholder='Name *' className='w-[600px] rounded-3xl focus:ring-1 outline-none focus:ring-orange-600 focus:bg-white bg-slate-100 p-2' id="" />
                        </div>
                        <div>
                            <input type="email" title='Please fill in this field' placeholder='E-mail *' className='w-[600px] rounded-3xl focus:ring-1 outline-none focus:ring-orange-600 focus:bg-white bg-slate-100 p-2' id="" />
                        </div>

                    </div>
                    <div>
                        <input type="text" title='Please fill in this field' placeholder='Subject *' className='w-[81%] mx-32 mt-5 rounded-3xl focus:ring-1 outline-none focus:ring-orange-600 focus:bg-white bg-slate-100 p-2' id="" />
                    </div>
                    <div>
                        <textarea name="" title='Please fill in this field' className='p-2 mx-32 rounded-lg outline-none focus:ring-1 mt-5 focus:ring-orange-600 focus:bg-white bg-slate-100' placeholder='Message *' id="" cols="164" rows="10"></textarea>
                    </div>
                    <div>
                        <button className='bg-orange-600 absolute left-[650px] mt-5 p-3 w-1/6 hover:bg-orange-400 text-slate-200 rounded-3xl'>Send Message</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
