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
  // Form style
  const customFormStyle = {
    backgroundColor: "#f9f9f3",
    padding: "20px",
    border: "1px solid #edefdd",
    borderRadius: "8px",
    // maxWidth: "700px",
    // marginTop: "2rem",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
  };

  // Input row style
  const inputRowStyle = {
    marginBottom: "10px", // Adjusted margin for a cleaner look
  };

  // Button container style
  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  };

  return (
    <div>
      <h3
        style={{
          marginBottom: "2rem",
          borderLeft: "4px solid #5a536b",
          backgroundColor: "#e1dbee",
          padding: "6px"
        }}
      >
        {" "}
        Product Master
      </h3>
      <Container>
        <Form style={customFormStyle}>
          <Row style={inputRowStyle}>
            <Col>
              <Form.Label>Product Name:</Form.Label>
            </Col>
            <Col>
              <FormControl type="text" required />
            </Col>
          </Row>

          <Row style={inputRowStyle}>
            <Col>
              <Form.Label>Category:</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" required>
                <option value="">Select Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                
              </Form.Control>
            </Col>
          </Row>

          <Row style={inputRowStyle}>
            <Col>
              <Form.Label>Sub-Category:</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" required>
                <option value="">Select Sub-Category</option>
                <option value="subCategory1">Sub-Category 1</option>
                <option value="subCategory2">Sub-Category 2</option>
               
              </Form.Control>
            </Col>
          </Row>

          <Row style={inputRowStyle}>
            <Col>
              <Form.Label>Units:</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" required>
                <option value="">Select Units</option>
                <option value="kg">kg</option>
                <option value="litre">litre</option>
                <option value="packet">packet</option>
                <option value="bags">bags</option>
              </Form.Control>
            </Col>
          </Row>

          <Row style={inputRowStyle}>
            <Col>
              <Form.Label>Rate: </Form.Label>
            </Col>
            <Col>
              <FormControl type="number" required />
            </Col>
          </Row>

          <Row style={inputRowStyle}>
            <Col>
              <Form.Label>MRP: </Form.Label>
            </Col>
            <Col>
              <FormControl type="number" required />
            </Col>
          </Row>

          <Row style={inputRowStyle}>
            <Col>
              <Form.Label>Opening Balance: </Form.Label>
            </Col>
            <Col>
              <FormControl type="text" required />
            </Col>
          </Row>

          <div style={buttonContainerStyle}>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
