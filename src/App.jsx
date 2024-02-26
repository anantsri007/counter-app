
import Counter from './components/counter'
import  {useDispatch} from 'react-redux';
import "./App.css";



function App()
 {

   const dispatch = useDispatch();
  return (
    <>
    <div className="App">
     <button onClick={(e) => dispatch({type: "INCREMENT", payload: 700})}>
     Increment
      </button>
      <Counter />
      <button onClick={(e) => dispatch({ type: "DECREMENT", payload: 100})}>
        Decrement
      </button>
  </div>
  </>
  )
  }

export default App
