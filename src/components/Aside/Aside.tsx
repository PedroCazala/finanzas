import React from "react";
import { NavLink } from "react-router-dom";
import './Aside.scss'

function Aside() {
    return (
        <aside className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">

                <NavLink to="/" className="navbar-brand" >HOME</NavLink>
                <NavLink to="/contar-efectivo" className="navbar-brand" > Contar Efectivo</NavLink>
            </div>
            </nav>
        </aside>
    );
}

export default Aside;
