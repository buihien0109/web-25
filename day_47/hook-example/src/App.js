// import Counter from './use-state/Counter';
// import Content from './use-effect/Content';
// import Api from './use-effect/Api';
// import Clock from './use-effect/Clock';
import Content from './use-ref/Content';
import './App.css';
import { useState } from 'react';


// useState
// useEffect
// useRef

// HOC : React.memo
// useCallback
// useMemo

// useContext
// useReducer
// => Global state

function App() {
  const [isShowClock, setIsShowClock] = useState(true);
  return (
    <div className="App" style={{ height: 2000 }}>
      {/* <button onClick={() => setIsShowClock(!isShowClock)}>Toggle</button>
      {isShowClock && <Clock />} */}

      <Content />
    </div>
  );
}

export default App;
