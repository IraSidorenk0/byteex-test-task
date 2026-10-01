import fanse from '~/assets/img/fans.jpg';
import stars from '~/assets/img/stars.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Review from './components/Review';

const reviews = [
  {
    name: 'Sarah M.',
    text: 'Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.',
  },
  {
    name: 'Emily R.',
    text: 'Absolutely love the comfort and sustainability of this brand. The fabric is incredibly soft and the fit is perfect. Will definitely be ordering more colors.',
  },
  {
    name: 'Jessica K.',
    text: 'The best loungewear I have ever owned. The quality is outstanding and the attention to detail is amazing. I feel so cozy and stylish at the same time.',
  },
  {
    name: 'Lauren T.',
    text: 'Finally found sustainable loungewear that actually looks good and feels amazing. The packaging was zero-waste and the washing bag is such a thoughtful touch.',
  },
  {
    name: 'Megan P.',
    text: 'Worth every penny. The material is so soft and breathable. I wear these pieces around the house and even out for coffee. True luxury meets sustainability.',
  },
];

export default function FansSayingComponent() {
  return (
    <div className="fans-saying-component">
        <div>
          <h2 className="title-style mt-4">What are our fans saying?</h2>
          <img src={fanse} alt="Fans" />
          <div className="reviews-swiper mt-5">
            <Swiper
              className="reviewsSwiper"
              modules={[Pagination, Navigation]}
              slidesPerView={1}
              spaceBetween={20}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.name}>
                  <Review showAvatar={true} showBadge={false} avatarColor="#1C2E58" name={review.name} text={review.text} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
    </div>
  );
}