import React from "react";
import AddParticipants from "./AddParticipants";

function AddParticipantsContainer() {
    const addParticipants = (e: React.MouseEvent) => {
        e.preventDefault();
    };
    return (
        <div>
            <AddParticipants />
            <button
                className="btn btn-success"
                // onClick={(e) => addParticipants(e)}
            >
                +
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

export default AddParticipantsContainer;
