import first from '~/assets/img/impact-img/1.svg';
import second from '~/assets/img/impact-img/2.svg';
import thirt from '~/assets/img/impact-img/3.svg';

export default function TotalGreenImpactComponent() {
    return (
        <div className="total-green-impact-component">
            <h3 className="title-h3-style">Our total green impact</h3>
            <div className="flex justify-center items-center gap-5 impact-container">
                <div className="impact-item flex flex-col justify-center items-center">
                    <img src={first} alt="First Image" className="mb-3"/>
                    <h3 className="title-h3-style font-bold">3,927 kg</h3>
                    <span>of CO2 saved</span>
                </div>
                <div className="impact-item flex flex-col justify-center items-center">
                    <img src={second} alt="Second Image" className="mb-3" />
                    <h3 className="title-h3-style">2,546,167 days</h3>
                    <span>of drinking water saved</span>
                </div>
                <div className="impact-item flex flex-col justify-center items-center">
                    <img src={thirt} alt="Third Image" className="mb-3" />
                    <h3 className="title-h3-style">7,321 kWh</h3>
                    <span>of energy saved</span>
                </div>
            </div>
        </div>
    )
} 