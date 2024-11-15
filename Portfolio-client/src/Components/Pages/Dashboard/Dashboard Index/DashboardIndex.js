import React, { useEffect, useState } from 'react';
import Charts from './Charts';

const DashboardIndex = () => {
  const [products, setProducts] = useState([]);
  const [totalProductQuantity, setTotalProductQuantity] = useState(0);
  const [totalProductPrice, setTotalProductPrice] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);

        // Calculate total quantity and total price of products
        const totalQuantity = data.reduce(
          (sum, product) => sum + (parseInt(product.quantity) || 0),
          0
        );
        const totalPrice = data.reduce(
          (sum, product) =>
            sum +
            (parseInt(product.price) || 0) * (parseInt(product.quantity) || 0),
          0
        );

        setTotalProductQuantity(totalQuantity);
        setTotalProductPrice(totalPrice);
      });
  }, [products]);
  const [buyProducts, setBuyProducts] = useState([]);
  const [totalBuyProductQuantity, setTotalBuyProductQuantity] = useState(0);
  const [totalBuyProductPrice, setTotalBuyProductPrice] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/buy`)
      .then(res => res.json())
      .then(data => {
        setBuyProducts(data);

        // Calculate total quantity and total price of products
        const totalQuantity = data.reduce(
          (sum, product) => sum + (parseInt(product.orderQuantity) || 0),
          0
        );
        const totalPrice = data.reduce(
          (sum, product) =>
            sum +
            (parseInt(product.product.price) || 0) *
              (parseInt(product.orderQuantity) || 0),
          0
        );

        setTotalBuyProductQuantity(totalQuantity);
        setTotalBuyProductPrice(totalPrice);
      });
  }, [buyProducts]);
  console.log(buyProducts);
  
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl py-3 mt-[1px]  font-semibold text-indigo-50 bg-slate-600">
          Our Dashboard
        </h1>
      </div>
      <div className="grid grid-cols-4 px-10 py-10 gap-10">
        <div className=" border-slate-600 py-7 rounded-lg shadow-lg text-center bg-lime-200">
          <h1 className="text-4xl font-bold text-indigo-900">
            {totalProductQuantity}
          </h1>
          <h1 className="text-xl font-semibold mt-2">Total Product</h1>
        </div>
        <div className=" border-slate-600 py-7 rounded-lg shadow-lg text-center bg-indigo-200">
          <h1 className="text-4xl font-bold text-indigo-900"> ৳ {totalProductPrice}</h1>
          <h1 className="text-xl font-semibold mt-2">Total Price</h1>
        </div>
        <div className=" border-slate-600 py-7 rounded-lg shadow-lg text-center bg-cyan-200">
          <h1 className="text-4xl font-bold text-indigo-900">{totalBuyProductQuantity}</h1>
          <h1 className="text-xl font-semibold mt-2">Buy Product</h1>
        </div>
        <div className=" border-slate-600 py-7 rounded-lg shadow-lg text-center bg-green-200">
          <h1 className="text-4xl font-bold text-indigo-900"> ৳ {totalBuyProductPrice}</h1>
          <h1 className="text-xl font-semibold mt-2">Buy Price</h1>
        </div>
      </div>
      <Charts />
    </div>
  );
};

export default DashboardIndex;