import { useNavigate } from "react-router-dom";

export default function DOB() {
  const navigate = useNavigate();
  function Home() {
    navigate("/");
  }
  return (
    <div>
      Your DOB is 19/11/2000
      <br />
      <button onClick={Home}>Go to HomePage!</button>
    </div>
  );
}
