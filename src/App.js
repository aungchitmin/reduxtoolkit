import {useSelector, useDispatch} from 'react-redux'
//import {increment, decrement} from './actions'
import {increment, decrement, selectCount} from './reducers/counter'
import {signIn, signOut, selectLog} from './reducers/isLogged'

function App() {
  const counter = useSelector(selectCount);
  const isLogged = useSelector(selectLog);
  console.log(isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button> <br/><br/>
      <button onClick={() => dispatch(signIn())}>Sign In</button>
      <button onClick={() => dispatch(signOut())}>Sign Out</button>
      {isLogged ? <h3>important info</h3> : ''}
    </div>
  );
}
export default App