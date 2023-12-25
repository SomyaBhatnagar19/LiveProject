/* /frontend/Pages/ProductMaster.js */

import React from "react";
import {
  Form,
  Container,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

export default function ProductMaster() {
  // Body style
  const bodyStyle = {
    backgroundColor: "#e1e8f0",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  };

  // Form style
  const customFormStyle = {
    backgroundColor: "#9068be",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "700px",
  };

  return (
    <div style={bodyStyle}>
      <Container>
        <Form style={customFormStyle}>
          <Row className="mb-1">
            <Col>
              <Form.Label>Product Name: </Form.Label>
            </Col>
            <Col>
              <FormControl type="text" required />
            </Col>
          </Row>

          <Row className="mb-1">
            <Col>
              <Form.Label>Category: </Form.Label>
            </Col>
            <Col>
              <FormControl type="text" required />
            </Col>
          </Row>

          <Row className="mb-1">
            <Col>
              <Form.Label>Sub-Category: </Form.Label>
            </Col>
            <Col>
              <FormControl type="text" required />
            </Col>
          </Row>

          <Row className="mb-1">
            <Col>
              <Form.Label>Rate: </Form.Label>
            </Col>
            <Col>
              <FormControl type="text" required />
            </Col>
          </Row>

          <Row className="mb-1">
            <Col>
              <Form.Label>MRP: </Form.Label>
            </Col>
            <Col>
              <FormControl type="text" required />
            </Col>
          </Row>

          <Row className="mb-1">
            <Col>
              <Form.Label>Opening Balance: </Form.Label>
            </Col>
            <Col>
              <FormControl type="text" required />
            </Col>
          </Row>

          <div className="d-flex justify-content-end mt-4">
  <Button variant="primary" type="submit">
    Save
  </Button>
</div>

        </Form>
      </Container>
    </div>
  );
}
