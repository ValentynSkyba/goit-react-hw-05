import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Suspense } from "react";
const Layout = () => {
  return (
    <div>
      <Navigation />
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default Layout;
