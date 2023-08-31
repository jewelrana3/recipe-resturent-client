import { useEffect, useState } from "react";


const useData = () => {
    const [chief,setChief] = useState([])
    const [loading,setLoading] = useState(true)
   
    useEffect(()=>{
        fetch('http://localhost:3000/food')
        .then(res=>res.json())
        .then(data => {
            setChief(data)
            setLoading(false)
        })

    },[])
   return [chief,loading]
};

export default useData;