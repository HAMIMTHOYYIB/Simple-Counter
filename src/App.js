import { useState } from 'react';

// let data = '[This is from the data]'

const App = () => {
  const [count, setCount] = useState(0); 

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }; 

  return (
    <div style={containerStyle}>

      <h1 style={{color:'red'}} >Counter: {count}</h1>
      <div>
      <button style={{backgroundColor:'skyblue'}} onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <br></br>
      {/* <p>show {data}</p> */}
      {/* <Tryfun/> */}

    </div>
  );
};

export default App;

//component trial
// function Tryfun() {
//   return (<h3>this text is from a component with value</h3>)
// }