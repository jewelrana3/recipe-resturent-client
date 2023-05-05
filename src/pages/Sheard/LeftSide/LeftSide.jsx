import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [resturent, setResturent] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-jewelrana3.vercel.app//resturent')
            .then(res => res.json())
            .then(data => setResturent(data))
            .catch(error => console.error)
    }, [])
    return (
        <div>
            <h2><Link className='text-decoration-none'>Best Resturent !!!</Link></h2>
            <div className='ps-2'>
                {
                    resturent.map(res => <p
                        key={res.id}
                    >
                        <Link to={`/res/${res.id}`} className='text-decoration-none'>{res.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSide;