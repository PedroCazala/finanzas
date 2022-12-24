import React from "react";
interface Props{
    number: number,
    value: number,
    setValue:(a:number)=>void,
}
function LiFormCountCash({number, value,setValue}:Props) {
    return <li>
            <label htmlFor={number.toString()}>${number}</label>
                    <input
                    className="form-control"
                        placeholder='Cantidad'
                        type="number"
                        value={value === 0 ? "" : value}
                        id={number.toString()}
                        name={number.toString()}
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            setValue(isNaN(value) ? 0 : value);
                        }}
                    />
    </li>;
}

export default LiFormCountCash;
