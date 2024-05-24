import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'react-swipe';

const MySwiper = ({ cards }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active card index

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <Swiper
      ref={swiperRef}
      onSlideChange={handleSlideChange}
      navigation={true} // Optional: Enable navigation arrows
      pagination={true} // Optional: Enable pagination dots
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="card bg-white rounded-lg shadow-md overflow-hidden">  {/* Your card styles */}
            {card.image && <img src={card.image} alt={card.name} className="w-full h-48 object-cover" />}
            <div className="p-4">
              <h3>{card.name}</h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
