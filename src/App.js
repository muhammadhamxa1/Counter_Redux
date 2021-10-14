import {useSelector,useDispatch} from 'react-redux';
import { increment ,decrement } from './actions';

function App() {
  const counter=useSelector(state => state.counterReducer);
  let logged=useSelector(state => state.loggedReducer)
  const dispatch =useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {!  logged ?     <h2>logged is false</h2>:<h1>logged is true</h1>}
  
    </div>  
  );
}

export default App;
