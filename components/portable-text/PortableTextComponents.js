import ImageBlock from "./ImageBlock";
import CodeBlock from "./CodeBlock";

const PortableTextComponents = {
  types: {
    image: ImageBlock,
    code: CodeBlock,
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

export default PortableTextComponents;
