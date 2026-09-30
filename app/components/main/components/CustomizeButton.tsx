import arrow from '~/assets/img/arr.png';

export default function CustomizeButton() {
  return (
    <button className="customize-button flex items-center justify-center">
      <span>Customize Your Outfit</span>
      <img src={arrow} alt="Arrow" />
    </button>
  );
}