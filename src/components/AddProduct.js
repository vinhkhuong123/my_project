import React, { useState } from 'react';
import axios from "axios";
import { Modal, Form, Button } from 'react-bootstrap';

const AddProduct = ({ onClose, onProductAdded }) => {
    const [productDetails, setProductDetails] = useState({
        productName: '',
        productPrice: 0,
        productDetails: '',
        productRate: 0,
        img: '',
    });

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(`http://localhost:8000/products`, productDetails);
        if (response.data.status) {
            console.log('Product added successfully!');
            onClose();
            onProductAdded();
        } else {
            console.error('Error adding product:', response.data.message);
        }
    }
    catch (error) {
        console.error('Error:', error);
    }
};

return (
    <Modal show={true} onHide={onClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="productName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" value={productDetails.productName} onChange={(e) => setProductDetails({ ...productDetails, productName: e.target.value })}/>
                </Form.Group>

                <Form.Group controlId="productPrice">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="number" step="1000" value={productDetails.productPrice} onChange={(e) => setProductDetails({ ...productDetails, productPrice: e.target.value })}/>
                </Form.Group>

                <Form.Group controlId="productDetails">
                    <Form.Label>Product Details</Form.Label>
                    <Form.Control as="textarea" rows={4} value={productDetails.productDetails} onChange={(e) => setProductDetails({ ...productDetails, productDetails: e.target.value })}/>
                </Form.Group>

                <Form.Group controlId="productRate">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control as="select" value={productDetails.productRate} onChange={(e) => setProductDetails({ ...productDetails, productRate: e.target.value })}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="img">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control type="text" value={productDetails.img} onChange={(e) => setProductDetails({ ...productDetails, img: e.target.value })}/>
                </Form.Group>
                <Button variant="primary" type="submit">Add Product</Button>
            </Form>
        </Modal.Body>
    </Modal>
  );
};

export default AddProduct;