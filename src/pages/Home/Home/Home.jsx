import BlogDetails from "../../BlogDetails/BlogDetails";
import Cheif from "../../Cheif/Cheif";
import Contact from "../../Contact/Contact";
import Menu from "../../Menu/Menu";
import Team from "../../Team/Team";
import Tending from "../../Tending/Tending";
import TypoGrapy from "../../TypoGrapy/TypoGrapy";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Cheif></Cheif>
           <Menu></Menu>
           <TypoGrapy></TypoGrapy>
           <BlogDetails></BlogDetails>
           <Tending></Tending>
           <Team></Team>
           <Contact></Contact>
        </div>
    );
};

export default Home;