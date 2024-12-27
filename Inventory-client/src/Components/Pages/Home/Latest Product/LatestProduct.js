import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buy from '../Buy/Buy';

const LatestProduct = () => {
  const [products, setProduct] = useState([])
  const navigator=useNavigate()
  
  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [products])
   const handleBuy = id => {
     navigator(`/buyNow/${id}`);
   };

  return (
    <div className="mb-14">
      <div>
        <h1 className="text-center bg-slate-800 text-5xl text-indigo-100 font-serif p-3">
          Our Latest Product
        </h1>
      </div>
      <div className="grid grid-cols-6 gap-4 mx-10 mt-5">
        {products
          .slice(0, 6)
          .reverse()
          .map(product => (
            <Buy key={product._id} product={product} handleBuy={handleBuy} />
          ))}
      </div>
    </div>
  );
};

export default LatestProduct;