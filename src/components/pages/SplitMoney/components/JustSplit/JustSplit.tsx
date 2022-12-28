import React, { useState } from "react";

function JustSplit() {
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [totalParticipants, setTotalParticipants] = useState(0);
    const [individualExpense, setIndividualExpense] = useState(0);

    const result = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        // const form = new FormData(e.target)
        // console.log(form);
        
        if (totalExpenses && totalParticipants) {
            setIndividualExpense(totalExpenses / totalParticipants);
        }
    };
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="totalParticipants" className="form-label mt-4">
                        Total de participantes:{" "}
                    </label>
                    <input
                        type="number"
                        id="totalParticipants"
                        className="form-control"
                        onChange={(e) => {
                            setTotalParticipants(parseInt(e.target.value));
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="totalExpenses" className="form-label mt-4">
                        Total gastado:{" "}
                    </label>
                    <input
                        type="number"
                        id="totalExpenses"
                        className="form-control"
                        onChange={(e) => {
                            setTotalExpenses(parseFloat(e.target.value));
                        }}
                    />
                </div>
                <button className="btn btn-primary" onClick={(e) => result(e)}>
                    Calcular
                </button>

            </form>
            {individualExpense ? (
                <div>
                    Si el total gastado es <b>${totalExpenses}</b> y son
                    <b>{totalParticipants}</b> participantes, cada
                    uno debería pagar
                    <b className="text-primary">${individualExpense}</b>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default JustSplit;
