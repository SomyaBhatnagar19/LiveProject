/* /frontend/Pages/Vender.js */

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Vender = () => {
  const [vendorDetails, setVendorDetails] = useState({
    name: '',
    address: '',
    category: '',
    city: '',
    state: '',
    pin: '',
    gstNumber: '',
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
    console.log('Vendor Details:', vendorDetails);
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

      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="p-4 rounded-lg shadow-lg bg-light">
              <h2 className="text-center mb-4">Vendor Details</h2>
              <Form onSubmit={handleSave}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={vendorDetails.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={vendorDetails.address}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formCategory">
                  <Form.Label>Category</Form.Label>
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
                </Form.Group>

                <Form.Group controlId="formCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={vendorDetails.city}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formState">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={vendorDetails.state}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPin">
                  <Form.Label>PIN</Form.Label>
                  <Form.Control
                    type="text"
                    name="pin"
                    value={vendorDetails.pin}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formGstNumber">
                  <Form.Label>GST Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="gstNumber"
                    value={vendorDetails.gstNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Save
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vender;