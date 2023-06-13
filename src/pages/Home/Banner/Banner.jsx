import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner pt-36 flex">
            {/* <img src="https://i.ibb.co/6wBDZGH/istockphoto-545455948-612x612.jpg" alt="" /> */}
            <div className="w-2/3 mt-32 ml-4">
                <h2 className="text-6xl font-normal text-red-900">Its Not Just Food Its An Experience</h2>
                <p className="mt-5 font-mono"> Are you looking for a delicious and easy breakfast treat? Look no further than chocolate croissants! With just a few ingredients and some basic kitchen skills, you can make irresistible chocolate croissants that are soft, buttery, and crispy on the outside.</p>
                <button className="btn btn-active bg-red-900 mt-6 text-white">Buy Now <ShoppingCartIcon style={{width:'20px'}} className='text-white'></ShoppingCartIcon>
                </button>
            </div> 
             <img className="w-2/4 h-1/4" src='https://i.ibb.co/y8L7JMS/header-fd3061e8.jpg' alt="" />
        </div>
    );
};

export default Banner;