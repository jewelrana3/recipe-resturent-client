import useData from "../../hooks/useData";


const Tending = () => {
    const [tending] = useData();
  
    return (
        <div className="mt-8">
            <h2 className="text-center text-3xl font-semibold ">Tending <span className="text-red-400">Now</span></h2>
            <div className="border-b-2 mt-4 border-indigo-500 ..."></div>
            <div className="grid grid-cols-6 mt-6">
                {
                    tending.map(pd => <p 
                        key={pd.id}
                    >
                        <img style={{ width: '150px',height:'150px',borderRadius:'50%' }} className="ml-10 text-center" src={pd.food} alt="" />
                        <p className="text-center mt-2 font-semibold">{pd.name}</p>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Tending;