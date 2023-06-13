

const ChiefDetails = ({ data }) => {
    const { name, experienceYear, likes, recipe ,image} = data;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl py-4 border p-2">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">{name}</h2>
                <p>Years of Exprience :{experienceYear}</p>
                <p>Number of Recipe:{recipe}</p>
                <p>Likes:{likes}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-outline btn-accent">View Recipe</button>
                </div>
            </div>
        </div>
    );
};

export default ChiefDetails;