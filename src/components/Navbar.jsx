import { useState } from 'react'
import { close, menu, logo } from '../assets'
import { navLinks } from '../constants/index'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar"> 
      <img src={logo} alt="AINEED" className='w-[122px] h-[22px]' />    

      <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-comfortaa font-normal cursor-pointer text-[16px] hover:text-dimBlue ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white `}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul> 

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev) } />
        <div className={`${toggle ? 'flex' : 'hidden' } p-6 bg-secondary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-comfortaa font-normal cursor-pointer text-[16px] hover:text-dimBlue ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white `}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul> 
        </div>
      </div>
        
    </nav>
  )
}



export default Navbar