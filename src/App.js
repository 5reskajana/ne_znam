import Navbar from './Navbar'
import Footer from "./Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Introduction from "./important/Introduction";
import Creating from "./important/Creating";
import Design from "./important/Design";
import ShareDownload from "./important/ShareDownload";
import SharedLayout from "./pages/SharedLayout";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {Link, resolvePath, useMatch, useResolvedPath} from "react-router-dom"

function App() {


    return (
        <>
            <Navbar/>
            <div className="containerr">

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/features" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/create" element={<Introduction/>}/>
                    <Route path="/info" element={<Creating/>}/>
                    <Route path="/design" element={<Design/>}/>
                    <Route path="/share-download" element={<ShareDownload/>}/>
                </Routes>

            </div>


        </>

    )


}

export default App;
