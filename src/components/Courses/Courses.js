import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Courses.css';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect( ()=> {
        fetch("./courses.json")
        .then( res => res.json())
        .then ( data => setCourses(data))

    }, [])



    return (
        <div>
            <div className="row courseCart px-5 m-0">
                <div>
                    <h2 className="title3 py-3">All Courses</h2>
                </div>
            {
                courses?.map(course => <div 
                    key={course.title}
                className="col-md-4 my-3 p-3 cart">
                    <Card style={{ width: '22rem' }}>
                        <Card.Img className="cartImg" variant="top" src={course.img} />
                        
                        <Card.Body> 
                            <Card.Title><h3>{course.title}</h3></Card.Title>

                        <div className="d-flex CartDate p-3 "> 
                            <Card.Text>Started on {course.date}</Card.Text> |
                            <Card.Text>{course.duration}</Card.Text>
                        </div>
                            <Card.Text><span className="text-danger cartPrice">${course.price}</span> / month</Card.Text>

                            <Button className="btn btn-primary px-3">Enroll Now</Button>
                        </Card.Body>
                    </Card>
                </div>)
            } 
            </div>
        
        </div>
        
    );
            
};

export default Courses;