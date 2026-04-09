import {  Outlet } from "react-router-dom";
import { Nav } from "../../organisms/Nav/Nav";

export function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
