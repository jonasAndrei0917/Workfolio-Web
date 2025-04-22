import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center p-10 bg-gray-100 min-h-screen">
      <div className="flex justify-center gap-5 mb-6">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="w-16 hover:scale-110 transition"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="w-16 hover:scale-110 transition"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Vite + React + Tailwind 🎉
      </h1>

      <div className="bg-white shadow-md p-6 rounded-lg inline-block">
        <button
          onClick={() => setCount((count) => count + 5)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-700">
          Edit <code className="bg-gray-200 px-1 rounded">src/App.tsx</code> and
          save to test HMR
        </p>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Click on the logos to learn more
      </p>
    </div>
  );
}

export default App;
