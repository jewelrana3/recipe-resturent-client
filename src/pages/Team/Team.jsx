// import React from 'react';

import useData from "../../hooks/useData";

const Team = () => {
    const [team] = useData();
    return (
        <div className="bg-slate-300 mt-20 flex px-2 py-4">
            <div className="text-left w-2/4">
                <h2 className="text-3xl font-semibold ">The Simply Recipes <span className="text-red-500">Team</span></h2>
                <p className="text-left mt-5">Simply Recipes a resource for home cooks with more than 3,000 tested recipes, guides,<br /> and meal plans, drawing over 15 million readers each month from around the world.<br /> supported by a group of recipe developers, food writers, recipe and product testers, <br /> photographers, and other creative professionals.</p>
                <button className="btn btn-outline btn-error mt-4">Read More</button>
            </div>
            <div className="grid grid-cols-6 gap-4">
                {
                    team.map(pd => <p
                        key={pd.id}
                    >
                        <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} className="border-2 border-indigo-600 " src={pd.man} alt="" />
                        <p className="text-center font-semibold">{pd.recipeName}</p>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Team;