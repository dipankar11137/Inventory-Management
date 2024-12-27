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
      <div className="shadow-md flex items-center gap-7">
        <h1 className="pl-20 text-4xl py-3 mt-[1px]  font-semibold text-secondary">
          Our Dashboard
        </h1>
        <img
          className='h-16 w-16'
          src="https://media.lordicon.com/icons/wired/lineal/230-arrow-big-right.gif"
          alt=""
        />
        <hr />
      </div>
      <div className="grid grid-cols-4 px-10 py-10 gap-10 text-indigo-100">
        <div className=" border-slate-600 py-7 rounded-lg shadow-lg text-center bg-secondary">
          <h1 className="text-4xl font-bold text-indigo-100">
            {totalProductQuantity}
          </h1>
          <h1 className="text-xl font-semibold mt-2">Total Product</h1>
        </div>
        <div className=" border-slate-600 py-7 rounded-lg shadow-lg text-center bg-primary">
          <h1 className="text-4xl font-bold text-indigo-100">
            {' '}
            ৳ {totalProductPrice}
          </h1>
          <h1 className="text-xl font-semibold mt-2">Total Price</h1>
        </div>
        <div className=" border-slate-600 py-7 rounded-lg shadow-lg text-center bg-cyan-900">
          <h1 className="text-4xl font-bold text-indigo-100">
            {totalBuyProductQuantity}
          </h1>
          <h1 className="text-xl font-semibold mt-2">Buy Product</h1>
        </div>
        <div className=" border-slate-600 py-7 rounded-lg shadow-lg text-center bg-green-900">
          <h1 className="text-4xl font-bold text-indigo-100">
            {' '}
            ৳ {totalBuyProductPrice}
          </h1>
          <h1 className="text-xl font-semibold mt-2">Buy Price</h1>
        </div>
      </div>
      <Charts />
    </div>
  );
};

export default DashboardIndex;