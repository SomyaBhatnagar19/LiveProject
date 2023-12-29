import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  FormControl,
} from "react-bootstrap";

const Vender = () => {
  const [vendorDetails, setVendorDetails] = useState({
    name: "",
    address: "",
    category: "",
    city: "",
    state: "",
    pin: "",
    gstNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // You can perform actions with the vendor details here
    console.log("Vendor Details:", vendorDetails);
  };

  // Form style
  const customFormStyle = {
    backgroundColor: "#f9f9f3",
    padding: "30px", // Increased padding to make the form larger
    border: "1px solid #edefdd",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
  };

  // Input row style
  const inputRowStyle = {
    marginBottom: "10px",
  };

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
          padding: "6px",
        }}
      >
        {" "}
        Vendor Master
      </h3>

      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <div style={customFormStyle}>
              <Form onSubmit={handleSave}>
                <Row style={inputRowStyle}>
                  <Col>
                    <Form.Label>Name:</Form.Label>
                  </Col>
                  <Col>
                    <FormControl
                      type="text"
                      name="name"
                      value={vendorDetails.name}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>

                <Row style={inputRowStyle}>
                  <Col>
                    <Form.Label>Address:</Form.Label>
                  </Col>
                  <Col>
                    <FormControl
                      type="text"
                      name="address"
                      value={vendorDetails.address}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>

                <Row style={inputRowStyle}>
                  <Col>
                    <Form.Label>Category:</Form.Label>
                  </Col>
                  <Col>
                    <Form.Select
                      name="category"
                      value={vendorDetails.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Row style={inputRowStyle}>
                  <Col>
                    <Form.Label>City:</Form.Label>
                  </Col>
                  <Col>
                    <FormControl
                      type="text"
                      name="city"
                      value={vendorDetails.city}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>

                <Row style={inputRowStyle}>
                  <Col>
                    <Form.Label>State:</Form.Label>
                  </Col>
                  <Col>
                    <FormControl
                      type="text"
                      name="state"
                      value={vendorDetails.state}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>

                <Row style={inputRowStyle}>
                  <Col>
                    <Form.Label>PIN:</Form.Label>
                  </Col>
                  <Col>
                    <FormControl
                      type="text"
                      name="pin"
                      value={vendorDetails.pin}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>

                <Row style={inputRowStyle}>
                  <Col>
                    <Form.Label>GST Number:</Form.Label>
                  </Col>
                  <Col>
                    <FormControl
                      type="text"
                      name="gstNumber"
                      value={vendorDetails.gstNumber}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>

                <div style={buttonContainerStyle}>
                  <Button variant="primary" type="submit">
                    Save
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vender;
