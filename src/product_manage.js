import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "./Header";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function ProductManager() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/products").then((res) => {
      setProduct(res.data.data);
    });
  }, []);
  return (
    <>
      <Header />
      <h1 className="text-center mb-3"> bai tap lon</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.ProductName}</td>
                <td>{item.productPrice}</td>
                <td>{item.Img}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default ProductManager;
