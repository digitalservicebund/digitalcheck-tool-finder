import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto px-16 flex flex-col h-screen">
        <div className="flex flex-col items-center m-40">
          <h1 className="ds-heading-01-reg mb-40 text-center">
            Digitalcheck Werkzeugfinder
          </h1>
          <button
            className="ds-button ds-button-large"
            onClick={() => setCount((count) => count + 1)}
          >
            <span className="ds-button-label">
              Du hast {count} Mal geklickt
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
