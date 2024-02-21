import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/loginform";
import Details from "./components/Details";
import ProductManager from "./components/ProductManager";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginForm/>}></Route>
        <Route path="/detail/:id" element={<Details />}></Route>
        <Route path="/product" element={<ProductManager/>}></Route>
        <Route path="/logout" ></Route>
      </Routes>
    </>
  );
}
export default App;
