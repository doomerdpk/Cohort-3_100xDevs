import React, { useState } from "react";

export default function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered!</p>}
      {isVisible ? <p>This message is conditionally rendered!</p> : null}
    </div>
  );
}
