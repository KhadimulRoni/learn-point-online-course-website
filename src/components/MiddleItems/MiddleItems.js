import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './ModdleItem.css';

const MiddleItems = () => {

    const [items,setItems] = useState([]);

    useEffect( () => {
        fetch("./middleItem.json")
        .then( res => res.json())
        .then( data => setItems(data));
    }, [])



    return (
        <div className="row itemCart">
            {
                items.map(item => <div className="col-md-4 my-3 p-3"> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="cartImg" variant="top" src={item.img} />
                        
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>

                        <div className="d-flex CartDate"> 
                            <Card.Text>Started on {item.date}</Card.Text> |
                            <Card.Text>{item.duration}</Card.Text>
                        </div>
                            <Card.Text><span className="text-danger cartPrice">${item.price}</span> / month</Card.Text>

                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>)
            }          
        </div>
    );
};

export default MiddleItems;