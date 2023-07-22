import React, { useState } from 'react';
import Badge from "react-bootstrap/Badge";
import { marked } from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon ,faSun } from '@fortawesome/free-regular-svg-icons';
//import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function App() {

  const [darkMode , setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  }

  const [markdown , setMarkdown] = useState(`

  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  [title](https://www.example.com)

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`
  // this is multi-line code:
  \`
  \`
  {
    "FirstName": "Luciano",
    "LastName": "Alessi",
    "Age": "27"
  }
  \`

  You can also make text **bold**... whoa!

  Or _italic_.

  Or... wait for it... **_both!_**

  And feel free to go crazy ~~crossing stuff out~~.

  > Block Quotes!

  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
        - That look like this.

  ![alt text](image.jpg)
    
  1. And there are numbered lists too.
  1. Use just 1s if you want! 
  `)

  marked.setOptions({
    breaks:true
  });

  var inputStyle = {
    width: "500px",
    minHeight: "85vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px",
    fontSize:"15px"
  };
  var outputStyle = {
    width: "650px",
    minHeight: "85vh",
    backgroundColor: "#DCDCDC",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px",
    color: "black",
    border:"2px solid yellow",
    fontSize:"15px"
    
  };


  return (
      <div className={`App  ${darkMode ? 'bg-dark m-0' : 'bg-white'}`}>
        <div className='container-fluid'>
          <div className='row mt-4'>
            <div className="col text-center">
              <h1>
              <Badge className='text-align-center' variant='light' >
                Markdown previewer
              </Badge>
              </h1>
              <button className='btn btn-dark ml-auto' onClick={toggleMode}>
                {darkMode ? (
                  <span>
                    <FontAwesomeIcon icon={faSun} />  Light Mode
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faMoon} /> Dark Mode
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center bg-secondary" variant="light">
                  Markdown input
                  </Badge>
                  <div className="mark-input" style={inputStyle}>
                    <textarea 
                      className="input"
                      style={inputStyle}
                      value={markdown}
                      onChange={(e) => setMarkdown(e.target.value)}
                      id="editor"
                    > </textarea>
                  </div>
                </h4>
              </div>
            </div>

            <div className="col-md-6">
            <div className="col text-center">
                <h4>
                  <Badge className="text-align-center bg-secondary" variant="secondary">
                  Preview
                  </Badge>
                </h4>
              </div>
              <div 
              id="preview"
              style={outputStyle}
              dangerouslySetInnerHTML={{
                __html: marked(markdown),
              }}
              >
              </div>
            </div>
          </div> 
        </div>
      </div>
  );
}

export default App;


//another way:

{/* <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section> */}