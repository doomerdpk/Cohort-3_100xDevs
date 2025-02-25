import { useEffect, useState } from "react";

export default function TopBar() {
  const [countNetwork, setCountNetwork] = useState(0);
  const [countJobs, setCountJobs] = useState(0);
  const [countNotifications, setCountNotifications] = useState(0);
  const [countMessages, setCountMessages] = useState(0);

  // Rather than using setInterval inside useEffect(), you can also use setTimeOut without useEffect for this usecase

  useEffect(() => {
    const first = setInterval(() => {
      setCountNetwork((c) => c + 1);
    }, 5000);

    return () => {
      clearInterval(first);
    };
  }, []);

  useEffect(() => {
    const second = setInterval(() => {
      setCountJobs((c) => c + 1);
    }, 8000);

    return () => {
      clearInterval(second);
    };
  }, []);

  useEffect(() => {
    const third = setInterval(() => {
      setCountNotifications((c) => c + 1);
    }, 12000);

    return () => {
      clearInterval(third);
    };
  }, []);

  useEffect(() => {
    const fourth = setInterval(() => {
      setCountMessages((c) => c + 1);
    }, 17000);

    return () => {
      clearInterval(fourth);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 18vw",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
        <img
          width={40}
          height={40}
          src="https://imgs.search.brave.com/tL6Pr2g8gJGpiEWzJ54aNTlAPSLb1EUh5upE3-fohp8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzgxL0xpbmtlZElu/X2ljb24uc3Zn"
          alt="logo"
        />
        <input
          style={{
            height: 40,
            border: "none",
            borderRadius: 5,
            backgroundColor: "#dfe6e9",
            padding: 5,
          }}
          type="search"
          placeholder="Search"
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1vw",
          textAlign: "center",
          fontSize: "small",
        }}
      >
        <div>
          <img
            width={40}
            height={40}
            src="https://imgs.search.brave.com/vOzXUef6cV7egHeLRSkU860O2ntW9cM1j25c-HtGre4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzgyLzU2LzYx/LzM2MF9GXzgyNTY2/MTUyX2drWjZYNGlo/aDJmbGtCTERuWDQz/WTNoQjlZRFVHNXpt/LmpwZw"
            alt="homepage-icon"
          />
          <div>Home</div>
        </div>
        <div style={{ position: "relative" }}>
          <img
            width={40}
            height={40}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAcTLr5QECcpC3I-33zohWxXirFffwM4L5g&s"
            alt="network-icon"
          />
          <div>Network</div>
          <div
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "red",
              borderRadius: 15,
              width: 15,
              height: 15,
            }}
          >
            {countNetwork}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <img
            width={40}
            height={40}
            src="data:image/jpeg;base64,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"
            alt="job-icon"
          />
          <div>Jobs</div>
          <div
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "red",
              borderRadius: 15,
              width: 15,
              height: 15,
            }}
          >
            {countJobs}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <img
            width={40}
            height={40}
            src="data:image/png;base64,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"
            alt="messaging-icon"
          />
          <div>Messaging</div>
          <div
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "red",
              borderRadius: 15,
              width: 15,
              height: 15,
            }}
          >
            {countMessages}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <img
            width={40}
            height={40}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAdVBMVEX///8AAAArKyuzs7O3t7fHx8cGBgb8/Pz19fUEBARubm7c3NxjY2PPz8+CgoI5OTnk5OQUFBQzMzNPT08aGhogICBdXV14eHjr6+usrKyIiIjU1NQlJSVOTk6Xl5fDw8NDQ0OWlpYQEBChoaF0dHRFRUWOjo7l5wkgAAADz0lEQVR4nO3b6XaqMBQF4NLKJDI41IGqKFbf/xGv5SQMwqUQiieutb9fxavrng0hiSG+vQEAAAAAAAAAAAAAAAAAAAAAAAAAAIAy7zadnj3uKgaLlkZmGXFXMszX3BBWL31RnE8jt3e4qxlgY5QE3NUMsCoH+eSuRp1nVLzA/W6fD7Ov+stmNYhff4c/Oxzt8evrbH0v06rXmfwWxLTuL8+eUWE3QVbnuvb6QxCz9gYaZOJn1NjFhOo8VV60zfhkVYNY4SaptqOQ/mHyvFrbRGm9e90GK6PRalO+5UX3PNejG7hSNYtiwIvWVnOMH+66KNtZ0GtXjrofHcWpzsuzby0xsiYW5A0sEhfuwlN72ZYalpvfydGiPUZ29fKJV+JS49ryVF8ypdLyG8SctwTIpYl8P/V4xpSn+oJHZ3QhG8vkl2aVNy/ZU9l0AS3uyfGa6pJjndkxx71yeU3E8M88LEZupQqvU7sic3kN6Fy4vF3wN51dUYQdds9RNMeIruKGL8V9HKArIO/UuE+OooOY0RXinDzuqCLRSLzONwiRN7iY7X/w5RCTPjkur/vlKKaZ18oRA4cuwY6OvvrmMAzxHeaSHaR8bYumvamYZM36BxG9nTghfJNg6rOWopq0fxBLnANqonz9Fg3KYsJ36Z8j/yxNPEOuHDa1CNH3HFSCHOizdHtZXDeJn/33czpweva9RLYtapYN6xdPQaOI6HwnKjkMQ8y4TtnBjikIDeRiWA/UgojRnXo8rlUI+ipyowOlWyTv8irn5OmW5fawVwuyp09Tl8c1tlPDpmHMdtWCuNRTfWQHXGsQNGmn29Vrq7YNfQOgpbwTaxBadTDbim3jlz7OFSTrasRIoNj7ypa5zUYhrps9+nkedaa/d6pBxLeQ2/3PPduakHOM5aqDchA5CPrxRYtnc0OviDY+VINoshKfQxAEGQmCIMhIEARBRoIgCDISBEGQkSAIgowEQXQLovhUQaMNjUR5NYjv6U6jROm5G8m3CWnAV3gyXUi5Hh3WeP/ZUdrVSo9Npm9bxYdVhXf+HY13Tq9NWs1CDdavbcWnoFVL/p3+CltpmrDv9N/8XmM3zL/3UdpJ04x3YPyDG106sQbpsH28K7ZNTpnz3wVh3ud/DN//RKjB7xUAnsw3a7SZsPfS0DXzdrGqlvUgjLvGB7jVg5y5a1IS1TbVWVp8geqvNsNn/0WYou3Dd/nPF70gj6sracPPwF+FX1qX2L/mICI4gfgd3DzQYH1hEDuJp9M44V9cAAAAAAAAAAAAAAAAAAAAAAAAAAAAeF3/AEYyK7b252/hAAAAAElFTkSuQmCC"
            alt="notifications-icon"
          />
          <div>Notifications</div>
          <div
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "red",
              borderRadius: 15,
              width: 15,
              height: 15,
            }}
          >
            {countNotifications}
          </div>
        </div>
      </div>
    </div>
  );
}
