import first from '~/assets/img/impact-img/1.svg';
import second from '~/assets/img/impact-img/2.svg';
import thirt from '~/assets/img/impact-img/3.svg';

export default function TotalGreenImpactComponent() {
    return (
        <div className="total-green-impact-component">
            <h3 className="title-h3-style">Our total green impact</h3>
            <div className="flex justify-center items-center gap-5 impact-container">
                <div className="impact-item ">
                    <img src={first} alt="First Image" />
                </div>
                <div className="impact-item ">
                    <img src={second} alt="Second Image" />
                </div>
                <div className="impact-item ">
                    <img src={thirt} alt="Third Image" />
                </div>
            </div>
        </div>
    )
} 