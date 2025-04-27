import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      {/* Carousel */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        className="h-full"
      >
        <SwiperSlide>
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('/images/slide1.jpg')` }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('/images/slide2.jpg')` }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('/images/slide3.jpg')` }}></div>
        </SwiperSlide>
      </Swiper>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Truever</h1>
        <p className="text-lg md:text-2xl mb-6">We bring your dreams to reality.</p>
        <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold transition">
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
