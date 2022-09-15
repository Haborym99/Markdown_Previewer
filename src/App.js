import "./App.css";
import React from "react";
import { marked } from "marked";

const basicText = `# Demonstration text
## This text is just here to give a first impression
In markdown we can have **inline code** (and bold text) at any time like this \` printf(Hello World) \`

We can have link like my [Github page!](https://github.com/Haborym99)

\`\`\`c
 //Here's a code block
 
{
 function how_are_you(answer){
  if(answer == fine){
    printf("Glad to hear this");
  }
  else{
    printf("Tell me more")
  }
 }
}
\`\`\`

We can list things:
- First thing
- Second thing
- A third one?

> You like quote?
> Because you can write some!


And of course we can add images and/or GIFs!

![Rick rolling](https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif)
`;

const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');

marked.setOptions({breaks : true})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: basicText,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (change) => {
    this.setState({
      markdown: change.target.value,
    });
  };
  render() {
    return (
      <div>
        <div id="editorWrapper">
          <textarea
            id="editor"
            onChange={this.handleChange}
            value={this.state.markdown}
          />
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
        ></div>
      </div>
    );
  }
}
export default App;
