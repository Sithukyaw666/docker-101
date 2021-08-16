import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    (async () => {
      const response = await fetch("/api");
      console.log(await response.json());
    })();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello from React-App Container</p>
      </header>
    </div>
  );
}

export default App;
