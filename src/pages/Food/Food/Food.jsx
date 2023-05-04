import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Food = () => {
    const food = useLoaderData()
    console.log(food)
    const {  title, image_url,des } = food;
   
    return (
    
            <Card >
              <Card.Img variant="top" src={image_url}/>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                 {des}
                </Card.Text>
                <Button className='text-white' variant='danger'><Link to='/'>Go to Back</Link></Button>
              </Card.Body>
            </Card>
         
    );
};

export default Food;