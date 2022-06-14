
import './App.css';
import { useSelector ,useDispatch } from 'react-redux';
import {increment,decrement } from './action' 

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button  onClick={() => dispatch(increment())}>+</button>
      <button  onClick={() => dispatch(decrement())}>-</button>
       
    </div>
  );
}

export default App;
