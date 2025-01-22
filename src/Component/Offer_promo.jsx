import React from 'react'
import { motion } from 'framer-motion';
import viewOffer from '../Assets/Offerimg/viewOffer.jpg'
import viewOffer1 from '../Assets/Offerimg/viewOffer1.jpg'
import viewOffer2 from '../Assets/Offerimg/viewOffer2.jpg'
import viewOffer3 from '../Assets/Offerimg/viewOffer3.jpg'
import viewOffer4 from '../Assets/Offerimg/viewOffer4.jpg'

const Offer_promo = () => {
  return (
    <>
    <div className='bg-[#F1F1F1] py-10 px-20 '>
        <div className='flex justify-center items-center py-10'>
            <h1 className='font-Oswal_dSerif text-4xl font-medium'>OFFERS & PROMOTIONS</h1>
        </div>
        <div className='flex justify-center items-center' >
            <div className='grid grid-cols-3 gap-3'>
                <motion.div whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className='offer cursor-pointer h-[520px] w-[390px]  col-span-1 max-[700px]:col-span-3'>
                    <img className='object-cover' src={viewOffer} alt='lol'/>
                    <div className='p-5 leading-5 text-black'>
                        <h2 className='font-Oswal_dSerif font-medium text-[16px] py-1'>VIEW OFFERS</h2>
                        <p className='font-Fira_Serif font-normal text-[13px]'>*Model &amp; year exclusions apply.&nbsp;May be combined with promotional retail financing rates on select models; see your dealer for more details.&nbsp;Incentives are available at participating Kawasaki dealerships. Offer valid through 01/31/2025. Subject to change without notice. Offer available on approved purchases of select new unregistered Kawasaki vehicles.</p>
                        <h1 className='font-Fira_Serif font-bold text-[13px] py-2'>VALID THROUGH: JAN 31, 2025</h1>
                    </div>
                </motion.div>
               
                <motion.div whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className='offer cursor-pointer h-[520px] w-[390px]  col-span-1 max-[700px]:col-span-3'>
                    <img className='object-cover' src={viewOffer1} alt='lol'/>
                    <div className='p-5 leading-5 text-black'>
                        <h2 className='font-Oswal_dSerif font-medium text-[16px] py-1'>VIEW OFFERS</h2>
                        <p className='font-Fira_Serif font-normal text-[13px]'>*Model &amp; year exclusions apply.&nbsp;May be combined with promotional retail financing rates on select models; see your dealer for more details.&nbsp;Incentives are available at participating Kawasaki dealerships. Offer valid through 01/31/2025. Subject to change without notice. Offer available on approved purchases of select new unregistered Kawasaki vehicles.</p>
                        <h1 className='font-Fira_Serif font-bold text-[13px] py-2'>VALID THROUGH: JAN 31, 2025</h1>
                    </div>
                </motion.div>
                
                 <motion.div whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className='offer cursor-pointer h-[520px] w-[390px]  col-span-1 max-[700px]:col-span-3'>
                    <img className='object-cover' src={viewOffer2} alt='lol'/>
                    <div className='p-5 leading-5 text-black'>
                        <h2 className='font-Oswal_dSerif font-medium text-[16px] py-1'>GIFTS FOR THE WHOLE FAMILY</h2>
                        <p className='font-Fira_Serif font-normal text-[13px]'>Find something for everyone, including the kiddos, the garage, and more. Plus, enjoy free shipping on orders of $100 or over!</p>
                        <h1 className='font-Fira_Serif font-bold text-[13px] py-2'>VIEW HOLIDAY GIFT GUIDES VALID THROUGH: JAN 31, 2025</h1>
                    </div>
                </motion.div>
                
                <div className=' col-span-3 flex justify-center gap-3  max-[700px]:px-0 max-[700px]:flex-col'>
                <motion.div whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className='offer cursor-pointer h-[520px] w-[390px]  col-span-1 max-[700px]:col-span-3'>
                    <img className='object-cover' src={viewOffer3} alt='lol'/>
                    <div className='p-5 leading-5 text-black'>
                        <h2 className='font-Oswal_dSerif font-medium text-[16px] py-1'>SYNC WITH YOUR RIDE LIKE NEVER BEFORE</h2>
                        <p className='font-Fira_Serif font-normal text-[13px]'>RIDEOLOGY THE APP POWERSPORTS puts you in the driver’s seat. With convenient Bluetooth® connection, get important vehicle info and access to special tools right on your smartphone. Track your rides and relive the excitement with trip logs, share your adventures with friends, and stay updated on vehicle care with helpful maintenance notes and records.</p>
                        <h1 className='font-Fira_Serif font-bold text-[13px] py-2'>VIEW HOLIDAY GIFT GUIDES VALID THROUGH: JAN 31, 2025</h1>
                    </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className='offer cursor-pointer h-[520px] w-[390px]  col-span-1 max-[700px]:col-span-3'>
                    <img className='object-cover' src={viewOffer4} alt='lol'/>
                    <div className='p-5 leading-5 text-black'>
                        <h2 className='font-Oswal_dSerif font-medium text-[16px] py-1'>VOLUNTARY RECALL NOTICE</h2>
                        <p className='font-Fira_Serif font-normal text-[13px]'>Kawasaki, in cooperation with the US Consumer Product Safety Commission, is voluntarily recalling 2024 MULE PRO-FX™, PRO-FXR™ & PRO-FXT™ 1000 models.</p>
                        <h1 className='font-Fira_Serif font-bold text-[13px] py-2'>VIEW HOLIDAY GIFT GUIDES VALID THROUGH: JAN 31, 2025</h1>
                    </div>
                </motion.div>
                </div>
                
            </div>
        </div>
   </div>
   </>
  )
}

export default Offer_promo