import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy, FaRegClipboard } from "react-icons/fa";
import { container, copy, btn } from "../../styles/components/Code.module.scss";

// component for code block
const CodeBlock = ({ value }) => {
  const [isCopied, setIsCopied] = useState(false);

  if (!value || !value.code) {
    return null;
  }

  const { language, code } = value;

  return (
    <div className={container}>
      <CopyToClipboard
        onCopy={() => setIsCopied(true)}
        className={copy}
        text={code}
      >
        <button className={btn}>
          {isCopied ? <FaRegClipboard /> : <FaRegCopy />}
        </button>
      </CopyToClipboard>

      <SyntaxHighlighter language={language || "text"} style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
