import React, { useState } from "react";
import "./AddParticipants.scss";

function AddParticipants() {
    const [detalleSpents, setDetalleSpents] = useState(false);
    const addParticipants = (e: React.MouseEvent) => {
        e.preventDefault();
    };
    const number = 1;
    return (
        <div className="AddParticipants">
            Participante número {number}
            <div className="form-group">
                <label htmlFor="name" className="form-label mt-4">
                    Nombre:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder={`Ingresa el nombre del participante ${number}`}
                />
            </div>
            {!detalleSpents ? (
                <div className="form-group">
                    <label htmlFor="name" className="form-label mt-4">
                        Gasto total del participante:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        placeholder={`Ingresa el gasto total del participante ${number}`}
                    />
                </div>
            ) : (
                "logica para gastos detallados"
            )}
            <button
                className="btn btn-danger"
                onClick={() => setDetalleSpents(!detalleSpents)}
            >
                {!detalleSpents
                    ? "Ingresar gastos detallados"
                    : "Ingresar gasto total"}
            </button>
            <button
                className="btn btn-primary"
                onClick={(e) => addParticipants(e)}
            >
                Listo
            </button>
        </div>
    );
}

export default AddParticipants;
