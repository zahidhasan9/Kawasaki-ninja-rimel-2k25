import React from 'react'

const Offer_promo = () => {
  return (
    <>
    <div className='bg-[#F1F1F1] py-10 px-20'>
        <div className='flex justify-center items-center py-10'>
            <h1 className='font-Oswal_dSerif text-3xl font-medium'>OFFERS & PROMOTIONS</h1>
        </div>
        <div className=' px-10' >
            <div className='grid grid-cols-3 gap-2'>
                <div className='h-36 w-full bg-red-500 col-span-1 max-[700px]:col-span-3'>1</div>
                <div className='h-36 w-full bg-red-500 col-span-1 max-[700px]:col-span-3'>2</div>
                <div className='h-36 w-full bg-red-500 col-span-1 max-[700px]:col-span-3'>3</div>
                <div className='h-36 w-full  col-span-3 flex gap-2 px-20 max-[700px]:px-0 max-[700px]:flex-col'>
                    <div className='h-36 w-full bg-red-700'>1</div>
                    <div className='h-36 w-full bg-red-400'>2</div>
                </div>
                
            </div>
        </div>
   </div>
   </>
  )
}

export default Offer_promo