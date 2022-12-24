import { useEffect, useState } from "react";
import "./FinancialGoalCalculator.scss";
type Periodicity = "monthly" | "annually";
function FinancialGoalCalculator() {
    const [percentage, setPercentage] = useState<Number>();
    const [desiredProfit, setDesiredProfit] = useState<Number>();
    const [periodicity, setPeriodicity] = useState<Periodicity>("monthly");

    const [necessaryMoney, setNecessaryMoney] = useState<Number>();

    const calculation = () => {
        if (
            typeof desiredProfit === "number" &&
            typeof percentage === "number"
        ) {
            let cuenta = 0;
            if (periodicity === "monthly") {
                cuenta = (desiredProfit * 12) / (percentage / 100);
            } else if (periodicity === "annually") {
                cuenta = desiredProfit / (percentage / 100);
            }
            setNecessaryMoney(cuenta);
        }
    };
    useEffect(() => {
        calculation();
    }, [percentage, desiredProfit, periodicity]);

    return (
        <div className="FinancialGoalCalculator">
            <h1>Calculadora de meta financiera</h1>
            <p>
                La aplicación te permite calcular cuánto dinero necesitas para
                alcanzar tu meta financiera.{" "}
                {/* Simplemente ingresa la cantidad que deseas alcanzar y el percentage ge ganancia mensual. La aplicación te proporcionará una estimación de cuánto necesitas para lograrlo. ¡Es una herramienta valiosa para planificar tus finanzas y alcanzar tus objetivos! */}
            </p>
            <form action="">
                <div className="col-sm-10 form-container">
                    <input
                        type="number"
                        className="form-control"
                        id="staticEmail"
                        placeholder="Ingresa el monto que quieres ganar"
                        onChange={(e) =>
                            setDesiredProfit(parseInt(e.target.value))
                        }
                    />
                    <select
                        className="form-select"
                        id="periodicity"
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value === "monthly" || value === "annually") {
                                setPeriodicity(value);
                            }
                        }}
                    >
                        <option value="monthly">Mensualmente</option>
                        <option value="annually">Anualmente</option>
                    </select>
                    <div className="input-group mb-3">
                        <input
                            type="number"
                            className="form-control"
                            aria-label="Amount (to the nearest dollar)"
                            onChange={(e) =>
                                setPercentage(parseInt(e.target.value))
                            }
                        />
                        <span className="input-group-text">%</span>
                    </div>
                </div>
                <button className="btn btn-primary"> Calcular </button>
            </form>
            {necessaryMoney ? (
                <p>
                    Necesitas: <b className="text-primary">${necessaryMoney.toFixed(2)}</b>, para
                    obtener una ganancia {periodicity === "monthly" && "mensual"}
                    {periodicity === "annually" && "anual"} de ${JSON.stringify(desiredProfit)}
                </p>
            ) : (
                ""
            )}
        </div>
    );
}

export default FinancialGoalCalculator;
