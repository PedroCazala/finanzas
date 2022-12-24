import './CountCash.scss'

function CountCash() {
    return <div>
        <button>Reset</button>
        <ul>
            <li>
                <label htmlFor='1000'>$1000</label>
                <input type='number' id='1000' name='1000'/>
            </li>
            <li>
            <label htmlFor='500'>$500</label>
                <input type='number' id='500' name='500'/>
            </li>
            <li>
                <label htmlFor='200'>$200</label>
                <input type='number' id='200' name='200'/>
            </li>
            <li>
                <label htmlFor='100'>$100</label>
                <input type='number' id='100' name='100'/>
            </li>
            <li>
                <label htmlFor='50'>$50</label>
                <input type='number' id='50' name='50'/>
            </li>
            <li>
                <label htmlFor='20'>$20</label>
                <input type='number' id='20' name='20'/>
            </li>
            <li>
                <label htmlFor='10Billete'>$10</label>
                <input type='number' id='10Billete' name='10Billete'/>
            </li>
            <li>
                <label htmlFor='10Moneda'>$10</label>
                <input type='number' id='10Moneda' name='10Moneda'/>
            </li>
        </ul>
    </div>;
}

export default CountCash;
