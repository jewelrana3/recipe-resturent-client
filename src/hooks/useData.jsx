import { useEffect, useState } from "react";


const useData = () => {
    const [chief,setChief] = useState([])
    const [loading,setLoading] = useState(true)
   
    useEffect(()=>{
        fetch('https://b7a10-chef-recipe-hunter-server-side-jewelrana3.vercel.app/food')
        .then(res=>res.json())
        .then(data => {
            setChief(data)
            setLoading(false)
        })

    },[])
   return [chief,loading]
};

export default useData;