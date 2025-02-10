import react from 'react'
import Cart from "../Assets/Cart/Cart.jpg"
import { IoMdClose } from "react-icons/io";

const CartPage = () => {
    return (
        <>
            <div className="bg-white pb-5">
                <div className="py-10 px-36">
                    <div className="flex flex-col justify-end items-center py-10">
                        <div className="font-Oswal_dSerif text-4xl font-medium pb-2">
                            SHOPPING CART
                        </div>
                        <div className="border-b-[1px] border-[#6c3] w-[60%]" />
                    </div>

                    <div className=' p-5 gap-x-4 bg-pink-500 flex sm:flex-row flex-row-reverse justify-center items-start'>

                        <div className='flex w-full h-80 bg py-5  bg-red-200'>
                            <div className=' flex items-center '>
                                <img className='object-cover h-80 w-auto' src={Cart} alt="cart" />
                            </div>
                            <div className="px-4 w-full flex justify-between p font-medium font-Oswal_dSerif text-black">
                                <div>
                                    <h1 className="text-sm ">ELIMINATOR ABS</h1>
                                    <h1 className="text-2xl">PREMIUM COVER</h1>
                                    <p className="font-Fira_Serif font-normal text-base text- border-b-2 border-[#6c3]" >Item# K99995-869A</p>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                     <p className="text-2xl font-medium">MSRP:$184.95</p>
                                     <div className='flex items-center text-center gap-x-2 cursor-pointer '>
                                         
                                         <h3>x</h3>
                                         <h3>remove</h3>
                                         </div>
                                     </div>
                            </div>
                        </div>

                        <div className='h-[460px] w-[575px] bg-violet-600'>1</div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default CartPage