import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner pt-36 flex">
            <div className=" mt-32 ml-4  text-white text-center">
                <h2 className="text-6xl font-normal">CHINESE FOOD</h2>
               
                <p className="mt-5 font-normal text-zinc-200"> Ni Hao! Welcome to our vibrant online platform celebrating the <br /> rich tapestry of Chinese cuisine. With an exquisite blend of <br /> tradition and innovation, our culinary experts bring .</p>
                <button className="btn btn-active bg-red-900 mt-6 text-white">Buy Now <ShoppingCartIcon style={{ width: '20px' }} className='text-white'></ShoppingCartIcon>
                </button>
            </div>
          
        </div>
    );
};

export default Banner;