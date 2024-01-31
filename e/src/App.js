import {React} from 'react';
import {useState} from 'react';
import './App.css';


const App = () => {
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        alert('coucou');
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App;