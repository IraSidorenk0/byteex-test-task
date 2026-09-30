import first from '~/assets/img/main-block-icons/1.svg';
import second from '~/assets/img/main-block-icons/2.svg';
import fifth from '~/assets/img/main-block-icons/5.svg';

export default function ComfortMakeEaseComponent() {
  return (
    <div className="comfort-make-ease-component">
        <div>
          <h2 className="title-style text-center">Comfort made easy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5  swiper-comfort-container">
            <div className="flex flex-col justify-center items-center swiper-comfort-item">
              <img src={second} alt="Second Image" />
              <h3 className="title-h3-style">You save.</h3>
              <p className="text-style text-center mt-4">Browse our comfort sets and save 15% when you bundle.</p>
            </div>
            <div className="flex flex-col justify-center items-center swiper-comfort-item">
              <img src={fifth} alt="Fifth Image" />
              <h3 className="title-h3-style">We ship.</h3>
              <p className="text-style text-center mt-4">We ship your items within 1-2 days of receiving your order.</p>
            </div>
            <div className="flex flex-col justify-center items-center swiper-comfort-item">
              <img src={first} alt="First Image" />
              <h3 className="title-h3-style">You enjoy!</h3>
              <p className="text-style text-center mt-4">Wear hernest around the house, out on the town, or in bed.</p>
            </div>
          </div>
        </div>
    </div>
  );
}