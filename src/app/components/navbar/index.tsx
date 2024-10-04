import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full md:w-[1400px] px-4 flex justify-between items-center pt-5'>
        <h3 className='uppercase text-xl lg:text-2xl font-bold text-primary'>
          <span className='text-red-400'>Kilu💗</span>
        </h3>    

        <ul className=''>
            <li className='inline-block ml-8'>Home</li>
            <li className='inline-block ml-8'>Productos</li>
        </ul>
    </nav>
  )
}

export default Navbar