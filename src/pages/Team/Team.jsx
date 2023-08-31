// import React from 'react';

import useData from "../../hooks/useData";

const Team = () => {
    const [team] = useData();
    return (
        <div className="bg-slate-300 mt-20 px-2 py-4">
            <div className="">
                <h2 className="text-3xl text-center font-semibold ">The Simply Recipes <span className="text-red-500">Team</span></h2>
                <p className="text-justify lg:text-center px-4 mt-5">Simply Recipes a resource for home cooks with more than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from around the world. supported by a group of recipe developers, food writers, recipe and product testers, photographers, and other creative professionals.</p>
                <div className="team mt-8">
                    <button className="btn btn-outline btn-error">Read More</button>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 ml-14">
                {
                    team.map(pd => <p
                        key={pd.id}
                    >
                        <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} className="border-2 border-indigo-600 " src={pd.man} alt="" />
                        <p className=" font-semibold">{pd.recipeName}</p>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Team;