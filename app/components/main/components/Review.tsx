import review from '../../../assets/img/review.png';
import starts from '../../../assets/img/stars.svg';
type ReviewProps = {
  name?: string;
  text?: string;
  showAvatar?: boolean;
  showBadge?: boolean;
  avatarColor?: string;
};
export default function Review({ name = 'Amy P.', text = 'Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.', showAvatar = true, showBadge = true, avatarColor }: ReviewProps) {
  return (
    <div className="review-component">  
        <div className="review-container">
            <div className="review-item">
                <div className="review-image flex items-center gap-2">
                    {showAvatar && (avatarColor ? <div className="avatar-color" style={{ backgroundColor: avatarColor }}></div> : <img src={review} alt="Review" className="avatar-img" />)}
                    <p className='p-style'>{name}</p>
                    <img src={starts} alt="Stars" className="stars-img" />
                    {showBadge && <p>One of 500+ 5 Star Reviews Online</p>}
                </div>
                <div className="review-text">
                    <p className="text-review">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}



