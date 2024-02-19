import React, { useContext, useState } from 'react'
import { MainContext } from '../../App'
import { TbStarFilled } from "react-icons/tb";
import { TbStar } from "react-icons/tb";



const SingleProduct = () => {

    const { single, navigate, addToCart } = useContext(MainContext)

    const [img, setImg] = useState(single.img)

    const GoBack = () => {
        navigate(-1)
    }

    return (
        <>
            <div className='flex flex-1 justify-center font-semibold text-xl '>
                <h3>{single.brand}'s </h3>
                <h3 className='ml-2'>{single.modelName} </h3>
            </div>
            <div className='relative'>

                <div className="grid grid-rows-3 mx-36 mt-10 grid-flow-col gap-4">
                    <div className="border-2 border-slate-600 rounded-lg hover:scale-105 transition-all duration-500 cursor-pointer row-span-3 h-[60vh]"><img className='w-[100%] h-[100%]' src={img} alt="Products" /></div>
                    <div className="border-2 border-slate-600 rounded-lg hover:scale-105 transition-all duration-500 cursor-pointer col-span-2 h-[28vh]"><img className='w-[100%] h-[100%]' src={single.img2} alt="Products" /></div>
                    <div className="border-2 border-slate-600 rounded-lg hover:scale-105 transition-all duration-500 cursor-pointer col-span-2 h-[29vh]"><img className='w-[100%] h-[100%]' src={single.img3} alt="Products" /></div>
                    <div className="border-2 border-slate-600 rounded-lg hover:scale-105 transition-all duration-500 cursor-pointer row-span-3 h-[60vh]"><img className='w-[100%] h-[100%]' src={single.img4} alt="Products" /></div>
                </div>
                <div className='absolute top-[80%] left-36'>
                    <h3 className='font-semibold text-2xl w-[50%]'>{single.title}</h3>
                    <h3 className='mt-3 text-2xl font-semibold'>Descripton</h3>
                    <h3 className='w-[50%] mt-2'>{single.aboutDevice}</h3>
                </div>
                <div className='absolute top-[80%] right-[10%] border-l-2 h-[50vh]'>
                    <h3 className='text-3xl text-orange-600 ml-5'>Rs. {single.price}</h3>
                    <div className='flex flex-1 mt-3 ml-5 '>
                        <TbStarFilled className='text-orange-600' /><TbStarFilled className='text-orange-600' /><TbStarFilled className='text-orange-600' /><TbStarFilled className='text-orange-600' /><TbStar />
                    </div>
                    <div className='ml-5 w-[100%] mt-3 font-semibold'>
                        <h3 className='border-b-2'>Brand: <span className='text-orange-600'>{single.brand}</span></h3>
                        <h3 className='border-b-2'>Model Name: <span className='text-orange-600'>{single.modelName}</span></h3>
                        <h3 className='border-b-2'>Type: <span className='text-orange-600'>{single.type}</span></h3>
                        <h3 className='border-b-2'>Technology: <span className='text-orange-600'>{single.technology}</span></h3>
                        <h3 className='border-b-2'>System: <span className='text-orange-600'>{single.system}</span> </h3>
                    </div>

                    <div>
                        <button onClick={() => addToCart(single.id)} className='w-[25vh] p-3 bg-orange-600 mt-6 ml-10 rounded-xl font-semibold text-white'>Add to Cart</button>
                        <button onClick={GoBack} className='w-[25vh] p-3 bg-orange-600 mt-6 ml-10 rounded-xl font-semibold text-white'>Go Back</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SingleProduct



