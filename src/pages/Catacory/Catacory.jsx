import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ResCard from '../ResCard/ResCard';

const Catacory = () => {
    const {id} = useParams()
    const resturentNews = useLoaderData()
    return (
        <div>
           {id && <h2> Resturent News:{resturentNews.length}</h2>}
           {
            resturentNews.map(card =><ResCard
            key={card.id}
            card={card}
            ></ResCard>)
           }
        </div>
    );
};

export default Catacory;