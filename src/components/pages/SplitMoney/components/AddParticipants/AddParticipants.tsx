import React, { useState } from "react";
import "./AddParticipants.scss";
interface Props{
    number:number
}
function AddParticipants({number}:Props) {
    const [detalleSpents, setDetalleSpents] = useState(false);
    const addParticipants = (e: React.MouseEvent) => {
        e.preventDefault();
    };
    return (
        <div className="AddParticipants card text-white border-primary mb-3 ">
            <div className="card-header">Participante número {number}</div>
            <div className="card-body">
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
                            type="number"
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
                    className="btn btn-primary"
                    onClick={() => setDetalleSpents(!detalleSpents)}
                >
                    {!detalleSpents
                        ? "Ingresar gastos detallados"
                        : "Ingresar gasto total"}
                </button>
                <button
                    className="btn btn-danger"
                    // onClick={}
                >
                    Borrar
                </button>
            </div>
        </div>
    );
}

export default AddParticipants;
