import { useState } from 'react';
import './App.css';

function App() {
    const title = "Welcome to my love for Patty!!";
    const iLoveYou = "I love you";
    var [notPatty, setNotPatty] = useState(true);
    var [hearts, setHearts] = useState(0);
    var itsPatty = () => {
        if(notPatty) {
            setNotPatty(false);
        } else {
            setNotPatty(true);
        }
    }
    var addHearts = () => { setHearts(hearts + 1)}
    function subtractHearts() { 
        setHearts(hearts - 1)
    }
    return (
        <div className="App">
            <div className="content">
                <h1>{ title }</h1>
                <p>Hearts for Patty:</p> 
                <p><button onClick={subtractHearts}> - </button> { hearts } <button onClick={addHearts}> + </button></p> 
        
                <h1> { iLoveYou } </h1>
                <p> { notPatty? "Who?" : "Patty" } </p>
                <button onClick={itsPatty}> Expose the name </button>
            </div>
        </div>
    );
}

export default App;
