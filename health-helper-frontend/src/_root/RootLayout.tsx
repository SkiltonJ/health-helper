import Topbar from "../components/TopBar";
import { Outlet } from "react-router-dom";
import "../css/rootLayout.css";

const RootLayout = () => {
  return (
    <div className='w-full md:flex flex-col scrollable-container'>
      <Topbar />

      <section className='root-layout-section'>
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
