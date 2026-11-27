import React from 'react'

function Navbar({setToggle}) {
  return (
    <div className='bg-gray-500 h-16 flex items-center justify-between p-2'>
      <div>
        <img className='h-12 w-12 rounded-full' src="https://i.pinimg.com/1200x/32/33/ae/3233ae3ca5611af9c5def663cd1aad46.jpg" alt="" />
      </div>
      <h1 className="text-2xl font-semibold text-black font-mono">My Products</h1>
      <div>
        <button onClick={()=>setToggle(true)}
         className='bg-blue-400 px-3 py-2 rounded-2xl hover:scale-95'>
          Add Product
        </button>
      </div>
    </div>
  )
}

export default Navbar