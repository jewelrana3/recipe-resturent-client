import { useEffect, useState } from "react";


const useData = () => {
    const [chief,setChief] = useState([])
    console.log(chief)
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setChief(data))
    },[])
   return [chief]
};

export default useData;