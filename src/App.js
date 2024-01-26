import React, {useState} from "react";



function App() {
    const [color, setColor] = useState('blue')
    const changeColor = ()=> setColor(color => color === 'blue' ? 'red' : 'blue')
    return (
      <div className="App">
        <>
            <div onClick={changeColor}
                style={{
                    backgroundColor: color,
                    margin: '0 auto 10px auto',
                    width: '100px', height: '100px',
                    border: 'solid grey 1px'}}
            ></div>
            <div onClick={changeColor}
                style={{
                    backgroundColor: color === 'blue' ? 'red' : "blue",
                    margin: '0 auto',
                    width: '100px', height: '100px',
                    border: 'solid grey 1px'}}
            ></div>
        </>
      </div>
    );
}

export default App;
