import { useDispatch, useSelector } from 'react-redux';
import AnotherCounter from './AnotherCounter';

const CounterApp = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state); // ✅ only get counter

  return (
    <div className="counter-wrapper">
      <h1>Counter App</h1>
      <div className="innerCounter">
        <button onClick={() => dispatch({ type: 'inc' })}>Add</button>
        <span>{counter}</span> {/* ✅ no more error */}
        <button onClick={() => dispatch({ type: 'dec' })}>Sum</button>
        <AnotherCounter />
      </div>
    </div>
  );
};

export default CounterApp;
