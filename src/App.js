import React from "react";
import "./styles.css";

const poem = {
  lines: ["I write, erase, rewrite", "Erase again, and then", "A poppy blooms."]
};

export default function App() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <React.Fragment key={index}>
          <p>{line}</p>
          {index !== poem.lines.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </article>
  );
}
