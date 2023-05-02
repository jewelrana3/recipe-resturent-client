import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';




const Home = () => {

    return (
        <div>
           
            <AwesomeSlider
                media={[
                   <img src={'https://www.cleanpng.com/png-birthday-cake-png'} alt=""/>
                ]}
            />
        
        </div>
    );
};

export default Home;