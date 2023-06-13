import Cheif from "../../Cheif/Cheif";
import Team from "../../Team/Team";
import Tending from "../../Tending/Tending";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Cheif></Cheif>
           <Tending></Tending>
           <Team></Team>
        </div>
    );
};

export default Home;