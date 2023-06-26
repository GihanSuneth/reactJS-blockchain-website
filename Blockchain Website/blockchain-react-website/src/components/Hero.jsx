import React from 'react'

import heroVid from '../assests/pexels.mp4'
import FakeCounter from './FakeCounter'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
        <video 
        className='object-cover h-full w-full absolute -z-10' 
        src={heroVid} 
        autoPlay 
        loop 
        muted
        />
        <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
            <h1>Decentralized</h1>
            <h1 className='py-2'><span className='blue'>Trading</span> Protocol</h1>
            <p className='text-xl py-4'>Guaranteed liquidity trading for millions of users and top Ethereum applications.</p>
            <div>
                <button className='m-2'>Use DeXi</button>
                <button className='btn btn-outline'>FAQ</button>
            </div>
        </div>
        <div>
            <FakeCounter />
        </div>
    </div>
  )
}

export default Hero