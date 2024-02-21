import { useNavigate,  useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <Card className="m-auto col-4 mb-2">
        <Card.Img
          variant="top"
          src={product.img}
          height="300px"
          width="100px"
        />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Text>{product.productPrice}</Card.Text>
          <Card.Text>{product.productDetails}</Card.Text>
          <Card.Text>đánh giá: {product.productRate} sao</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default Details;
