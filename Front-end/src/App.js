
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter as Router} from "react-router-dom"
import RouteApp from "./Router/RouteApp";

function App() {

    return (
        <Router>
                <NavBar userLogin={false}/>
                <RouteApp/>
                <Footer/>
        </Router>
    );
}

export default App;
