import "bootswatch/dist/cyborg/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.scss";
import ContarEfectivo from "./components/pages/ContarEfectivo/CountCash";

function App() {
    return (
        <div className="App">
            <Router>
                <h1>hola</h1>
                hola mundo
                <Routes>
                    <Route path="/" element={<p>Este es el index</p>} />
                    <Route path="/contar-efectivo" element={<ContarEfectivo/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
