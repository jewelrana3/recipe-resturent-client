
import { useLoaderData } from "react-router-dom";
// import useData from "../../hooks/useData";

const RecipeDetails = () => {
    const recipes = useLoaderData();
    console.log(recipes)
    const { title,cookingMethod, experienceYear, recipe, image, likes ,rating} = recipes;
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
            <div className="overflow-x-auto px-2">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>Job</th>
                            <th>Rating</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{recipes.title}</th>
                            <td>{recipes.cookingMethod}</td>
                            <td>{recipes.rating}</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecipeDetails;