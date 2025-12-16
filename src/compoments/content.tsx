import { useState } from "react";
import type { Example } from "../types/menu";

interface ContentProps {
  example: Example | null;
}

export function Content({ example }: ContentProps) {
  const [showOutput, setShowOutput] = useState(false);
  const [renderedOutput, setRenderedOutput] = useState<unknown>(null);
  const handleShow = () => {
    const value = example?.run ? example.run() : example?.output;
    setRenderedOutput(value);
    setShowOutput(true);
  };

  if (!example) {
    return (
      <section className="content-card empty-state">
        <p className="eyebrow">Start exploring</p>
        <h2>Choose a topic</h2>
        <p>Select an example in the sidebar to view its code and output.</p>
      </section>
    );
  }

  return (
    <div className="content-stack">
      <section className="content-card">
        <div className="section-title">
          <div>
            <p className="eyebrow">Example</p>
            <h2>{example.title}</h2>
            {example.subtitle ? <p>{example.subtitle}</p> : null}
            {example.description ? <p>{example.description}</p> : null}
          </div>
        </div>
      </section>

      <section className="content-card">
        <div className="section-title">
          <span className="eyebrow">Code</span>
        </div>
        <pre className="code-block">{example.code}</pre>
      </section>

      <section className="content-card">
        <div className="section-title">
          <span className="eyebrow">Output</span>
          {!showOutput ? (
            <button type="button" className="reveal-button" onClick={handleShow}>
              Show output
            </button>
          ) : (
            <button
              type="button"
              className="reveal-button secondary"
              onClick={() => setShowOutput(false)}
            >
              Hide output
            </button>
          )}
        </div>

        {showOutput ? (
          <pre className="code-block muted">
            {JSON.stringify(renderedOutput, null, 2)}
          </pre>
        ) : (
          <button
            type="button"
            className="reveal-panel"
            onClick={handleShow}
          >
            <p className="eyebrow">Click to reveal the result</p>
            <p>Run the code virtually to see the output.</p>
          </button>
        )}
      </section>
    </div>
  );
}
