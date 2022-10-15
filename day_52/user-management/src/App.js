import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import UserList from "./pages/UserList";

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/users">
          <Route index element={<UserList />} />
          <Route path=":userId" element={<EditUser />} />
          <Route path="create" element={<AddUser />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
