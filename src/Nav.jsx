import { Outlet } from "react-router";
import Header from "./Header";

const Nav = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Nav;
