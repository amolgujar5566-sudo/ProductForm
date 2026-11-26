import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({products,deleteBtn,editBtn,search,setSearch}) => {

  const [searchData, setSearchData] = useState(search)

const filterdProducts=products.filter((products)=>{
  return products.Name .toLowerCase().includes(searchData.toLowerCase()) ||
   products.Category.toLowerCase().includes(searchData.toLowerCase())
})




useEffect(()=>{
  
  let timeout=setTimeout(() => {
    setSearchData(search)
  }, 700);
  return()=>clearTimeout(timeout)
},[search])



  return (
    <div className="w-full">

      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            My Products
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Manage all your products here
          </p>
        </div>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">
          {filterdProducts.length}
        </span>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input onChange={(e)=>setSearch(e.target.value)}
        value={search}
          type="text"
          placeholder="Search products..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {
          filterdProducts.map((product)=>{
            return <ProductCard key={product.id} values={product} deleteBtn={deleteBtn} editBtn={editBtn}/>
          })
        }

      </div>

    </div>
  )
}

export default ProductList;
