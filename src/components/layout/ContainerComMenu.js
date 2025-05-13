import { Outlet } from "react-router-dom";
import Navbar from "./Menu";

export default function ContainerComMenu() {
  return (
    <>
      <Navbar />
      <main className="p-3">
        <Outlet />
      </main>
    </>
  );
}
