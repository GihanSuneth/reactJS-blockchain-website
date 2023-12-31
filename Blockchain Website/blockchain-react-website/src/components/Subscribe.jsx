import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-ful px-4 py-16 bg-black text-white text-center'>
        <h1>Join DeXi Community</h1>
        <div className='py-4'>
            <input className='p-3 rounded-3xl mr-4' type="email" placeholder='Enter your email' />
            <button>Sign Up</button>
        </div>
        <div className='flex items-center justify-center py-2'>
            <input className='mr-2' type='checkbox' />
            <p>Yes, I agree to recieve email communications from DeXi.</p>
        </div>
    </div>
  )
}

export default Subscribe