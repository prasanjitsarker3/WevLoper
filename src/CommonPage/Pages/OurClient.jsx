// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Grid, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const OurClient = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set correct slides per view

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="lg:px-24 md:px-16 px-4 md:py-8">
      <div>
        <h1 className=" text-2xl primaryColor poppins-semibold py-2">
          Our Clients
        </h1>
        <h1 className=" text-md poppins-light pb-2">
          Our reputation branches across different industries and far beyond the
          borders
        </h1>
      </div>
      <Swiper
        slidesPerView={slidesPerView}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper py-12"
      >
        <SwiperSlide className="py-8 space-y-4">
          <div className=" border-2 border-gray-100 shadow-xl flex justify-center items-center ">
            <img
              className="h-[160px] w-[200px] object-cover"
              src="https://img.freepik.com/premium-vector/innovation-technology-company-abstract-vector-logo-template_159025-1382.jpg?w=740"
              alt=""
            />
          </div>
          <div className=" border-2 border-gray-100 shadow-lg flex justify-center items-center">
            <img
              className="h-[160px] w-[200px]"
              src="https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?t=st=1710592805~exp=1710596405~hmac=ae79d97a93b1377536212696a338c7f80bed9a4c4ded4b7d422f5578cd1041df&w=740"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-8 space-y-4">
          <div className=" border-2 border-gray-100 shadow-lg flex justify-center items-center">
            <img
              className="h-[160px] w-[200px]"
              src="https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?t=st=1710593583~exp=1710597183~hmac=ff09e7571de810878c26fb4af4cf2d8e36a1e874087a4bc0bd7f3521506ec0d6&w=740"
              alt=""
            />
          </div>
          <div className=" border-2 border-gray-100 shadow-lg flex justify-center items-center">
            <img
              className="h-[160px] w-[200px]"
              src="https://img.freepik.com/premium-vector/innovation-technology-company-abstract-vector-logo-template_159025-1382.jpg?w=740"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-8 space-y-4">
          <div className=" border-2 border-gray-100 shadow-lg flex justify-center items-center">
            <img
              className="h-[160px] w-[200px]"
              src="https://img.freepik.com/premium-vector/innovation-technology-company-abstract-vector-logo-template_159025-1382.jpg?w=740"
              alt=""
            />
          </div>
          <div className=" border-2 border-gray-100 shadow-lg flex justify-center items-center ">
            <img
              className="h-[160px] w-[200px]"
              src="https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design-template_460848-13992.jpg?t=st=1710593660~exp=1710597260~hmac=a22c50dd3b7e0eead4d28500b8659313cf11b0c5716b6daa8ac875c4f0c26bbf&w=740"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-8 space-y-4">
          <div className=" border-2 border-gray-100 shadow-lg flex justify-center items-center ">
            <img
              className="h-[160px] w-[200px]"
              src="https://img.freepik.com/premium-vector/abstract-globe-logo-design_650075-1461.jpg?w=740"
              alt=""
            />
          </div>
          <div className=" border-2 border-gray-100 shadow-lg flex justify-center items-center ">
            <img
              className="h-[160px] w-[200px]"
              src="https://img.freepik.com/premium-vector/innovation-technology-company-abstract-vector-logo-template_159025-1382.jpg?w=740"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-8 space-y-4">
          <div className=" border-2 border-gray-100 shadow-lg flex justify-center items-center ">
            <img
              className="h-[160px] w-[200px]"
              src="https://img.freepik.com/premium-vector/innovation-technology-company-abstract-vector-logo-template_159025-1382.jpg?w=740"
              alt=""
            />
          </div>
          <div className=" border-2 border-gray-100 shadow-lg flex justify-center items-center">
            <img
              className="h-[160px] w-[200px]"
              src="https://img.freepik.com/premium-vector/financial-consulting-business-logo-vector-designs_641336-69.jpg?w=740"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-8 space-y-4">
          <div className=" border-2 border-gray-100 shadow-lg flex justify-center items-center ">
            <img
              className="h-[160px] w-[200px]"
              src="https://img.freepik.com/premium-vector/awesome-eagle-logo-design-vector_95982-151.jpg?w=740"
              alt=""
            />
          </div>
          <div className=" border-2 border-gray-100 shadow-lg flex justify-center items-center">
            <img
              className="h-[160px] w-[200px]"
              src="https://img.freepik.com/premium-vector/innovation-technology-company-abstract-vector-logo-template_159025-1382.jpg?w=740"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurClient;
