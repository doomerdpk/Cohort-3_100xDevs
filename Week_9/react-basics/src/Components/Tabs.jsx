import { useEffect, useState } from "react";

export default function Tabs() {
  const [tabs, setTabs] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchTitle() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/" + tabs
    );
    const data = await response.json();
    setTabData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchTitle();
  }, [tabs]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "2vw" }}>
        <button
          style={tabs == 1 ? { color: "red" } : { color: "black" }}
          onClick={() => {
            setTabs(1);
          }}
        >
          Home
        </button>
        <button
          style={tabs == 2 ? { color: "red" } : { color: "black" }}
          onClick={() => {
            setTabs(2);
          }}
        >
          Jobs
        </button>
        <button
          style={tabs == 3 ? { color: "red" } : { color: "black" }}
          onClick={() => {
            setTabs(3);
          }}
        >
          Network
        </button>
        <button
          style={tabs == 4 ? { color: "red" } : { color: "black" }}
          onClick={() => {
            setTabs(4);
          }}
        >
          Messgaes
        </button>
        <button
          style={tabs == 5 ? { color: "red" } : { color: "black" }}
          onClick={() => {
            setTabs(5);
          }}
        >
          Notifications
        </button>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", padding: 20 }}
        id="container-div"
      >
        {loading ? "Loading..." : tabData.title}
      </div>
    </>
  );
}
