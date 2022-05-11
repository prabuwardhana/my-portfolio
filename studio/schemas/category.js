import { FiTag } from "react-icons/fi";

export default {
  name: "category",
  title: "Categories",
  type: "document",
  icon: FiTag,
  fields: [
    { name: "title", type: "string" },
    {
      name: "parent",
      type: "reference",
      to: [{ type: "category" }],
      // This ensures we cannot select other "children"
      options: {
        filter: "!defined(parent)",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
  // Customise the preview so parents are visualised in the studio
  preview: {
    select: {
      title: "title",
      subtitle: "parent.title",
    },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle: subtitle ? `– ${subtitle}` : ``,
    }),
  },
};
