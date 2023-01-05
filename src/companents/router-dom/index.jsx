import { Routes, Route } from "react-router-dom";
import { DataRouter } from "./data-router";
import { Suspense } from "react";
import Navbar from "../pages/Home/Navbar/Navbar";
import Footer1 from "../pages/Home/Footer/Footer1/Footer1";
import Footer2 from "../pages/Home/Footer/Footer2/Footer2";
import Loading from "../minicomp/loading";


function RoutsCompanent() {
  const pathname = window.location.pathname

  console.log(pathname);
  return (
    <>
    {pathname== ("/login","/adminpage")?null : <Navbar/>}

      <Routes>
        {DataRouter.map((elem) => (
          <Route
            key={elem.id}
            path={elem.path}
            element={<Suspense fallback={<Loading />}>{elem.Element}</Suspense>}
          />
        ))}
      </Routes>
    {pathname== ("/login","/adminpage")?null:<Footer1/>}
    {pathname== ("/login","/adminpage")?null:<Footer2/>}

</>
  );
}
export default RoutsCompanent;
