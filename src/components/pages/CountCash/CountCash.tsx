import { useEffect, useState } from "react";
import "./CountCash.scss";
import LiFormCountCash from "./LiFormCountCash";

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
    const sumar = ():void => {
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
            <p className="text-primary total">total <b>${total}</b></p>
            <ul>
                <LiFormCountCash number={1000} value={mil} setValue={setMil}/>
                <LiFormCountCash number={500} value={quinientos} setValue={setQuinientos}/>
                <LiFormCountCash number={200} value={doscientos} setValue={setDoscientos}/>
                <LiFormCountCash number={100} value={cien} setValue={setCien}/>
                <LiFormCountCash number={50} value={cincuenta} setValue={setCincuenta}/>
                <LiFormCountCash number={20} value={veinte} setValue={setVeinte}/>
                <LiFormCountCash number={10} value={diesBillete} setValue={setDiesBillete}/>
                <LiFormCountCash number={10} value={diesMonedas} setValue={setDiesMonedas}/>
            </ul>
        </div>
    );
}

export default CountCash;
