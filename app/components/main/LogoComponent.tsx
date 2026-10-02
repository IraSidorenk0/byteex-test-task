import Logo from './components/Logo';
import CustomizeButton from './components/CustomizeButton';
import Review from './components/Review';
import first from '~/assets/img/main-block-icons/1.svg';
import second from '~/assets/img/main-block-icons/2.svg';
import thirt from '~/assets/img/main-block-icons/3.svg';
import logoGroup from '~/assets/img/logoGroup.png';
export default function LogoComponent() {
  return (
    <main>
        <div className="logo-container">
            < Logo />
            
            <div className="flex items-center justify-between">
                <div>
                  <h2 className="title-style desctop-screen">Don’t apologize for being comfortable.</h2>
                  <div className="comfortable-container">
                    <div className="flex">
                        <img src={first} alt="First Icon" />
                        <p className="p-style">Beautiful, comfortable loungewear for day or night.</p>
                    </div>
                    <div className="flex">
                        <img src={second} alt="Second Icon" />
                        <p className="p-style">No wasteful extras, like tags or plastic packaging.</p>  
                    </div>
                    <div className="flex">
                        <img src={thirt} alt="Third Icon" />
                        <p className="p-style">Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.</p>
                    </div>
                  </div>
                  <CustomizeButton />
                </div>
                <div>
                  <h2 className="title-style mobile-screen">Don’t apologize for being comfortable.</h2>
                  <img src={logoGroup} alt="Logo Group" />
                </div>
            </div>
        </div>
        <Review />
    </main>
  );
}