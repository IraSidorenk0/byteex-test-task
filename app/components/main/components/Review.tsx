import review from '../../../assets/img/review.png';
import starts from '../../../assets/img/stars.svg';
export default function Review() {
  return (
    <div className="review-component">  
        <div className="review-container">
            <div className="review-item">
                <div className="review-image flex items-center gap-2">
                    <img src={review} alt="Review" className="avatar-img" />
                    <p className='p-style'>Amy P.</p>
                    <img src={starts} alt="Stars" className="stars-img" />
                    <p>One of 500+ 5 Star Reviews Online</p>
                </div>
                <div className="review-text">
                    <p className="text-review">
                        Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}



