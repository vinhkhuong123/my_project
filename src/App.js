import './assets/App.css';
import Home from './components/Home';
import Header from './components/Header';
import Details from './components/Details';
import ProductManager from './components/ProductManager';
import { Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function App() 
{
    return (
        <>
            <Header />
            <Routes>
                <Route path = "/" element = {<Home />}></Route>
                <Route path = "/detail" element = {<Details />}></Route>
                <Route path = '/product' element= {<ProductManager/>} />
            </Routes>
        </>
    );

}
export default App;
