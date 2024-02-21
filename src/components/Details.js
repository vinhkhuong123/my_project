import { useNavigate,  useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import "../assets/styles/Details.css"

function Details() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        var isLogin = localStorage.getItem("isLogin");
        if (!isLogin) {
            navigate("/login");
        }
    }, []);

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/products/" + id).then((res) => {
            setProduct(res.data.data);
        });
    }, []);

    console.log(product);

    return (
        <>
            <Header />
            <Card.Title className="detail-title">{product.productName}</Card.Title>
            <div className="detail-container">
                <Card className="d1 col-3 mb-2">
                    <Card.Img variant="top" src={product.img}/>
                    <div className="d2">
                        <Card.Text className="prize">{product.productPrice}<sup>₫</sup></Card.Text>
                        <Card.Text className="rating">Rating: {product.productRate} star</Card.Text>
                    </div>
                </Card>
                <Card className="d3 col-4 mb-2">
                    <Card.Text className="detail">
                        <Card.Title className="d3-title">Thông tin sản phẩm</Card.Title>
                        {product.productDetails}
                    </Card.Text>
                </Card>
            </div>
        </>
    );
}
export default Details;
