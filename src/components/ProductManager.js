import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import Header from "./Header";
import "../assets/styles/Manager.css"

function ProductManager() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/products").then((res) => {
            setProduct(res.data.data);
        });
    }, []);

    const [showAddProduct, setShowAddProduct] = useState(false);
    const [showEditProduct, setShowEditProduct] = useState(false);
    const [editingProductId, setEditingProductId] = useState(null);

    const handleAddProduct = () => {
        setShowAddProduct(true);
    };

    const handleProductAdded = () => {
        setProduct([]);
        axios.get("http://localhost:8000/products").then((res) => {
            setProduct(res.data.data);
        });
    };

    const handleProductUpdated = () => {
        axios.get("http://localhost:8000/products").then((res) => {
            setProduct(res.data.data);
        });
    };
    
    const handleEditProduct = (productId) => {
        setEditingProductId(productId);
        setShowEditProduct(true);
    };
    
    const handleDeleteProduct = async (productId) => {
        try {
            const response = await axios.delete(`http://localhost:8000/products/${productId}`);
            if (response.data.data.isSuccess) {
                setProduct(product.filter((item) => item.id !== productId));
            } else {
                console.error('Error:', response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <>
            <Header />
            <h1 className="manager-title text-center mb-3">Products Manager</h1>
            {product.length > 0 && (
                <>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Details</th>
                            <th>Rating</th>
                        </tr>
                        </thead>
                        <tbody>
                            {product.map((item) => {
                                return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.productPrice}<sup>₫</sup></td>
                                    <td>{item.img}</td>
                                    <td>{item.productDetails}</td>
                                    <td>{item.productRate}</td>
                                    <td className="manager-btn">
                                    {item.id && (
                                        <Button variant="primary" onClick={() => handleEditProduct(item.id)}>Edit</Button>
                                    )}
                                    {item.id && (
                                        <Button variant="danger" onClick={() => handleDeleteProduct(item.id)}>Delete</Button>
                                    )}
                                    </td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                    <Button variant="success" onClick={handleAddProduct}>Add Product</Button>
                </>
            )}
            {showAddProduct && <AddProduct show={showAddProduct} onClose={() => setShowAddProduct(false)} onProductAdded={handleProductAdded} />}
            {showEditProduct && <EditProduct show={showEditProduct} onClose={() => setShowEditProduct(false)} onProductUpdated={() => handleProductUpdated()} editingProductId={editingProductId} onProductAdded={handleProductAdded} />}
        </>
    );
}

export default ProductManager;