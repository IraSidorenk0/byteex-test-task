import faq from '../../assets/img/faq.png';
export default function FAQComponent() {
  return (
    <div className="faq-component flex">
        <div className="title-style flex-1">Frequently asked questions.</div>
        <div className="faq-container flex-1">
          <img src={faq} alt="FAQ" />
        </div>
    </div>
  );
}