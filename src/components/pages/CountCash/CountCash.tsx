import { useEffect, useState } from "react";
import "./CountCash.scss";

function CountCash() {
    const [mil, setMil] = useState(0);
    const [quinientos, setQuinientos] = useState(0);
    const [doscientos, setDoscientos] = useState(0);
    const [cien, setCien] = useState(0);
    const [cincuenta, setCincuenta] = useState(0);
    const [veinte, setVeinte] = useState(0);
    const [diesBillete, setDiesBillete] = useState(0);
    const [diesMonedas, setDiesMonedas] = useState(0);

    const [total, setTotal] = useState(0);
    const reset = () => {
        setMil(0);
        setQuinientos(0);
        setDoscientos(0);
        setCien(0);
        setCincuenta(0);
        setVeinte(0);
        setDiesBillete(0);
        setDiesMonedas(0);
        sumar();
    };
    const sumar = () => {
        setTotal(
            1000 * mil +
                500 * quinientos +
                200 * doscientos +
                100 * cien +
                50 * cincuenta +
                20 * veinte +
                10 * diesBillete +
                10 * diesMonedas
        );
    };

    useEffect(() => {
        sumar();
    }, [
        mil,
        quinientos,
        doscientos,
        cien,
        cincuenta,
        veinte,
        diesBillete,
        diesMonedas,
        sumar,
    ]);
    return (
        <div className="CountCash">
            <button className="btn btn-lg btn-danger btnReset" type="button" onClick={() => reset()}>Reset</button>
            <ul>
                <li>
                    <label htmlFor="1000">$1000</label>
                    <input
                    className="form-control"
                        placeholder='Cantidad'
                        type="number"
                        value={mil === 0 ? "" : mil}
                        id="1000"
                        name="1000"
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            setMil(isNaN(value) ? 0 : value);
                        }}
                    />
                </li>
                <li>
                    <label htmlFor="500">$500</label>
                    <input
                    className="form-control"
                        placeholder='Cantidad'
                        type="number"
                        value={quinientos === 0 ? "" : quinientos}
                        id="500"
                        name="500"
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            setQuinientos(isNaN(value) ? 0 : value);
                        }}
                    />
                </li>
                <li>
                    <label htmlFor="200">$200</label>
                    <input
                    className="form-control"
                        placeholder='Cantidad'
                        type="number"
                        value={doscientos === 0 ? "" : doscientos}
                        id="200"
                        name="200"
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            setDoscientos(isNaN(value) ? 0 : value);
                        }}
                    />
                </li>
                <li>
                    <label htmlFor="100">$100</label>
                    <input
                    className="form-control"
                        placeholder='Cantidad'
                        type="number"
                        value={cien === 0 ? "" : cien}
                        id="100"
                        name="100"
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            setCien(isNaN(value) ? 0 : value);
                        }}
                    />
                </li>
                <li>
                    <label htmlFor="50">$50</label>
                    <input
                    className="form-control"
                        placeholder='Cantidad'
                        type="number"
                        value={cincuenta === 0 ? "" : cincuenta}
                        id="50"
                        name="50"
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            setCincuenta(
                                isNaN(value) ? 0 : value
                            );
                        }}
                    />
                </li>
                <li>
                    <label htmlFor="20">$20</label>
                    <input
                    className="form-control"
                        placeholder='Cantidad'
                        type="number"
                        value={veinte === 0 ? "" : veinte}
                        id="20"
                        name="20"
                        onChange={(e) => {
                            const value= parseInt(e.target.value)
                            setVeinte(
                                isNaN(value) ? 0 : value
                            );
                        }}
                    />
                </li>
                <li>
                    <label htmlFor="10Billete">$10</label>
                    <input
                    className="form-control"
                        placeholder='Cantidad'
                        type="number"
                        value={diesBillete === 0 ? "" : diesBillete}

                        id="10Billete"
                        name="10Billete"
                        onChange={(e) => {
                            const value =parseInt(e.target.value)
                            setDiesBillete(
                                isNaN(value)
                                    ? 0
                                    : value
                            );
                        }}
                    />
                </li>
                <li>
                    <label htmlFor="10Moneda">$10</label>
                    <input
                    className="form-control"
                        placeholder='Cantidad'
                        type="number"
                        value={diesMonedas === 0 ? "" : diesMonedas}
                        id="10Moneda"
                        name="10Moneda"
                        onChange={(e) => {
                            const value =parseInt(e.target.value)
                            setDiesMonedas(
                                isNaN(value)
                                    ? 0
                                    : value
                            );
                        }}
                    />
                </li>
            </ul>
            <p className="text-success">total ${total}</p>
        </div>
    );
}

export default CountCash;
