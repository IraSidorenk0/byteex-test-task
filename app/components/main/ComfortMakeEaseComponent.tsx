import first from '~/assets/img/main-block-icons/1.svg';
import second from '~/assets/img/main-block-icons/2.svg';
import fifth from '~/assets/img/main-block-icons/5.svg';
import stars from '../../assets/img/stars.svg';
import CustomizeButton from './components/CustomizeButton';

export default function ComfortMakeEaseComponent() {
  return (
    <div className="comfort-make-ease-component">
        <div>
          <h2 className="title-style text-center mt-2 mb-3">Comfort made easy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 swiper-comfort-container">
            <div className="flex flex-col justify-center items-center swiper-comfort-item">
              <img src={second} alt="Second Image" />
              <h3 className="title-h3-style mb-2">You save.</h3>
              <p className="p-style text-center">Browse our comfort sets and save 15% when you bundle.</p>
            </div>
            <div className="flex flex-col justify-center items-center swiper-comfort-item">
              <img src={fifth} alt="Fifth Image" />
              <h3 className="title-h3-style mb-2">We ship.</h3>
              <p className="p-style text-center">We ship your items within 1-2 days of receiving your order.</p>
            </div>
            <div className="flex flex-col justify-center items-center swiper-comfort-item">
              <img src={first} alt="First Image" />
              <h3 className="title-h3-style mt-5 mb-2">You enjoy!</h3>
              <p className="p-style text-center">Wear hernest around the house, out on the town, or in bed.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 w-full">
            <CustomizeButton />
            <div className="flex justify-center w-full mt-2">
              <img src={stars} className="mr-2" />
              <p className="p-small-style w-auto">Over 500+ 5 Star Reviews Online</p>
            </div>
        </div>
    </div>
  );
}