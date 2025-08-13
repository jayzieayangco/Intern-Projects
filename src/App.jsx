import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
  import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container">
      <h1>Enjoy This  for Free</h1>

      <div className="row">
        <a href="https://www.friv.com/" target="_blank">
          <img src="friv.webp" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://www.y8.com/" target="_blank">
          <img src="/y8.png" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://youtu.be/dQw4w9WgXcQ?si=ZIDMU0f013q7H-R8" target="_blank">
          <img src="/yt.png" className="logo react" alt="React logo" />
        </a>
        <a href="https://www.youtube.com/watch?v=qHM40MbaHoA" target="_blank">
          <img src="/showtime.webp" className="logo react" alt="React logo" />
        </a>
        <a href="https://youtu.be/dQw4w9WgXcQ?si=ZIDMU0f013q7H-R8" target="_blank">
          <img src="/yt.png" className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Logos!!!</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        {/* <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        /> */}
        <button type="submit">C</button>
        <button type="submit">%</button>
        <button type="submit">del</button>
        <button type="submit">÷</button>
      </form>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <button type="submit">7</button>
        <button type="submit">8</button>
        <button type="submit">9</button>
        <button type="submit">×</button>
      </form>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >

        <button type="submit">4</button>
        <button type="submit">5</button>
        <button type="submit">6</button>
        <button type="submit">-</button>
      </form>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >

        <button type="submit">1</button>
        <button type="submit">2</button>
        <button type="submit">3</button>
        <button type="submit">+</button>
      </form>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >

        <button type="submit">1</button>
        <button type="submit">2</button>
        <button type="submit">3</button>
        <button type="submit">+</button>
      </form>
      {/* <p>{greetMsg}</p> */}
    </main>
  );
}

export default App;