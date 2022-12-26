import { useState } from 'react';
import AddParticipantsContainer from './components/AddParticipants/AddParticipantsContainer';
import './SplitMoney.scss'

interface participants{
    name:string,
    totalSpentMoney?:number
    detalleSpentMoney?:detalleSpentMoney[]
}
interface detalleSpentMoney{
    spent:string,
    price:number
}
function SplitMoney() {
    const detalleParticipants = useState<Boolean>()
    const [participants,setParticipants] = useState<participants[]>()
    
    return <div className='SplitMoney'>
        <>
        <button className='btn btn-secondary'>
            Solo quiero ingresar la cantidad total de participantes
        </button>
        <AddParticipantsContainer/>
        </>
    </div>;
}

export default SplitMoney;
