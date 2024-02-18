import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

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
      <h1 className="text-center mb-3"> bai tap lon</h1>
      <div className="row" style={{ padding: "0 200px" }}>
        {product.map((item) => {
          return (
            <>
              <Card className="col-4 mb-2">
                <Card.Img
                  variant="top"
                  src={item.Img}
                  height="300px"
                  width="100px"
                />
                <Card.Body>
                  <Card.Title>{item.ProductName}</Card.Title>
                  <Card.Text>{item.productPrice}</Card.Text>
                  <Card.Text>{item.ProductDetails}</Card.Text>
                  <Card.Text>Đánh giá: {item.ProductRate} sao</Card.Text>
                  <Button variant="primary">
                    <Link
                      to={`/detail/${item.Id}`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      dat hang
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;
