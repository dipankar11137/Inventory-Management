import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ManageBuy from './ManageBuy';

const ManageBuys = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
     fetch(`http://localhost:5000/buy`)
       .then(res => res.json())
       .then(data => setProducts(data));
   }, [products]);

   const handleDelete = id => {
     const proceed = window.confirm('Are You Sure ?');
     if (proceed) {
       const url = `http://localhost:5000/buy/${id}`;
       fetch(url, {
         method: 'DELETE',
       })
         .then(res => res.json())
         .then(data => {
           const remaining = products.filter(product => product._id !== id);
           setProducts(remaining);
           toast.success('Successfully Delete ');
         });
     }
   };
  return (
    <div className="font-serif mb-20">
      <h1 className="text-center text-4xl py-3 mt-[1px]  font-semibold text-indigo-50 bg-slate-600">
        Buy Products
      </h1>

      <div className="overflow-x-auto mt-3 mx-5">
        <table className="table  w-full text-white ">
          <thead>
            <tr className="text-3xl bg-slate-900  text-center">
              <th className="bg-secondary text-xl border-r-[1px] "></th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
                Product Name
              </th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
                Seller Name
              </th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
                Buyer Name
              </th>
              <th className="bg-secondary  text-lg border-r-[1px] font-thin">
                date
              </th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
                Quantity
              </th>
              <th className="bg-secondary  text-lg border-r-[1px] font-thin">
                Price
              </th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
               Status
              </th>
           
              <th className="bg-secondary text-lg font-thin">Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ManageBuy
                key={product._id}
                product={product}
                index={index + 1}
                handleDelete={handleDelete}
              ></ManageBuy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBuys;