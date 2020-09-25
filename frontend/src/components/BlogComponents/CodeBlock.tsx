import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface P {
  value: string;
  language?: string;
}

const CodeBlock: React.FC<P> = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={okaidia}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
