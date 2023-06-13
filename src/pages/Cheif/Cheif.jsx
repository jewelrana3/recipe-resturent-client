// import React from 'react';


import ChiefDetails from "../ChiefDetails/ChiefDetails";
import useData from "../../hooks/useData";

const Cheif = () => {
   const [chief] = useData();
   console.log(chief)
    return (
        <div>
            <div className="text-center mt-8">
                <h2 className="text-4xl font-semibold text-red-500">OUR EXPERT CHEFS</h2>
                <p className="font-normal mt-4">Our expert chefs are the heart and soul of our culinary endeavors. Their expertise, passion, and dedication shine through in every dish they create. Prepare to be enchanted by <br /> their culinary magic as you embark on a remarkable dining experience with us.</p>
                <div className="mt-4 border-b-4 border-indigo-500 ..."></div>
                <div className="grid grid-cols-3 gap-4 py-4 mt-8 ml-9">
                    {
                        chief.map(data => <ChiefDetails
                        key={data.id}
                        data={data}
                        ></ChiefDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cheif;