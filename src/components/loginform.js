import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import "../assets/styles/Login.css"

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
        <Form.Label className="login-title">Login to your account</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="login-text">Username</Form.Label>
          <Form.Control
            type="text"
            onBlur={(e) => setname(e.target.value)}
            placeholder="Enter your username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="login-text">Password</Form.Label>
          <Form.Control
            type="password"
            onBlur={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
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
