import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import { mainVideos } from '@/mocks/mainVideos';
import { YoutubePlayer } from '@/components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const MainVideoSlider = () => {
  const slideOptions = {
    slidesPerView: 1,
    navigation: true,
  };

  return (
    <>
      <Swiper
        {...slideOptions}
        modules={[Navigation]}
        className="mySwiper w-[1080px] h-[567px]"
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        // onSwiper={(swiper) => setSwiper(swiper)}
      >
        {mainVideos.map((item) => {
          return (
            <SwiperSlide key={item.youtubeCode}>
              <div className="relative bg-black w-[1080px] h-[567px]">
                <YoutubePlayer youtubeSrc={item.youtubeCode} />
                <div className="absolute bottom-0 left-0 px-[38px] py-[29px] bg-black/80 w-[100%] text-[rgb(220,220,220)] flex flex-col space-y-1">
                  <h3 className="font-bold text-[30px] line-clamp-2">{item.title}</h3>
                  <span className="font-light text-[20px]">{item.description}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <FiChevronLeft className="absolute top-0 bottom-0 left-0 z-10 mx-auto my-auto text-5xl text-white text-opacity-75 prev swiper-button-prev custom-prev" />

        <FiChevronRight className="absolute top-0 bottom-0 right-0 z-10 mx-auto my-auto text-5xl text-white text-opacity-75 custom-next" />
      </Swiper>
    </>
  );
};
