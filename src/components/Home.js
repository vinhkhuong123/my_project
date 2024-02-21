import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "../assets/styles/Home.css"
import banner from "../assets/images/banner.png"

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        var isLogin = localStorage.getItem("isLogin");
        if (!isLogin) {
            navigate("login");
        }
    }, []);

    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/products").then((res) => {
            setProduct(res.data.data);
        });
    }, []);

  return (
    <>
        <Header />
        <div className="row">
            <Card.Img className="banner" src={banner}/>
            {product.map((item) => {
                return (
                    <Card className="item col-4 mb-2">
                        <div className="border">
                            <Card.Img variant="top" src={item.img} height="300px" width="100px"/>
                            <Card.Body>
                                <Card.Title className="item-name">{item.productName}</Card.Title>
                                <Card.Text className="prize">{item.productPrice}<sup>₫</sup></Card.Text>
                                <Card.Text className="detail">{item.productDetails}</Card.Text>
                                <Card.Text className="rating">Rating: {item.productRate} star</Card.Text>
                                <Button variant="primary">
                                    <Link to={`/detail/${item.id}`} className="detail-btn" style={{ textDecoration: "none", color: "white" }}>Detail</Link>
                                </Button>
                            </Card.Body>
                            </div>
                    </Card>
                );
            })}
        </div>
    </>
  );
}

export default Home;