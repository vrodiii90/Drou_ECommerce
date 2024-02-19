import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='mt-20'>
                <div className='grid grid-cols-1 xl:grid-cols-4 mx-32'>
                    <div className='w-52'>
                        <h3 className='font-bold text-xl text-slate-600'>Contact Us</h3>
                        <p className='mt-5'>Drou Demo Store
                            No. 1259 Freedom, New York
                            United States
                            +91-987654321
                            demo@exampledemo.com</p>
                    </div>
                    <div className='list-none w-fit'>
                        <h3 className='font-bold text-xl text-slate-600'>Information</h3>
                        <ul className='mt-5'>
                            <li className='hover:text-orange-600 cursor-pointer'>Product Support</li>
                            <li className='hover:text-orange-600 cursor-pointer mt-3'>Checkout</li>
                            <li className='hover:text-orange-600 cursor-pointer mt-3'>License Policy</li>
                            <li className='hover:text-orange-600 cursor-pointer mt-3'>Affiliate</li>
                        </ul>
                    </div>
                    <div className='list-none w-fit'>
                        <h3 className='font-bold text-xl text-slate-600'>Customer Service</h3>
                        <ul className='mt-5'>
                            <li className='hover:text-orange-600 cursor-pointer'>Help Center</li>
                            <li className='hover:text-orange-600 cursor-pointer mt-3'>Redeem Voucher</li>
                            <li className='hover:text-orange-600 cursor-pointer mt-3'>Contact us</li>
                            <li className='hover:text-orange-600 cursor-pointer mt-3'>Policies </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-bold text-xl text-slate-600'>Download our App</h3>
                        <p className='mt-5'>Download our App and get extra 15% Discount on your first Order..!</p>
                        <div className='flex flex-1 w-40 drop-shadow-xl mt-3'>
                            <img src="../src/img/playstore.png" className='' alt="" />
                            <img src="../src/img/applestore.png" className='' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 border-t-2 border-orange-600 mx-32'>
                <div className='flex justify-between items-center'>
                    <h3 className='inline-block align-middle p-3 text-slate-600'>
                        Copyright © Team90Degree | Built with Drou by Team90Degree.
                    </h3>
                    <img src="../src/img/cards.png" className='w-80 h-fit' alt="" />
                </div>
            </div>
        </>
    )
}

export default Footer
