import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';

function StoreListings() {
  return (
    <div>
        <h2>Browse stores in Houston</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    
                    <Col sm>
                    <Row>
                        <Col xs=".5" >
                            <Image src="https://dm.cms.aldi.cx/is/content/prod1amer/aldius-logo" style={{ height: "4em" }} roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    </Col>
                    <Col sm>
                    <Row >
                        <Col xs=".5">
                            <Image src="https://logos-world.net/wp-content/uploads/2022/11/Sprouts-Farmers-Market-Emblem.png" style={{ height: "4em" }} roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    </Col>
                    <Col sm>
                    <Row >
                        <Col xs=".5" >
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Kroger_logo_%281961-2019%29.svg/2486px-Kroger_logo_%281961-2019%29.svg.png" style={{ height: "4em" }} roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}

export default StoreListings