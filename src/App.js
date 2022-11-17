import logo from "./logo.svg";
import "./App.css";
import Quote from "./components/Quote";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <div>
        <h1>React Query</h1>
        <Suspense fallback={<p>Loading..</p>}>
          <Quote></Quote>
          <Quote></Quote>
          <Quote></Quote>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
