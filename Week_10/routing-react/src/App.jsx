//Use Case: Simulate Routing in react.
//"/" route should print the welcome page
//"/name" route should print the name
//"/dob"  route should print the DOB.
//"/college" route should print the college name.
//"*" route to should print error page for every other route

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Name from "./pages/Name";
import DOB from "./pages/DOB";
import College from "./pages/College";
import Error from "./pages/Error";
import Layout from "./pages/Layout";

const RouteList = [
  {
    path: "/name",
    element: <Name />,
  },
  {
    path: "/dob",
    element: <DOB />,
  },
  {
    path: "/college",
    element: <College />,
  },
  {
    path: "*",
    element: <Error />,
  },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />}></Route>
            {RouteList.map((route) => (
              <Route path={route.path} element={route.element}></Route>
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
