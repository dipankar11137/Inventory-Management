import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Buy from '../Buy/Buy';


const AllProduct = () => {
  const [products, setProduct] = useState([]);
  const navigator=useNavigate()
  
   useEffect(() => {
     fetch(`http://localhost:5000/products`)
       .then(res => res.json())
       .then(data => {
         setProduct(data);
       });
   }, [products]);
    const handleBuy = id => {
      navigator(`/buyNow/${id}`);
  };
  
  const handleClick = () => {
    navigator('/buy')
  }
  return (
    <div className="mx-16 mt-10">
      <div className="py-3 mb-5  text-center text-4xl  font-serif text-indigo-50 bg-slate-900 rounded-t-lg">
        All Product
      </div>
      <div className="grid grid-cols-5 gap-4">
        {products.slice(0, 10).map(product => (
          <Buy key={product._id} product={product} handleBuy={handleBuy} />
        ))}
      </div>
      <div className="mt-5  flex gap-2 items-center justify-end ">
        <button onClick={handleClick} className="flex gap-2 items-center justify-end underline text-xl hover:text-indigo-700">
          Seel All <FaArrowRight className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default AllProduct;