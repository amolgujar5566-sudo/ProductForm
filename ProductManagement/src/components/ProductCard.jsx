const ProductCard = ({values,deleteBtn,editBtn}) => {
  return (
    <div className="bg-white h-100 rounded-xl shadow-md overflow-hidden border border-gray-200 max-w-sm">

      {/* Product Image */}
      <div className="h-[50%] bg-gray-100 flex items-center justify-center ">
        <img className="h-full object-fit w-full rounded-2xl p-3 "  src={values.Image} alt="" />
      </div>

      {/* Product Details */}
      <div className="p-5">

        <div className="flex justify-between items-center mb-3">
          <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
            {values.Category}
          </span>
        </div>

          <div>
            <span className="text-green-600 font-semibold">
            {values.Price}
          </span>
          </div>

        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {values.Name}
        </h2>


        {/* Buttons */}
        <div className="flex gap-3 ">
          <button onClick={()=>editBtn(values.id)} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Edit
          </button>

          <button onClick={()=>deleteBtn(values.id)} className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
            Delete
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductCard;