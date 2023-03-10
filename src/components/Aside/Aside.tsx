import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Aside.scss";

function Aside() {
    const [valueAside, setValueAside] = useState(true);

    const onChangeValueAside = (): void => {
        setValueAside(!valueAside);
    };
    return (
        <div className="aside">
            {!valueAside ? (
                <aside className="bg-primary menu">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <div className="container-fluid">
                            <NavLink
                                to="/"
                                className="navbar-brand"
                                onClick={() => onChangeValueAside()}
                            >
                                HOME
                            </NavLink>
                            <NavLink
                                to="/contar-efectivo"
                                className="navbar-brand"
                                onClick={() => onChangeValueAside()}
                            >
                                Contar Efectivo
                            </NavLink>
                            <NavLink
                                to="/meta-financiera"
                                className="navbar-brand"
                                onClick={() => onChangeValueAside()}
                            >
                                Calculadora de meta financiera
                            </NavLink>
                            <NavLink
                                to="/dividir-gastos"
                                className="navbar-brand"
                                onClick={() => onChangeValueAside()}
                            >
                                Dividir gastos
                            </NavLink>
                        </div>
                    </nav>
                </aside>
            ) : (
                <></>
            )}
            <button
                className="btn btn-primary"
                onClick={() => onChangeValueAside()}
            >
                {valueAside ? (
                    <img
                        src="/images/Icons/flechaBlancaAsideClose.svg"
                        alt="Abrir men?? de categor??as"
                    />
                ) : (
                    <img
                        src="/images/Icons/flechaBlancaAsideOpen.svg"
                        alt="Cerrar men?? de categor??as"
                    />
                )}
            </button>
        </div>
    );
}

export default Aside;
