import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const [count,setcount] = React.useState(1);
  const [newcount,setnewcount] = React.useState(1);

  console.log('first')
  React.useEffect(() => {
    console.log('inside useeffect')
    document.title = `count ${count}`
  },[count])
console.log('second')
  return (
    <div className="App">
      <h1>Count {count}</h1>
      <h1>newCount {newcount}</h1>
      <button onClick={() => {setcount(count + 1)}}>Add</button>
      <button onClick={() => {setnewcount(newcount + 1)}}>newAdd</button>
    </div>
  );
}

export default App;
