import react from 'react'
import Cart from "../Assets/Cart/Cart.jpg"
import { IoMdClose } from "react-icons/io";

const CartPage = () => {
    return (
        <>
            <div className="bg-[#F1F1F1] pb-5">
                <div className="py-10 lg:px-36">
                    <div className="flex flex-col justify-end items-center py-10">
                        <div className="font-Oswal_dSerif text-4xl font-medium pb-2">
                            SHOPPING CART
                        </div>
                        <div className="border-b-[1px] border-[#6c3] w-[60%]" />
                    </div>

                    <div className=' p-5 gap-4  flex md:flex-row flex-col justify-center items-start'>

                        <div className='Cshadow flex flex-col lg:flex-row w-full  bg py-5  bg-white'>
                            <div className=' flex justify-center items-center '>
                                <img className='object-cover lg:h-80 md:h-72 h-96 ' src={Cart} alt="cart" />
                            </div>
                            <div className="px-4 w-full flex justify-between p font-medium font-Oswal_dSerif text-black">
                                <div>
                                    <h1 className="text-sm  pt-2 ">ELIMINATOR ABS</h1>
                                    <h1 className="text-sm lg:text-2xl ">PREMIUM COVER</h1>
                                    <p className="font-Fira_Serif font-normal text-base text- border-b-2 border-[#6c3]" >Item# K99995-869A</p>
                                    <div>
                                        <h1 className='font-Oswal_dSerif py-1 text-sm lg:text-xl'>QTY:</h1>
                                        <div className='flex gap-2'>
                                            <select className="bg-white rounded-[0.25rem] border-[1px] border-[#ced4da]" >
                                                <option value="1" selected="">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                            <button className='font-Oswal_dSerif text-sm text-white bg-black font-medium px-4 py-1 '>UPDATE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className=" text-sm lg:text-2xl font-medium">MSRP:$184.95</p>
                                    <div className=' text-xs lg:text-base flex items-center text-center gap-x-2 cursor-pointer font-normal border-b-2 border-black'>

                                        <h3>X</h3>
                                        <h3>remove</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=' Cshadow h-[360px] w-full md:w-[575px] bg-[#e5e5e9]'>
                            <div className="px-4 w-full flex justify-between p font-medium font-Oswal_dSerif text-black">
                                <div className='w-full'>
                                    <div className='py-4 w-full'>
                                        <h1 className="py-2 text-2xl ">ORDER SUMMARY</h1>
                                        <div className=" border-b-[1px] border-[#6c3] w-[100%]" />
                                    </div>
                                    <div className='w-full'>
                                        <h1 className="text-sm ">APPLY DISCOUNT</h1>
                                        <h1 className="text-sm pb-1">PROMO CODE</h1>
                                        <input id="ShoppingPromocode" type="text" className="w-1/2 bg-white rounded-[0.25rem] border-[1px] border-[#ced4da] mb-4 px-2 py-1 text-center text-sm " aria-label="Promo Code"></input>
                                        <div className='w-full'>
                                            <button className='font-Oswal_dSerif text-sm text-white bg-black font-medium px-6 py-2 w-full'>UPDATE</button>
                                        </div>
                                        <div className='flex justify-between py-2'>
                                            <h1 className="text-sm pt-2">SUBTOTAL <span className='text-[#ced4da]'>(2 ITEM)</span></h1>
                                            <p className="font-Fira_Serif text-base pt-2 font-medium" >$ 115</p>
                                        </div>
                                        <div className='w-full'>
                                            <button className='font-Oswal_dSerif text-sm text-white bg-black font-medium px-6 py-2 w-full'>CHECK OUT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default CartPage