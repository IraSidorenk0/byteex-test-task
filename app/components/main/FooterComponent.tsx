import CustomizeButton from './components/CustomizeButton';
import footer from '~/assets/img/footer.png';
export default function FooterComponent() {
    return (    
        <footer className="bg-gray-800 text-white py-8">
            <h2 className="title-style text-center">Find something you love.</h2>
            <p className="p-style text-center mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien <br/>
                facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.
            </p>
            <div className="flex flex-col items-center justify-center">
                <img src={footer} alt="Footer" className="mr-4" />
                <CustomizeButton />
            </div>
        </footer>
    );
}