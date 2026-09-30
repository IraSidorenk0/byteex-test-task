import beYouBestImage from '../../assets/img/be-best-img.png';
import CustomizeButton from './components/CustomizeButton';
export default function BeYouBestComponent() {
  return (
    <div className="be-you-best-component flex">
        <div className="be-best-container flex-1">
            <img src={beYouBestImage} alt="Be You Best" />
        </div>
        <div className="flex-1">
          <h2 className="title-style">Be your best self.</h2>
          <p className="p-style text-left">
            Hi! My name’s [Insert Name], and I founded [Insert] in ____. 
          </p>
          <p className="p-style text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. 
          </p>
          <p className="p-style text-left">
            Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula. 
          </p>
          <p className="p-style text-left">
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales. 
          </p>
          <p className="p-style text-left">
            Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh. 
          </p>
          <p className="p-style text-left">
            Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien. 
          </p>
          <p className="p-style text-left">
            Cras mattis varius mollis.
          </p>
          <div className="flex justify-center">
            <CustomizeButton />
          </div>
        </div>
    </div>
  );
}