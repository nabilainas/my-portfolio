import React from 'react'
import {git, linkedin} from '../assets/index'

const Footer = () => {
  return (
    <div className='bg-primary m-5 p-5 text-white text-center font-comfortaa flex justify-between border-t-[1px] '>
      <div className='flex justify-around '>
        <a href="https://github.com/nabilainas" target="_blank"><img src={git} alt='logo git' className='w-[30px] h-[30px] m-[1px]'/></a>
        <a href="www.linkedin.com/in/aineed" target="_blank"><img src={linkedin} alt='logo git' className='w-[30px] h-[30px] m-[1px]'/></a>
      </div>
      <div>coded with ❤️ by @nabilainas</div>
    </div>
  )
}

export default Footer