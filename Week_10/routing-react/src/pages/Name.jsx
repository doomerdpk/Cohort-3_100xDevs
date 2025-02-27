import { useNavigate } from "react-router-dom";

export default function Name() {
  const navigate = useNavigate();
  function Home() {
    navigate("/");
  }
  return (
    <div>
      Your Name is Deepak
      <br />
      <button onClick={Home}>Go to HomePage!</button>
    </div>
  );
}
