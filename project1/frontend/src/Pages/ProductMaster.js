/* /frontend/Views/ProductMaster.js */

import React, { useState, useEffect } from "react";
import {
  Form,
  Container,
  FormControl,
  Button,
  Row,
  Col,
  Table,
} from "react-bootstrap";

export default function ProductMaster() {
  // Form style
  const customFormStyle = {
    backgroundColor: "#f9f9f3",
    padding: "20px",
    border: "1px solid #edefdd",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
  };

  // Input row style
  const inputRowStyle = {
    marginBottom: "10px",
  };

  // Button container style
  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  };

  // State to track whether the form should be displayed
  const [showForm, setShowForm] = useState(false);

  // Function to toggle the form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // State to store product data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the backend when the component mounts
    fetchProducts();
  }, []); // Empty dependency array ensures that it only runs once when the component mounts

  const fetchProducts = async () => {
    try {
      // Make a GET request to your backend endpoint for fetching products
      const response = await fetch("http://localhost:3001/productMaster");
      const data = await response.json();

      // Update the state with the fetched product data
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // State to track user input for adding a new product
  const [newProductData, setNewProductData] = useState({
    productName: "",
    category: "",
    subCategory: "",
    units: "",
    rate: "",
    mrp: "",
    openingBalance: "",
  });

  // Function to handle input change
  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setNewProductData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  // Function to handle adding a new product
  const handleAddProduct = async () => {
    try {
      // Make a POST request to add a new product
      const response = await fetch("http://localhost:3001/productMaster", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProductData), // Send user-entered data in the request body
      });

      if (response.ok) {
        // Refresh the product list after adding a new product
        fetchProducts();
        // Reset the form or close it if needed
        setShowForm(false);
        // Reset the new product data
        setNewProductData({
          productName: "",
          category: "",
          subCategory: "",
          units: "",
          rate: "",
          mrp: "",
          openingBalance: "",
        });
      } else {
        console.error("Error adding product:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
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
        Product Master
      </h3>
      <Container>
        <Button
          variant="primary"
          onClick={toggleForm}
          style={{ marginBottom: "2rem" }}
        >
          Add New Product
        </Button>
        {showForm && (
          <Form
            style={customFormStyle}
            onSubmit={(e) => {
              e.preventDefault();
              handleAddProduct(); // Call handleAddProduct on form submission
            }}
          >
            <Row style={inputRowStyle}>
              <Col>
                <Form.Label>Product Name:</Form.Label>
              </Col>
              <Col>
                <FormControl
                  type="text"
                  required
                  value={newProductData.productName}
                  onChange={(e) => handleInputChange(e, "productName")}
                />
              </Col>
            </Row>

            <Row style={inputRowStyle}>
              <Col>
                <Form.Label>Category:</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  as="select"
                  required
                  value={newProductData.category}
                  onChange={(e) => handleInputChange(e, "category")}
                >
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
                <Form.Control
                  as="select"
                  required
                  value={newProductData.subCategory}
                  onChange={(e) => handleInputChange(e, "subCategory")}
                >
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
                <Form.Control
                  as="select"
                  required
                  value={newProductData.units}
                  onChange={(e) => handleInputChange(e, "units")}
                >
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
                <FormControl
                  type="number"
                  required
                  value={newProductData.rate}
                  onChange={(e) => handleInputChange(e, "rate")}
                />
              </Col>
            </Row>

            <Row style={inputRowStyle}>
              <Col>
                <Form.Label>MRP: </Form.Label>
              </Col>
              <Col>
                <FormControl
                  type="number"
                  required
                  value={newProductData.mrp}
                  onChange={(e) => handleInputChange(e, "mrp")}
                />
              </Col>
            </Row>

            <Row style={inputRowStyle}>
              <Col>
                <Form.Label>Opening Balance: </Form.Label>
              </Col>
              <Col>
                <FormControl
                  type="text"
                  required
                  value={newProductData.openingBalance}
                  onChange={(e) => handleInputChange(e, "openingBalance")}
                />
              </Col>
            </Row>

            <div style={buttonContainerStyle}>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </Form>
        )}
      </Container>
      <Container>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Sub-Category</th>
              <th>Units</th>
              <th>Rate</th>
              <th>MRP</th>
              <th>Opening Balance</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.category}</td>
                <td>{product.subCategory}</td>
                <td>{product.units}</td>
                <td>{product.rate}</td>
                <td>{product.mrp}</td>
                <td>{product.openingBalance}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
