import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Banner.css';

const Banner = () => {
  const [autoplay, setAutoplay] = useState(true);
  const handleCall = () => {
    window.location.href = 'tel:+1234567890';
  };

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={
          autoplay ? { delay: 5000, disableOnInteraction: false } : false
        }
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('https://www.versionx.in/wp-content/uploads/2020/04/Inventory-Management-Web-Responsive-Banner_1320x500.jpg')`,
              // backgroundImage: `url(${banner1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '100%',
            }}
            className="h-[400px] md:h-[500px] flex items-center w-full justify-end"
          >
            <div className=" mr-32 text-end ">
              <h1>Transforming to Futuristic Healthcare</h1>
              <h2 className="text-4xl font-semibold">
                Setting Benchmark <br />
                in Clinical Excellence
              </h2>
              <p className="text-sm">
                Investing in skill and experience for a better tomorrow.
              </p>
              <div></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('https://www.fastwmssoftware.com/images/Inventory-banner.jpg')`,
              // backgroundImage: `url(${banner1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '100%',
            }}
            className="h-[400px] md:h-[500px] flex items-center"
          >
            {/* <div className=" ml-32 text-start">
              <h1>30 Years of Healing and Wellness</h1>
              <h2 className="text-4xl font-semibold">
                A Legacy of Healing, Hope <br /> and Health
              </h2>
              <p className="text-sm">
                At the heart of our legacy lies a commitment to your well-
                <br />
                being, spanning three decades of exceptional healthcare.
              </p>
              <div></div>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('https://acctivate.com/wp-content/uploads/2015/12/how-to-track-inventory-with-management-software.jpg')`,
              // backgroundImage: `url(${banner1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '100%',
            }}
            className="h-[400px] md:h-[500px] flex items-center"
          >
            {' '}
            <div className=" ml-32 text-start">
              <h1>30 Years of Healing and Wellness</h1>
              <h2 className="text-4xl font-semibold">
                A Legacy of Healing, Hope <br /> and Health
              </h2>
              <p className="text-sm">
                At the heart of our legacy lies a commitment to your well-
                <br />
                being, spanning three decades of exceptional healthcare.
              </p>
              <div></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
