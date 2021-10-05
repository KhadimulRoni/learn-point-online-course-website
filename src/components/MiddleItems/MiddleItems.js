import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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
                <div>
                    <h3 className="title3 py-3">Our Popular Courses</h3>
                </div>
            {
                items?.map(item => <div 
                key={item.title}
                className="col-md-4 my-3 p-3 cart"> 
                    <Card style={{ width: '22rem' }}>
                        <Card.Img className="cartImg" variant="top" src={item.img} />
                        
                        <Card.Body>
                            <Card.Title><h3>{item.title}</h3></Card.Title>

                        <div className="d-flex CartDate p-3 "> 
                            <Card.Text>Started on {item.date}</Card.Text> |
                            <Card.Text>{item.duration}</Card.Text>
                        </div>
                            <Card.Text><span className="text-danger cartPrice">${item.price}</span> / month</Card.Text>

                            <Button className="btn btn-primary px-3">Enroll Now</Button>
                        </Card.Body>
                    </Card>
                </div>)
            } 
            </div>
            <div>
            <NavLink to="courses"> <Button  className="btn-danger my-3 allCourseBtn px-3"><h3>All Courses</h3></Button> </NavLink> 
            </div>         
        </div>
        
    );
};

export default MiddleItems;