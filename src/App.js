// Import the necessary dependencies and components
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Information from "./pages/Information";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/view" element={<Information />} />
            </Routes>
        </div>
    );
}

export default App;
