import { useState } from 'react';
// import Counter from './use-state/Counter';
// import Content from './use-effect/Content';
// import Api from './use-effect/Api';
// import Clock from './use-effect/Clock';
// import Content from './use-ref/Content';
// import Post from './react-memo/Post';
// import Content from './custom-hook/Content';
// import Counter from './use-reducer/Counter';
// import TodoList from './use-reducer/TodoList';
import Blog from './use-context/Blog';
import './App.css';


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

      <Blog />
    </div>
  );
}

export default App;
