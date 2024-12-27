import React, { useEffect, useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { toast } from 'react-toastify';
import StarRating from './StarRating';

const SampleProduct = ({ product,user }) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isShowReviewModalOpen, setIsShowReviewModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [rId, setId] = useState();
  const [showId, setShowId] = useState();
  const [rating, setRating] = useState(0);
  const [showReviews,setShowReview]=useState([])

    useEffect(() => {
      fetch(`http://localhost:5000/review/${showId}`)
        .then(res => res.json())
        .then(data => {
          setShowReview(data);
        });
    }, [ showId]);
  console.log(showReviews);

  // Toggle Add Review Modal
  const toggleReviewModal = (id) => {
   setId(id)
    setIsReviewModalOpen(!isReviewModalOpen);
  };

  // Toggle Show Reviews Modal
  const toggleShowReviewModal = (id) => {
    setShowId(id)
    setIsShowReviewModalOpen(!isShowReviewModalOpen);
  };

  // Handle Add Review
  const handleAddReview = event => {
    event.preventDefault();
    const review = event.target.review.value;
    
    setReviews([...reviews, review]);
    toggleReviewModal();
    event.target.reset();
    const updateReview = {
      review,
      rId,
      rating,
      user

    }
    // console.log(updateReview)
     fetch(`http://localhost:5000/review`, {
       method: 'POST',
       headers: {
         'content-type': 'application/json',
       },
       body: JSON.stringify(updateReview),
     })
       .then(res => res.json())
       .then(data => {
         toast.success('Add Review');
       
       });
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-44" src={product?.img} alt={product?.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.name}</h2>
        <div className="text-xs text-slate-600">
          <p className="">Please contact us to get this sample</p>
          <p>
            Email{' '}
            <span className="ml-[4px] hover:text-orange-400">
              : ifti@gmail.com
            </span>
          </p>
          <p>
            Phone :{' '}
            <span className="hover:text-orange-400">+8801756875054</span>
          </p>
        </div>

        {/* Review Buttons */}
        <div className="flex justify-between gap-4 mt-4">
          <button
            onClick={() => toggleReviewModal(product?._id)}
            className="btn btn-sm btn-outline"
          >
            Add Review
          </button>
          <button
            onClick={() => toggleShowReviewModal(product?._id)}
            className="btn btn-sm btn-outline"
          >
            <FaRegEye />
          </button>
        </div>
      </div>

      {/* Add Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add a Review</h2>
            <form onSubmit={handleAddReview}>
              <textarea
                name="review"
                className="textarea textarea-bordered w-full h-24"
                placeholder="Write your review here"
                required
              />
              <select
                onChange={e => setRating(e.target.value)}
                className="select select-bordered w-full font-normal"
              >
                <option disabled selected>
                  Select Rating
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={toggleReviewModal}
                  className="btn btn-outline btn-sm"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Show Reviews Modal */}
      {isShowReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            {showReviews.length > 0 ? (
              showReviews.map((review, index) => (
                <div key={index} className="flex justify-between pb-2">
                  <div>
                    <h1>{review?.review}</h1>
                    <StarRating rating={review?.rating} />
                  </div>
                  <div className="flex  items-center">
                    <h1>{review?.user?.name}</h1>
                    <img
                      className="h-4"
                      src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                      alt=""
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500">No reviews yet.</p>
            )}
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={toggleShowReviewModal}
                className="btn btn-outline btn-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SampleProduct;
