import { BrowserRouter, Routes, Route } from "react-router";
import Nav from "./Nav";
import UseState from "./components/useState/UseState";
import UseEffect from "./components/useEffect/UseEffect";
import UseRef from "./components/useRef/UseRef";
import ParentComponent from "./components/useContext/ParentComponent";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" index element={<UseState />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/useRef" element={<UseRef />} />
          <Route path="/useContext" element={<ParentComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
