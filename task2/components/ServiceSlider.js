import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { RxCrop, RxDesktop, RxPencil2, RxReader, RxRocket, RxArrowTopRight } from 'react-icons/rx';
import SwiperCore, { FreeMode, Pagination } from 'swiper/core';
SwiperCore.use([FreeMode, Pagination]);

const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Web Design & Development',
    description: 'From concept to creation, I craft captivating websites that merge aesthetic design with seamless functionality. Lets bring your digital vision to life.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Responsive Design',
    description: 'Your website should shine on all devices. I specialize in building responsive interfaces that adapt elegantly to every screen size, ensuring a consistent user experience.',
  },
  {
    icon: <RxDesktop />,
    title: 'Front-End Magic',
    description: 'I specialize in front-end development, sculpting user interfaces that engage and delight. Lets turn your ideas into interactive realities that captivate your audience.',
  },
  {
    icon: <RxReader />,
    title: 'Back-End Brilliance',
    description: 'Behind every great website is a robust back end. I engineer efficient and secure systems that power your online presence, making everything run smoothly.',
  },
  {
    icon: <RxRocket />,
    title: 'Custom CMS Integration',
    description: 'Take control of your content. I design and implement custom content management systems that empower you to manage your website with ease.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
