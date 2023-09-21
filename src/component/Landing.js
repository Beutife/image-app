import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Landing = ({ Images }) => {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {Images.map((item, id) => (
          <Col key={id}>
            <div className="image">
              <img src={item.path} alt="image" className="img-fluid" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Landing;
