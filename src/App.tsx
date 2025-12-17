import { useState } from "react";

import "./App.css";
import { Sidebar } from "./compoments/sidebar";
import { Content } from "./compoments/content";
import { exempleArrays } from "./compoments/examples/arrays";
import type { Example, MenuType } from "./types/menu";
import { exempleObjects } from "./compoments/examples/objects";
import { exampleFunctions } from './compoments/examples/functions';
function App() {
  const [example, setExample] = useState<Example | null>(null);

  function loadExample(topic: MenuType) {
    if (topic === "arrays") {
      setExample(exempleArrays());
      return;
    }
    if (topic === "objects") {
      setExample(exempleObjects());
      return;
    }

    if (topic === "functions") {
      setExample(exampleFunctions());
      return;
    }

    setExample(null);
  }

  return (
    <div className="app-shell">
      <Sidebar onSelect={loadExample} />
      <main className="content-area">
        <div className="content-header">
          <p className="eyebrow">Interactive examples</p>
          <h1>JavaScript Playground</h1>
        </div>

        <Content key={example ? example.title : "empty"} example={example} />
      </main>
    </div>
  );
}

export default App;
