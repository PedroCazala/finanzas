import "bootswatch/dist/cyborg/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Aside from "./components/Aside/Aside";
import CountCash from "./components/pages/CountCash/CountCash";
import FinancialGoalCalculator from "./components/pages/FinancialGoalCalculator/FinancialGoalCalculator";
import Index from "./components/pages/Index/Index";
import SplitMoney from "./components/pages/SplitMoney/SplitMoney";

function App() {
    return (
        <div className="App">
            <Router>
                <Aside />
                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={<Index/>}
                        />
                        <Route
                            path="/contar-efectivo"
                            element={<CountCash />}
                        />
                        <Route
                            path="/meta-financiera"
                            element={<FinancialGoalCalculator />}
                        />
                        <Route
                            path="/dividir-gastos"
                            element={<SplitMoney/>}
                        />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
