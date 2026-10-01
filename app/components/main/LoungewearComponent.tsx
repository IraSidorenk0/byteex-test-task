import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import img1 from '~/assets/img/lounhgewear-swiper/1.png';
import img2 from '~/assets/img/lounhgewear-swiper/2.png';
import img3 from '~/assets/img/lounhgewear-swiper/3.png';
import img4 from '~/assets/img/lounhgewear-swiper/4.png';
import img5 from '~/assets/img/lounhgewear-swiper/5.png';
import girl1 from '~/assets/img/girl-swiper/1.jpg';
import girl2 from '~/assets/img/girl-swiper/2.png';
import girl3 from '~/assets/img/girl-swiper/3.png';
import girl4 from '~/assets/img/girl-swiper/4.png';
import girl5 from '~/assets/img/girl-swiper/5.png';
import girl6 from '~/assets/img/girl-swiper/6.png';
import girl7 from '~/assets/img/girl-swiper/7.png';
import girl8 from '~/assets/img/girl-swiper/8.png';


import first from '~/assets/img/main-block-icons/1.svg';
import second from '~/assets/img/main-block-icons/2.svg';
import third from '~/assets/img/main-block-icons/3.svg';
import fourth from '~/assets/img/main-block-icons/4.svg';

export default function LoungewearComponent() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="loungewear-component">
        <p className="p-style text-center">as seen in</p>
        <div className="as-see-in-swipe-container">
            <Swiper
                className="logoSwiper"
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={10}
                loop
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    },
                }}
            >
                <SwiperSlide>
                    <img src={img1} alt="Logo 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="Logo 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="Logo 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="Logo 4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="Logo 5" />
                </SwiperSlide>
            </Swiper>
        </div>
        <div className='flex'>
          <div className="title-style flex-1">
            <h2 className='title-style'>Loungewear you can be proud of.</h2>
            <div className="comfort-make-ease-container">
              <div className="flex">
                <img src={second} alt="Second Image" />
                <div className="mb-5">
                  <h3 className="title-h3-style mb-2">Ethically sourced.</h3>
                  <p className="p-style">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
                </div>
              </div>

              <div className="flex">
                <img src={fourth} alt="Fourth Image" />
                <div className="mb-5">
                  <h3 className="title-h3-style mb-2">Responsibly made.</h3>
                  <p className="p-style">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
                </div>
              </div>

              <div className="flex">
                <img src={first} alt="First Image" />
                <div className="mb-5">
                  <h3 className="title-h3-style mb-2">Made for living in.</h3>
                  <p className="p-style">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
                </div>
              </div>

              <div className="flex">
                <img src={third} alt="Third Image" />
                <div className="mb-5">
                  <h3 className="title-h3-style mb-2">Unimaginably comfortable.</h3>
                  <p className="p-style">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
                </div>
              </div>
            </div>
          </div>

          <div className="white-robe-swipe-container flex-1">
              <Swiper
                  className="girlSwiper"
                  modules={[Navigation, Thumbs]}
                  loop
                  navigation
                  thumbs={{ swiper: thumbsSwiper }}
                  slidesPerView={1}
              >
                  <SwiperSlide>
                      <img src={girl1} alt="Girl 1" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={girl2} alt="Girl 2" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={girl3} alt="Girl 3" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={girl4} alt="Girl 4" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={girl5} alt="Girl 5" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={girl6} alt="Girl 6" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={girl7} alt="Girl 7" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={girl8} alt="Girl 8" />
                  </SwiperSlide>
              </Swiper>
              <Swiper
                  className="thumbs-swiper"
                  modules={[Thumbs]}
                  onSwiper={(swiper) => setThumbsSwiper(swiper)}
                  spaceBetween={1}
                  slidesPerView={8}
                  watchSlidesProgress
                  loop
              >
                  <SwiperSlide>
                      <img src={girl1} alt="Girl thumb 1" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={girl2} alt="Girl thumb 2" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={girl3} alt="Girl thumb 3" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={girl4} alt="Girl thumb 4" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={girl5} alt="Girl thumb 5" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={girl6} alt="Girl thumb 6" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={girl7} alt="Girl thumb 7" />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src={girl8} alt="Girl thumb 8" />
                  </SwiperSlide>
              </Swiper>
          </div>
        </div>
       
    </div>
  );
}