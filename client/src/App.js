import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [nuser, setnuser] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/get");
      setnuser(await response.json());
    })();
  }, []);
  console.log(nuser.length);
  const onSubmit = () => {
    fetch("/api/add", {
      method: "POST",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className="intro">Hello from React-App Container</p>
        <p className="user">number of user : {nuser.length}</p>
        <button onClick={onSubmit}>submit form</button>
      </header>
    </div>
  );
}

export default App;
