import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [user, setUser] = useState({
    name: "Bùi Hiên",
    age: 25,
    email: "hien@techmaster.vn"
  })

  const [isShow, setIsShow] = useState(true);

  // Replacing
  const changeName = () => {
    setUser({ ...user, name: "Nguyễn Văn A" })
  }

  const handleToggle = () => {
    setIsShow(!isShow);
  }

  return (
    <div className="App">
      <h2>Name App : {user.name}</h2>
      <button onClick={changeName}>Change Name App</button>

      <button onClick={handleToggle}>Toggle</button>
      {isShow && <Counter color={"red"} bg={"black"} />}

    </div>
  );
}

export default App;
