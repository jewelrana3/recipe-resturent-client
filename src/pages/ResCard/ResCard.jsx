import React from 'react';
import { Card } from 'react-bootstrap';
// import food from '../../assets/ppp.jpg'
import { Link } from 'react-router-dom';

const ResCard = ({ card }) => {
    const { _id, title, image_url,des } = card
    return (
        <div>
            <Card className=" mt-4">
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                <Card.Img variant="top" src={image_url} style={{height:'500px'}}/>
                    <Card.Title className='mt-2 ms-0'></Card.Title>
                    <Card.Text>
                       {
                       des.length < 200 ? <>{des}</>
                       :<>{des.slice(0,200)}...<Link className='text-danger' to={`/food/${_id}`}>See More</Link></>
                       }
                    </Card.Text>
                </Card.Body>
                
            </Card>
        </div>
    );
};

export default ResCard;