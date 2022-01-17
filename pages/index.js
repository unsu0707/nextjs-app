import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <NavBar />
      <h1 className="active">Hello, World-{counter}!</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}></button>
    </div>
  );
}
