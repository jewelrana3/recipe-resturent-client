import { Link } from "react-router-dom";


const ChiefDetails = ({ data }) => {
    const { id, name, experienceYear, likes, recipe, image } = data;
    return (
       
            <div className="card card-compact bg-base-100 shadow-xl py-4 border p-2 mb-8">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{name}</h2>
                    <p>Years of Exprience :{experienceYear}</p>
                    <p>Number of Recipe:{recipe}</p>
                    <p>Likes:{likes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`recipe/${id}`}><button className="btn btn-outline btn-accent">View Recipe</button></Link>
                    </div>
                </div>
            </div>
     
    );
};

export default ChiefDetails;