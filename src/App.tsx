import React from 'react';
import ReactMarkdown from 'react-markdown'
import Gfm from 'remark-gfm';

import logo from './logo.svg';
import './App.css';

const backticks = "```";
const markdown = `# Hello, *world*!

${backticks}javascript
const a = test(1, "ccc");
console.log(a);
${backticks}

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| 1 |   |
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ReactMarkdown remarkPlugins={[Gfm]}>
          {markdown}
        </ReactMarkdown>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
