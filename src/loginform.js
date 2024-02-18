import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

function LoginForm() {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login() {
    let item = { username: name, password };

    await axios.post("http://localhost:8000/users", item).then((res) => {
      if (res.data) {
        console.log();
        localStorage.setItem("isLogin", true);
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Tên đăng nhập hoặc mật khẩu sai",
        });
      }
    });
  }

  return (
    <div className="m-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            onBlur={(e) => setname(e.target.value)}
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onBlur={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" onClick={login}>
          Login
        </Button>
      </Form>
    </div>
  );
}
export default LoginForm;
