import React from 'react';

const Buy = ({ product, handleBuy }) => {
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure>
        <img className="w-full h-44" src={product?.img} alt={product?.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.name}</h2>
        <p>
          Quantity: <span className="font-semibold">{product?.quantity}</span>
        </p>
        <p>
          Price:{' '}
          <span className="font-semibold text-primary">
            {product?.price} BDT
          </span>
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleBuy(product._id)}
            className="btn btn-primary btn-xs text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buy;