import React from 'react'

const Skills = () => {
  return (
    <div className='flex font-comfortaa justify-center text-white' id='skills'>
      <div className='relative max-w-[500px] w-[100%] bg-dimBlue hover:bg-dimsecondBlue m-20 p-3 rounded-lg'>
          <h1 className='text-xl m-3 text-center font-medium text-white bg-primary rounded-lg'>Skills</h1>
          <div className='w-[100%] mt-[25px] mb-0'>
            <span className='block text-lg'>Python</span>
            <div className='h-[8px] w-[100%] rounded-[6px] mt-[6px] bg-primary'>
              <span className='relative block h-[100%] w-[60%] rounded-[6px] bg-secondary  '>
                <span className='absolute right-[-14px] top-[-28px] text-[12px] bg-secondary p-1 rounded-lg animate-bounce'>60%</span>
              </span>
            </div>
          </div>
          <div className='w-[100%] mt-[25px] mb-0'>
            <span>Javascript</span>
            <div className='h-[8px] w-[100%] rounded-[6px] mt-[6px] bg-primary'>
              <span className='relative block h-[100%] w-[40%] rounded-[6px] bg-secondary'>
                <span className='absolute right-[-14px] top-[-28px] text-[12px] bg-secondary p-1 rounded-lg animate-bounce'>40%</span>
              </span>
            </div>
          </div>
          <div className='w-[100%] mt-[25px] mb-0'>
            <span>Powershell</span>
            <div className='h-[8px] w-[100%] rounded-[6px] mt-[6px] bg-primary'>
              <span className='relative block h-[100%] w-[50%] rounded-[6px] bg-secondary' >
                <span className='absolute right-[-14px] top-[-28px] text-[12px] bg-secondary p-1 rounded-lg animate-bounce'>50%</span>
              </span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Skills