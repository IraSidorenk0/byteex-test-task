import CustomizeButton from './components/CustomizeButton';
import footer from '~/assets/img/footer.png';
import payments from '~/assets/img/payments.png'

import first from '~/assets/img/footer-icons/1.svg'
import second from '~/assets/img/footer-icons/2.svg'
import thirt from '~/assets/img/footer-icons/3.svg'

export default function FooterComponent() {
    return (    
        <footer className="bg-gray-800 text-white py-8">
            <h2 className="title-style text-center">Find something you love.</h2>
            <p className="p-style text-center mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien <br/>
                facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.
            </p>
            <div className="flex flex-col items-center justify-center">
                <img src={footer} alt="Footer" className="mr-4 my-7" />
                <CustomizeButton />
                <div className="payment-contailer flex mt-3">
                    <p className="payment-text">Ships in 1-2 Days</p>
                    <img src={payments} alt='Payments' />
                </div>
                <div className="mt-3 flex">
                    <div className="footer-div flex items-center">
                        <img src={first} alt="" />
                        <p>FREE Shipping on Orders over $200</p>
                    </div>
                    <div className="footer-div flex items-center">
                        <img src={second} alt="" />
                        <p>Over 500+ 5 Star Reviews Online</p>
                    </div>
                    <div className="footer-div flex items-center">
                        <img src={thirt} alt="" />
                        <p>Made ethically and responsibly.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}