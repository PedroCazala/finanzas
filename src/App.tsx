import "bootswatch/dist/cyborg/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Aside from "./components/Aside/Aside";
import CountCash from "./components/pages/CountCash/CountCash";
import FinancialGoalCalculator from "./components/pages/FinancialGoalCalculator/FinancialGoalCalculator";

function App() {
    return (
        <div className="App">
            <Router>
                <Aside />
                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div>
                                    <h1>Finanzas</h1>
                                    <div>
                                        <p>
                                            Esta aplicación cuenta con varias
                                            paginas que les servirán al usuario
                                            con su economía. Es una herramienta
                                            que te permite administrar tus
                                            finanzas y hacer planes a largo
                                            plazo.
                                        </p>
                                        <p>
                                            Esta aplicación podría ser útil
                                            tanto para individuos como para
                                            empresas que quieren tener una
                                            visión clara y completa de sus
                                            finanzas y hacer planes para el
                                            futuro.
                                        </p>
                                    </div>
                                    <p style={{ textAlign: "left" }}>
                                        👈 Utiliza ese botón para abrir el menu
                                    </p>
                                </div>
                            }
                        />
                        <Route
                            path="/contar-efectivo"
                            element={<CountCash />}
                        />
                        <Route
                            path="/meta-financiera"
                            element={<FinancialGoalCalculator />}
                        />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
