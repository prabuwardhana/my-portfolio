import Image from "next/image";
import { sanityClient, urlFor } from "../lib/sanityClient";
import { PortableText } from "@portabletext/react";
import PortableTextComponents from "../components/portable-text/PortableTextComponents";

const Page = ({ currPage }) => {
  return (
    <div style={{ width: 900, margin: "0 auto" }}>
      <h1>{currPage.title}</h1>
      <div style={{ position: "relative", height: "600px" }}>
        <Image
          src={urlFor(currPage.mainImage).width(800).url()}
          alt={currPage.mainImage.alt || " "}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <PortableText value={currPage.body} components={PortableTextComponents} />
    </div>
  );
};

export default Page;

export const getStaticProps = async (pageContext) => {
  const { slug } = pageContext.params;
  const query = `*[ _type == "page" && slug.current == '${slug}'][0]{
    title,
    mainImage,
    body,
  }`;
  const currPage = await sanityClient.fetch(query, { slug });

  return {
    props: { currPage },
  };
};

export async function getStaticPaths() {
  const query = `*[ _type == "page"]`;
  const pages = await sanityClient.fetch(query);

  const paths = pages.map((page) => ({
    params: { slug: page.slug.current },
  }));

  return { paths, fallback: "blocking" };
}
