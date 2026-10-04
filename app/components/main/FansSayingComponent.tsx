import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import CustomizeButton from './components/CustomizeButton';
import stars from '../../assets/img/stars.svg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Review from './components/Review';

const images = import.meta.glob('~/assets/img/fans-img/*.png', { eager: true });
const fanImages = Object.keys(images)
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || '0');
    const numB = parseInt(b.match(/\d+/)?.[0] || '0');
    return numA - numB;
  })
  .map(key => (images[key] as { default: string }).default);

const firstRow = fanImages.slice(0, 11);
const secondRow = fanImages.slice(11, 22);

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

function FansRow({ images }: { images: string[] }) {
  return (
    <Swiper
      className="reviewsSwiper"
      slidesPerView={11}
      spaceBetween={1}
      breakpoints={{
        320: {
          slidesPerView: 4,
          spaceBetween: 1,
        },
        500: {
          slidesPerView: 4,
          spaceBetween: 1,
        },
        768: {
          slidesPerView: 8,
          spaceBetween: 1,
        },
        900: {
          slidesPerView: 11,
          spaceBetween: 1,
        }
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`Fan ${index + 1}`} className="w-full h-auto object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function FansSayingComponent() {
  return (
    <div className="fans-saying-component">
      <div>
        <div className="flex flex-col items-center">
          <h2 className="title-style text-center mt-4">What are our fans saying?</h2>
          <p className="p-style text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.
          </p>
        </div>
        <div className="reviews-swiper mt-5"> 
          <FansRow images={firstRow} />
          <div className="mt-4" />
          <FansRow images={secondRow} />
        </div>
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
                spaceBetween: 10,
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
        <div className="flex flex-col items-center mt-4 w-full">
            <CustomizeButton />
            <div className="flex justify-center w-full mt-2">
              <img src={stars} className="mr-2" />
              <p className="p-small-style w-auto">Over 500+ 5 Star Reviews Online</p>
            </div>
        </div>
      </div>
    </div>
  );
}
