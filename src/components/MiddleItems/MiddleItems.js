import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MiddleItem.css';

const MiddleItems = () => {

    const [items,setItems] = useState([]);

    useEffect( () => {
        fetch("./middleItem.json")
        .then( res => res.json())
        .then( data => setItems(data));
    }, [])



    return (
        <div>
            <div className="row itemCart px-5 m-0">
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

                            <Link to=""><Button className="btn btn-primary px-3">Details</Button></Link>
                        </Card.Body>
                    </Card>
                </div>)
            } 
            </div>
            <div>
                <Button href="../Courses" className="btn btn-danger my-3 allCourseBtn"><h3>All Courses</h3></Button>  
            </div>         
        </div>
        
    );
};

export default MiddleItems;