import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddSample = () => {
    const imageHostKey = 'c70a5fc10619997bd7315f2bf28d0f3e';
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const image = imageData.data.url;
        const updateUrl = {
          ...data,
         
          img: image,
        };

        // console.log('aci', updateUrl);
        fetch(`http://localhost:5000/products`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(updateUrl),
        })
          .then(res => res.json())
          .then(data => {
            toast.success('Add Product');
            reset();
          });
      });
  };
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl py-3 mt-[1px]  font-semibold text-indigo-50 bg-slate-600">
          Add Your Sample Product
        </h1>
      </div>
      <div className="flex justify-center mt-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-14 bg-slate-300 rounded-lg p-5 px-20">
            <div>
              {/* name */}
              <div className="form-control w-full max-w-xs">
                <h1 className="ml-1 text-lg ">Name </h1>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered bg-white w-[300px] h-10"
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
            

              {/* Product image */}
              <div>
                <label className="label">
                  <span className="label-text text-lg font-semibold ">
                    Input Product Image{' '}
                  </span>
                </label>
                <input
                  type="file"
                  className="input input-bordered text-black lg:w-72 sm:w-full max-w-xs pt-1    hover:shadow-xl shadow-inner h-[40px]"
                  {...register('image', {
                    required: {
                      value: true,
                      message: 'Image is Required',
                    },
                  })}
                />

                <label className="label">
                  {errors.image?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors?.image?.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn btn-primary w-full text-white"
                type="submit"
                value="ADD"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSample;