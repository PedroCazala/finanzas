import { useState } from "react";
import AddParticipantsContainer from "./components/AddParticipants/AddParticipantsContainer";
import JustSplit from "./components/JustSplit/JustSplit";
import "./SplitMoney.scss";

interface participants {
    name: string;
    totalSpentMoney?: number;
    detalleSpentMoney?: detalleSpentMoney[];
}
interface detalleSpentMoney {
    spent: string;
    price: number;
}
function SplitMoney() {
    const [detalleParticipants, setDetalleParticipants] = useState<Boolean>(true);
    const [participants, setParticipants] = useState<participants[]>();

    return (
        <div className="SplitMoney">
            <>
                <button
                    className="btn btn-secondary"
                    onClick={()=>setDetalleParticipants(!detalleParticipants)}
                >
                    {detalleParticipants
                    ?
                        'Solo quiero ingresar la cantidad total de participantes'
                    :
                        'Quiero detallar lo que gasto cada participante'
                    }
                </button>
                {detalleParticipants
                    ?
                        <AddParticipantsContainer />
                    :
                        <JustSplit/>
                }
            </>
        </div>
    );
}

export default SplitMoney;
