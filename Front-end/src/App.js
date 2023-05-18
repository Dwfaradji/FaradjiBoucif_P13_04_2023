import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter as Router} from "react-router-dom"
import RouteApp from "./Router/RouteApp";
import {Provider} from "react-redux";
import store from "./app/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <NavBar userLogin={false}/>
                <RouteApp/>
                <Footer/>
            </Router>
        </Provider>
    );
}

export default App;
