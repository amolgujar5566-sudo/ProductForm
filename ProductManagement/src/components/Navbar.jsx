import React from 'react'

function Navbar() {
  return (
    <div className='bg-gray-500 h-16 flex items-center justify-between p-2'>
      <div>
        <img className='h-12 w-12 rounded-full' src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
      </div>
      <div className='font-mono flex gap-6 text-xl'>
        <a>Home</a>
        <a>About</a>
        <a>Shop</a>
      </div>
      <div>
        <button className='bg-blue-600 px-3 py-2 rounded-2xl hover:scale-95'>
          Add Product
        </button>
      </div>
    </div>
  )
}

export default Navbar