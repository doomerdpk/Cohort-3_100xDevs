import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  function Home() {
    navigate("/");
  }
  return (
    <div>
      404 No content found!
      <br />
      <button onClick={Home}>Go to HomePage!</button>
    </div>
  );
}
