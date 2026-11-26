  import React, { useState } from 'react'
  import Navbar from './components/Navbar'
  import ProductForm from './components/ProductForm'
  import ProductList from './components/ProductList'

  function App() {

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem('Product')) || []
  )

  const [edit, setEdit] = useState(null)
  
const [search, setSearch] = useState('')


  const deleteBtn=(id)=>{
   let updated=products.filter((val)=>{
    return val.id!==id
  })
  localStorage.setItem('Product', JSON.stringify(updated))
  setProducts(updated)
  }

  const editBtn=(id)=>{
  let edited=products.find((val)=>{
    return val.id === id
  })
  setEdit(edited)
  console.log(edited);
  
  }
  

    return (
      <div>
        <div><Navbar/></div>
        <div className='grid grid-cols-2 gap-5 p-5'>
          <ProductForm  setProducts={setProducts} edit={edit} products={products} setEdit={setEdit}/>
          <ProductList deleteBtn={deleteBtn} editBtn={editBtn} products={products} search={search} setSearch={setSearch}/>
        </div>
        
      </div>
    )
  }

  export default App