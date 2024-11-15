import React from 'react';

const SSP = () => {
  return (
    <div className="flex justify-center mt-20 mb-20 bg-slate-700 bg-transparent">
      <div className="grid grid-cols-3 mx-56 gap-10 mt-10 mb-10 ">
        <div>
          <img
            className="h-48"
            // src="https://www.ezeeabsolute.com/images/icons/contactless-bookings.png"
            src="https://static.vecteezy.com/system/resources/thumbnails/001/871/184/small/illustration-for-online-product-shopping-cart-search-e-commerce-and-checkout-on-the-marketplace-can-be-used-for-landing-page-website-web-mobile-apps-posters-flyers-free-vector.jpg"
            alt=""
          />

          <h1 className="font-bold text-3xl mt-3">Search</h1>
          <p>
            Choose your origin, destination, booking dates and search for Hotels
          </p>
        </div>
        <div>
          <img
            className="h-48"
            src="https://eticket.railway.gov.bd/v2/assets/img/home/select.svg"
            alt=""
          />

          <h1 className="font-bold text-3xl mt-3">Select</h1>
          <p> Select your desired Date and choose your Rooms</p>
        </div>
        <div>
          <img
            className="h-48"
            src="https://eticket.railway.gov.bd/v2/assets/img/home/pay.svg"
            alt=""
          />

          <h1 className="font-bold text-3xl mt-3">Pay </h1>
          <p>Pay for the rooms via Debit / Credit Cards or MFS</p>
        </div>
      </div>
    </div>
  );
};

export default SSP;
