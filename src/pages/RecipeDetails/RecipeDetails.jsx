

import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useData from "../../hooks/useData";

const RecipeDetails = () => {
    const recipes = useLoaderData();
    console.log(recipes)
    const { title, experienceYear, recipe, image, likes } = recipes;
    return (
        <div>
            <div style={{ marginLeft: '30rem' }} className="pt-20 tex-center ">
                <div className="card card-compact w-96  shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body text-center">

                        <h2 className="text-2xl font-semibold">{title}</h2>
                        <p>Exprience Year: {experienceYear}</p>
                        <p>Number of Recipes:{recipe}</p>
                        <p>Likes: {likes}</p>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto px-2 mt-6">
                <table className="table bg-slate-300 mt-6">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th className="text-xl ">Name</th>
                            <th className="text-xl ">Job</th>
                            <th className="text-xl ">Rating</th>
                            <th className="text-xl ">Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{recipes.title}</th>
                            <td>{recipes.cookingMethod}</td>
                            <td>{recipes.rating}</td>
                            <td><button onClick={()=>toast('Not add this is cheak')} className="btn btn-info">Fevarate</button></td>
                            <ToastContainer/>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecipeDetails;