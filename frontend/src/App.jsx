import DashBoard from "./components/dashboard/DashBoard";
import Website from "./components/website/pages/Website";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Website></Website>}></Route>
        <Route path="/admin" element={<DashBoard></DashBoard>}></Route>
      </Routes>
    </>
  );
}

export default App;
