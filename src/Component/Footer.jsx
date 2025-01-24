import React from 'react'

const Footer = () => {
  return (
   <>
    <div>
        <div className='bg-[#0F0F10] text-white'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-10 cursor-pointer'>
                
                <div className='col-span-1' >
                <div className=' font-Oswal_dSerif font-bold text-2xl py-2 '>
                    <h1 className=''>ABOUT KAWASAKI</h1>
                    <div className='border-b-[1px] border-[#6c3] ' />
                </div>
                <div className='font-Fira_Serif text-sm font-extralight'>
                    <p>Kawasaki History</p>
                    <p>Kawasaki Companies</p>
                    <p>International Sites</p>
                    <p>Kawasaki Technology</p>
                    <p>Legal Policies</p>
                    <p>Manufacturing Careers</p>
                </div>
                </div>

                <div className='col-span-1' >
                <div className=' font-Oswal_dSerif font-bold text-2xl py-2 '>
                    <h1 className=''>RESOURCES</h1>
                    <div className='border-b-[1px] border-[#6c3] ' />
                </div>
                <div className='font-Fira_Serif text-sm font-extralight'>
                    <p>Corporate Contact Info</p>
                    <p>Kawasaki Support</p>
                    <p>Safety Resources</p>
                    <p>Racing Contingency</p>
                    <p>Industry Links</p>
                    <p>E-Commerce Help Center</p>
                </div>
                </div>

                <div className='col-span-1' >
                <div className=' font-Oswal_dSerif font-bold text-2xl py-2 '>
                    <h1 className=''>SERVICE</h1>
                    <div className='border-b-[1px] border-[#6c3] ' />
                </div>
                <div className='font-Fira_Serif text-sm font-extralight'>
                    <p>Awards & Reviews</p>
                    <p>Press Releases</p>
                    <p>Recalls</p>
                    <p>Events</p>
                    <p>Dealer Locator</p>
                    <p>Become a Dealer</p>
                </div>
                </div>

                <div>
                <div className='col-span-1' >
                <div className=' font-Oswal_dSerif font-bold text-2xl py-2 '>
                    <h1 className=''>STAY CONNECTED</h1>
                    <div className='border-b-[1px] border-[#6c3] ' />
                </div>
                <div className='font-Fira_Serif text-sm font-extralight'>
                    <p>Receive the latest news, special offers and exclusives.</p>
                    <div className='py-4'>
                    <button className='px-4 py-2.5 font-Oswal_dSerif text-sm text-black font-bold bg-[#6c3]'>SUBSCRIBE</button>
                    </div>
                    <p>Manage Subscription Preferences</p>
                </div>
                </div>
                </div>

                <div className='col-span-2 md:col-span-3 '>
                    <div className='flex justify-center items-center'>
                        <div>
                            <p className='text-[#6c3] font-Fira_Serif text-sm'>© 2025 Kawasaki Motors Corp., U.S.A. Your Privacy Rights </p>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
   </>
  )
}

export default Footer