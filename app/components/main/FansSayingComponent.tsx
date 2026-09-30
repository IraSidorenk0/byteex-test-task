import fanse from '~/assets/img/fans.jpg';
export default function FansSayingComponent() {
  return (
    <div className="fans-saying-component">
        <div>
          <h2 className="title-style mt-4">What are our fans saying?</h2>
          <img src={fanse} alt="Fans" />
        </div>
    </div>
  );
}