import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ShowSample = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
     fetch(`http://localhost:5000/sample`)
       .then(res => res.json())
       .then(data => setProducts(data));
   }, [products]);

   const handleDelete = id => {
     const proceed = window.confirm('Are You Sure ?');
     if (proceed) {
       const url = `http://localhost:5000/sample/${id}`;
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
        Show Sample
      </h1>

      <div className="overflow-x-auto mt-3 mx-5">
        <table className="table  w-full text-white ">
          <thead>
            <tr className="text-3xl bg-slate-900  text-center">
              <th className="bg-secondary text-xl border-r-[1px] "></th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
                Name
              </th>
              <th className="bg-secondary text-lg border-r-[1px] font-thin">
                Image
              </th>

              <th className="bg-secondary text-lg font-thin">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.slice().reverse().map((product, index) => (
              <tr key={product._id} className="text-center text-slate-800">
                <th className="bg-slate-200 border-r-[1px] border-slate-900">
                  {index + 1}
                </th>
                <td className="bg-slate-200 border-r-[1px] border-slate-900">
                  <div className="flex items-center">
                    <div>
                      <h1 className="ml-3 text-start">{product?.name}</h1>
                    </div>
                  </div>
                </td>
                <td className="bg-slate-200 border-r-[1px] border-slate-900">
                  <img
                    className="w-20 h-16 rounded-md"
                    src={product?.img}
                    alt={product?.name || 'Product'}
                  />
                </td>
                <td className="bg-slate-200 border-r-[1px] border-slate-900">
                  <button
                    onClick={() => handleDelete(product?._id)}
                    className="btn btn-xs btn-primary"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowSample;