  import { useEffect, useState } from "react";

  const ProductForm = ({setProducts,edit,setEdit,setToggle}) => {

  const [productData, setProductData] = useState({
    Name:"",
    Category:"",
    Price:"",
    Image:"",
  })

 useEffect(()=>{
  if(edit){
    setProductData({
      Name:edit.Name,
      Category:edit.Category,
      Price:edit.Price,
      Image:edit.Image
    })
  }
 },[edit])

 const [errors, setErrors] = useState({})

const validate = () => {
  const newErrors = {}

  if (productData.Name.trim().length < 3) {
    newErrors.Name = "Minimum 3 characters required"
  }
  if (Number(productData.Price) <= 0) {
    newErrors.Price = "Price should be greater than 0"
  }
  if (!productData.Category) {
    newErrors.Category = "Select a category"
  }
  if (!/^https?:\/\/\S+$/.test(productData.Image.trim())) {
    newErrors.Image = "invalid image URL"
  }

  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}

  const handleSubmit=(e)=>{
    e.preventDefault()

    if (!validate()) return 

    setProducts((prev)=>{
      let updatedProducts
      if(edit){
        updatedProducts=prev.map((p)=>p.id===edit.id?{...p,...productData}:p)
      }else{
        updatedProducts=[...prev,{...productData,id:crypto.randomUUID()}]
      }
      localStorage.setItem('Product',JSON.stringify(updatedProducts))
      return updatedProducts
    })

    setProductData({
      Name:"",
    Category:"",
    Price:"",
    Image:"",
    })
    setEdit(null)
    setToggle(false)

  }
  
    return (
      <div className="bg-white p-6 rounded-xl w-120 justify-center items-center shadow-md border border-gray-200">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {edit?'Edit Product':'Add New Product'}
        </h2>

        <form onSubmit={handleSubmit}
        className="space-y-4">

          <div>
            <label className="block text-sm font-medium mb-2">
              Product Name
            </label>
            <input onChange={(e)=>setProductData({...productData,Name:e.target.value})}
            value={productData.Name}
              type="text"
              placeholder="Enter product name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.Name && <p className="text-red-500 text-sm mt-1">{errors.Name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Price
            </label>
            <input onChange={(e)=>setProductData({...productData,Price:e.target.value})}
            value={productData.Price}
              type="number"
              placeholder="Enter price"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.Price && <p className="text-red-500 text-sm mt-1">{errors.Price}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Category
            </label>
            <select onChange={(e)=>setProductData({...productData,Category:e.target.value})}
            value={productData.Category}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Category</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Accessories</option>
              <option>Other</option>
            </select>
            {errors.Category && <p className="text-red-500 text-sm mt-1">{errors.Category}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Image URL
            </label>
            <input onChange={(e)=>setProductData({...productData,Image:e.target.value})}
            value={productData.Image}
              type="text"
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.Image && <p className="text-red-500 text-sm mt-1">{errors.Image}</p>}
          </div>

          <button 
          
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
          <h2>{edit?'Edit Product':'Add Product'}</h2>
          </button>

        </form>
      </div>
    )
  }

  export default ProductForm;
