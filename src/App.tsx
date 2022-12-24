import "bootswatch/dist/cyborg/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.scss";
import Aside from "./components/Aside/Aside";
import CountCash from "./components/pages/CountCash/CountCash";

function App() {
    return (
        <div className="App">
            <Router>
                <Aside/>
                <main>
                    <Routes>
                        <Route path="/" element={<p>Este es el index</p>} />
                        <Route path="/contar-efectivo" element={<CountCash/>} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
