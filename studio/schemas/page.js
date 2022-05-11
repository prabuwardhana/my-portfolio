import { GrDocument } from "react-icons/gr";

export default {
  name: "page",
  title: "Pages",
  type: "document",
  icon: GrDocument,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "mainImage",
      title: "Featured image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};
