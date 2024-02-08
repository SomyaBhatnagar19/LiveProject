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

  // State to store product data
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [units, setUnits] = useState([]);
  // State to store the data for adding/editing a new product
  const [newProductData, setNewProductData] = useState({
    productName: "",
    category: "",
    subCategory: "",
    units: "",
    rate: "",
    mrp: "",
    openingBalance: "",
  });

  // State to store the data for editing a product
  const [editProductData, setEditProductData] = useState({
    id: null,
    productName: "",
    category: "",
    subCategory: "",
    units: "",
    rate: "",
    mrp: "",
    openingBalance: "",
  });

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchSubCategories();
    fetchUnits();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/productMaster");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/dropdownOne/categories"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchSubCategories = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/dropdownTwo/subcategories"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setSubCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchUnits = async () => {
    try {
      const response = await fetch("http://localhost:3001/dropdownThree/units");
      if (!response.ok) {
        throw new Error("Failed to fetch units");
      }
      const data = await response.json();
      setUnits(data);
    } catch (error) {
      console.error("Error fetching units:", error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch("http://localhost:3001/productMaster", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProductData),
      });

      if (response.ok) {
        fetchProducts();
        setShowForm(false);
        setNewProductData({
          productName: "",
          categoryId: "",
          subCategoryId: "",
          units: "",
          rate: "",
          mrp: "",
          openingBalance: "",
        });
        alert('Product added successfully!');
      } else {
        console.error("Error adding product:", response.statusText);
        alert('Error adding product.' , response.statusText);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert('Error adding product.');
    }
  };

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setNewProductData({
      ...newProductData,
      [fieldName]: value,
    });
  };
  // Function to handle opening edit form and populating fields
  const handleEditFormOpen = (
    id,
    productName,
    category,
    subCategory,
    units,
    rate,
    mrp,
    openingBalance
  ) => {
    setEditProductData({
      id: id,
      productName: productName,
      category: category,
      subCategory: subCategory,
      units: units,
      rate: rate,
      mrp: mrp,
      openingBalance: openingBalance,
    });
    setNewProductData({
      ...newProductData,
      productName: productName,
      category: category,
      subCategory: subCategory,
      units: units,
      rate: rate,
      mrp: mrp,
      openingBalance: openingBalance,
    });
    setShowForm(true);
  };

  // Function to handle editing a product
  const handleEditProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/productMaster/${editProductData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editProductData),
        }
      );

      if (response.ok) {
        // Refresh the product list after editing a product
        fetchProducts();
        setShowForm(false);
      } else if (response.status === 404) {
        console.error("Product not found");
      } else {
        console.error("Error editing product:", response.statusText);
      }
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  // Function to handle deleting a product
  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/productMaster/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Deletion successful.");
        fetchProducts();
      } else {
        console.error("Error deleting product:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
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
        Product Master
      </h3>
      <Container>
        <Button
          variant="primary"
          onClick={() => setShowForm(!showForm)}
          style={{ marginBottom: "2rem" }}
        >
          {showForm ? "Hide Form" : "Add New Product"}
        </Button>
        {showForm && (
          <Form
            style={{
              backgroundColor: "#f9f9f3",
              padding: "20px",
              border: "1px solid #edefdd",
              borderRadius: "8px",
              boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              handleAddProduct();
            }}
          >
            <Row style={{ marginBottom: "10px" }}>
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

            <Row style={{ marginBottom: "10px" }}>
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
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Row>

            <Row style={inputRowStyle}>
              <Col>
                <Form.Label>Subcategory:</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  as="select"
                  required
                  value={newProductData.subCategory}
                  onChange={(e) => handleInputChange(e, "subCategory")}
                >
                  <option value="">Select Sub-Category</option>
                  {subcategories.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.id}>
                      {subcategory.name}
                    </option>
                  ))}
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
                  {units.map((units) => (
                    <option key={units.id} value={units.id}>
                      {units.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Row>

            <Row style={inputRowStyle}>
              <Col>
                <Form.Label>Rate:</Form.Label>
              </Col>
              <Col>
                <FormControl
                  type="number"
                  required
                  value={newProductData.rate}
                  onChange={(e) => {
                    const { value } = e.target;
                    setNewProductData({
                      ...newProductData,
                      rate: value,
                    });
                  }}
                />
              </Col>
            </Row>

            <Row style={inputRowStyle}>
              <Col>
                <Form.Label>MRP:</Form.Label>
              </Col>
              <Col>
                <FormControl
                  type="number"
                  required
                  value={newProductData.mrp}
                  onChange={(e) => {
                    const { value } = e.target;
                    if (parseFloat(value) < parseFloat(newProductData.rate)) {
                      setNewProductData({
                        ...newProductData,
                        mrp: value,
                      });
                    } else {
                      alert("MRP must be less than Rate");
                    }
                  }}
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
              {/* <th>ID</th> */}
              <th>Product Name</th>
              <th>Category</th>
              <th>Sub-Category</th>
              <th>Units</th>
              <th>Rate</th>
              <th>MRP</th>
              <th>Opening Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                {/* <td>{product.id}</td> */}
                <td>{product.productName}</td>
                <td>{product.category}</td>
                <td>{product.subCategory}</td>
                <td>{product.units}</td>
                <td>{product.rate}</td>
                <td>{product.mrp}</td>
                <td>{product.openingBalance}</td>
                <td>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Button
                      onClick={() =>
                        handleEditFormOpen(
                          product.id,
                          product.productName,
                          product.category,
                          product.subCategory,
                          product.units,
                          product.rate,
                          product.mrp,
                          product.openingBalance
                        )
                      }
                    >
                      Edit
                    </Button>
                    <Button onClick={() => handleDeleteProduct(product.id)}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
