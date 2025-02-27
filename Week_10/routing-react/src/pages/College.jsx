import { useNavigate } from "react-router-dom";

export default function College() {
  const navigate = useNavigate();
  function Home() {
    navigate("/");
  }

  return (
    <div>
      You studied from IIIT Bhubaneswar
      <br />
      <button onClick={Home}>Go to HomePage!</button>
    </div>
  );
}
