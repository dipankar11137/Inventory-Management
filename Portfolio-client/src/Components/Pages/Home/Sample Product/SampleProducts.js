import React, { useEffect, useState } from 'react';
import useUser from '../../../../hooks/useUser';
import SampleProduct from './SampleProduct';

const SampleProducts = () => {
  const [products, setProduct] = useState([]);
  const user = useUser()


   useEffect(() => {
     fetch(`http://localhost:5000/sample`)
       .then(res => res.json())
       .then(data => {
         setProduct(data);
       });
   }, [products]);
  return (
    <div className="mx-16 mt-10">
      <div className="py-3 mb-5  text-center text-4xl  font-serif text-indigo-50 bg-slate-900 rounded-t-lg">
        Sample Products
      </div>

      <div className="grid grid-cols-5 gap-4">
        {products.slice(-5).reverse().map(product => (
          <SampleProduct key={product._id} product={product} user={user[0]}/>
        ))}
      </div>
    </div>
  );
};

export default SampleProducts;