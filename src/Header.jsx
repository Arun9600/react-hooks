import { Link } from "react-router";
const Header = () => {
  return (
    <>
      <div className="container">
        <ul className="menu">
          <li>
            <Link to="/">useState</Link>
          </li>
          <li>
            <Link to="/useEffect">useEffect</Link>
          </li>
          <li>
            <Link to="/useRef">useRef</Link>
          </li>
          <li>
            <Link to="/useContext">useContext</Link>
          </li>
          <li>
            <Link to="/memo">memo</Link>
          </li>
          <li>
            <Link to="/useCallback">useCallback</Link>
          </li>
          <li>
            <Link to="/useMemo">useMemo</Link>
          </li>
          <li>
            <Link to="/customHook">customHookGetMethod</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
