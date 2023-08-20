import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cardStyle = {
    border: 'none', // Remove the border
    borderRadius: 0, // Remove rounded edges
    backgroundColor: '#DEEDD6', // Change the background color
    color: 'black', // Change the text color
    padding: 0, // Remove default padding
};

const searchInputStyle = {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    marginTop: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
};

function Banner() {
    return (
        <Card style={{...cardStyle, maxHeight: '30em' }}>
            <Row>
                <Col sm={8}>
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'left' }}>Order groceries for delivery or pickup today</Card.Title>
                        <Card.Text style={{ textAlign: 'left' }}>
                            Whatever you want from lacal stores, brought right to your door.
                        </Card.Text>
                        <input type="text" placeholder="Enter your adress" style={searchInputStyle} />
                    </Card.Body>
                </Col>
                <Col sm={4}>
                    <Card.Img src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" style={{ maxHeight: '30em', objectFit: 'cover' }}/>
                </Col>
            </Row>
        </Card>
    );
}

export default Banner;
