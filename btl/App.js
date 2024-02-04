import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom'
import Detail from './Details';

function App() 
{
    return (
        <>
            <Routes>
                <Route path = "/" element = {<Home />}></Route>
                <Route path = "/detail" element = {<Details />}></Route>
            </Routes>
        </>
    );

}
export default App;
