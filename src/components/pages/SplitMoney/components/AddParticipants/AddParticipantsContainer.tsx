import React, { useEffect, useState } from "react";
import AddParticipants from "./AddParticipants";

function AddParticipantsContainer() {
    const [quantityParticipants, setQuantityParticipants] = useState(1);
    const addParticipants = () => {
        setQuantityParticipants(quantityParticipants + 1);
    };

    return (
        <>
            {[...Array(quantityParticipants)].map((_, i) => (
                <AddParticipants number={quantityParticipants} key={i} />
            ))}
            <div>
                <div>
                    <button
                        className="btn btn-outline-success"
                        onClick={() => addParticipants()}
                    >
                        +
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={() => setQuantityParticipants(1)}
                    >
                        Restablecer
                    </button>
                </div>
                
                <button
                    className="btn btn-outline-primary"
                    // onClick={() => addParticipants()}
                >
                    Añadir participantes extras
                </button>
            </div>
            <button
                className="btn btn-primary"
                // onClick={(e) => addParticipants(e)}
            >
                Listo
            </button>
        </>
    );
}

export default AddParticipantsContainer;
