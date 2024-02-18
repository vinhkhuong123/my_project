import { useState, useEffect} from "react"
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function Home() 
{

    const [seafood, setSeafood] = useState([]);
    useEffect( () => {
        axios.get("http://localhost:8000/products")
            .then(res => {
                setSeafood(res.data.data)
            })
    },[]

    )

    console.log(seafood)

    return (
        <>
            <h1 className="text-center mb-3"> bai tap lon</h1>
            <div className="row" style={{padding: "0 200px"}}>
                {seafood.map(item => {
                    return (
                        <>
                            <Card className="col-4 mb-2">
                                <Card.Img variant = "top" src = {item.Img} height="300px" width = "100px"/>
                                <Card.Body>
                                    <Card.Title>{item.ProductName}</Card.Title>
                                    <Card.Text>{item.productPrice}</Card.Text>
                                    <Card.Text>
                                        {item.ProductDetails}
                                    </Card.Text>
                                    <Button variant="primary"> <Link to ="/detail" style={{ textDecoration:"none", color:"white"}}> dat hang</Link> </Button>
                                </Card.Body>
                            </Card>
                        </>
                    )
                })}
            </div>
        </>
    )

}

export default Home