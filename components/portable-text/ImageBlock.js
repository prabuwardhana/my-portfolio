import Image from "next/image";
import { urlFor } from "../../lib/sanityClient";
import {
  imageContainer,
  image,
} from "../../styles/components/Image.module.scss";

// Component for image block
const ImageBlock = ({ value }) => {
  console.log(value);
  return (
    <div className={imageContainer}>
      <Image
        src={urlFor(value).fit("max").auto("format").url()}
        alt={value.alt || " "}
        layout="fill"
        className={image}
      />
    </div>
  );
};

export default ImageBlock;
