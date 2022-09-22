import Todo from "./components/Todo";

// component A -> component B -> component C
// component A : Lưu trữ State -> truyền props xuống component C để hiển thị thông tin
// global state : context, reducer
// children : props đặc biệt, là các thành phần nằm giữa thẻ mở và thẻ đóng của 1 component

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
