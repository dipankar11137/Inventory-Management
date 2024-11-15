import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ setCategory }) => {
  return (
    <div className="mx-16">
      <div className="py-3 mb-5  text-center text-4xl  font-serif text-indigo-50 bg-indigo-900 rounded-t-lg">
        Product Category
      </div>
      <div className="grid grid-cols-5 gap-10">
        <Link
          onClick={() => setCategory('Electronics and Mobile Devices')}
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://static.vecteezy.com/system/resources/previews/010/790/980/non_2x/online-shopping-or-delivery-concept-illustration-3d-show-trolley-bags-and-boxes-modern-trendy-design-bright-colors-on-smartphone-free-vector.jpg"
            alt=""
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Electronics and Mobile Devices
          </h1>
        </Link>
        <Link
          onClick={() => setCategory('Food and Beverages')}
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://www.designmantic.com/images/industry/beverage/dm-food-logo-08.png"
            alt="Food and Beverages"
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Food and Beverages
          </h1>
        </Link>
        <Link
          onClick={() => setCategory('Health and Personal Care')}
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://st.depositphotos.com/5270307/53104/v/450/depositphotos_531040002-stock-illustration-medical-logo-template-icon-symbol.jpg"
            alt="Health and Personal Care"
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Health and Personal Care
          </h1>
        </Link>
        <Link
          onClick={() => setCategory('Automotive')}
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjLjbM3uXAsMl4dfeMzHLt0JJnMpFArlzwA&s"
            alt=""
          />
          <h1 className="text-sm font-serif text-center mt-2">Automotive</h1>
        </Link>
        <Link
          onClick={() => setCategory('Agricultural Products')}
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://www.shutterstock.com/image-vector/agriculture-icon-field-wheat-farm-600nw-2291021707.jpg"
            alt=""
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Agricultural Products
          </h1>
        </Link>
        <Link
          onClick={() => setCategory('Home Appliances and Furniture')}
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/115048935/original/066f6df5af17dcbc5aba62aa39a80c1244b61b9d/design-home-furniture-logo-with-my-best-skill.jpg"
            alt=""
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Home Appliances and Furniture
          </h1>
        </Link>
        <Link
          onClick={() => setCategory('Construction Materials')}
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdSR6lo3r3v0EWQHrvF3vctfAeIZFbLUhTQ&s"
            alt="Construction Materials"
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Construction Materials
          </h1>
        </Link>
        <Link
          onClick={() => setCategory('E-commerce')}
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://seeklogo.com/images/E/e-commerce-logo-B0AE7EE720-seeklogo.com.png"
            alt=""
          />
          <h1 className="text-sm font-serif text-center mt-2">E-commerce</h1>
        </Link>
        <Link
          onClick={() => setCategory('Education and Learning Tools')}
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://cdn-icons-png.flaticon.com/512/5415/5415712.png"
            alt="Education and Learning Tools"
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Education and Learning Tools
          </h1>
        </Link>
        <Link
          onClick={() => setCategory('Textiles and Apparel')}
          to="/products"
          className="hover:bg-slate-100  shadow-lg  border-b-[1px] border-orange-700 hover:border-b-0  pb-1"
        >
          <img
            className="h-32 w-full rounded-xl rounded-b-none"
            src="https://img.freepik.com/free-vector/flat-design-clothing-store-logo-design_23-2149496415.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725408000&semt=ais_hybrid"
            alt="Textiles and Apparel"
          />
          <h1 className="text-sm font-serif text-center mt-2">
            Textiles and Apparel
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Category;