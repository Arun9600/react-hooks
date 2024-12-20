import { BrowserRouter, Routes, Route } from "react-router";
import Nav from "./Nav";
import UseState from "./components/useState/UseState";
import UseEffect from "./components/useEffect/UseEffect";
import UseRef from "./components/useRef/UseRef";
import ParentComponent from "./components/useContext/ParentComponent";
import MemoMain from "./components/memo/MemoMain";
import CallBackParent from "./components/useCallback/CallBackParent";
import UseMemoMain from "./components/useMemo/UseMemoMain";
import Data from "./components/customHook/Data";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" index element={<UseState />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/useRef" element={<UseRef />} />
          <Route path="/useContext" element={<ParentComponent />} />
          <Route path="/memo" element={<MemoMain />} />
          <Route path="/useCallback" element={<CallBackParent />} />
          <Route path="/useMemo" element={<UseMemoMain />} />
          <Route path="/customHook" element={<Data />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
