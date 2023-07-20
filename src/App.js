import React, { useState } from 'react';
import Badge from "react-bootstrap/Badge";
import { marked } from 'marked';
//import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function App() {

  const [markdown , setMarkdown] = useState(`

  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.


  [title](https://www.example.com)

  \`code\`
  \`\`\`
  {
    "FirstName": "Luciano",
    "LastName": "Alessi",
    "Age": "27"
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)
  
  `)

  var inputStyle = {
    width: "500px",
    height: "80vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px",
    fontSize:"15px"
  };
  var outputStyle = {
    width: "700px",
    height: "80vh",
    backgroundColor: "#DCDCDC",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px",
    color: "black",
    border:"2px solid yellow",
    fontSize:"15px"
    
  };


  return (
    <div className="App vh-100 bg-dark text-white">
      <div className='container' >
        <div className='row mt-4'>
          <div className="col text-center">
            <h1>
            <Badge className='text-align-center' variant='ligth' >
              Markdown previewer
            </Badge>
            </h1>
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