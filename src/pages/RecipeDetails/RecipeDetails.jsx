
import { useLoaderData } from "react-router-dom";
// import useData from "../../hooks/useData";

const RecipeDetails = () => {
   const recipes = useLoaderData();
   console.log(recipes)
    const { cookingMethod, title, experienceYear, recipe,image, likes } = recipes;
    return (
        <div style={{marginLeft:'30rem'}} className="pt-20 tex-center ">
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
    );
};

export default RecipeDetails;