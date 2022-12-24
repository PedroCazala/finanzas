import "bootswatch/dist/cyborg/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.scss";
import CountCash from "./components/pages/CountCash/CountCash";

function App() {
    return (
        <div className="App">
            <Router>
                <h1>hola</h1>
                hola mundo
                <Routes>
                    <Route path="/" element={<p>Este es el index</p>} />
                    <Route path="/contar-efectivo" element={<CountCash/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
