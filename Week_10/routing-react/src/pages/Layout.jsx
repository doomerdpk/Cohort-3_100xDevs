import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Link to="/">Welcome</Link>
      <br />
      <Link to="/name">Name</Link>
      <br />
      <Link to="/dob">DOB</Link>
      <br />
      <Link to="/college">College</Link>
      <hr />
      <Outlet></Outlet>
      <hr />
      <div>Contact us at +0612-2245678</div>
    </div>
  );
}
