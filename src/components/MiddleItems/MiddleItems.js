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
        <div>
            <div className="row itemCart">
            {
                items.map(item => <div className="col-md-4 my-3 p-3 cart"> 
                    <Card style={{ width: '22rem' }}>
                        <Card.Img className="cartImg" variant="top" src={item.img} />
                        
                        <Card.Body>
                            <Card.Title><h3>{item.title}</h3></Card.Title>

                        <div className="d-flex CartDate p-3 "> 
                            <Card.Text>Started on {item.date}</Card.Text> |
                            <Card.Text>{item.duration}</Card.Text>
                        </div>
                            <Card.Text><span className="text-danger cartPrice">${item.price}</span> / month</Card.Text>

                            <Button className="btn btn-primary px-3">Details</Button>
                        </Card.Body>
                    </Card>
                </div>)
            } 
            </div>
            <div>
                <Button className="btn btn-danger my-3"><h3>All Courses</h3></Button>  
            </div>         
        </div>
        
    );
};

export default MiddleItems;