import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import prism from "react-syntax-highlighter/dist/cjs/styles/prism/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

export const Content = () => {
  const helloWorld = `const OMGSyntaxHighlight = () => (
  <div>
    HelloWorld
  </div>
)`;
  //@todo: use markdown renderer
  return (
    <div className="prose p-4">
      <h1>Hello world</h1>
      <p>
        <code>Lorem ipsum dolor</code>, sit amet consectetur adipisicing elit.
        Deleniti dignissimos deserunt consequuntur sit minus porro quisquam
        minima in explicabo, aperiam perferendis illum? Cum vel quidem officiis
        quis iure itaque et.
      </p>
      <blockquote>
        <p>CSS is hard.</p>
      </blockquote>
      <h4>Challenge: </h4>
      <ol>
        <li>Lorem</li>
        <li>Ipsum</li>
        <li>Tres</li>
      </ol>
      <SyntaxHighlighter language="jsx" style={prism}>
        {helloWorld}
      </SyntaxHighlighter>
    </div>
  );
};
