import T from "@sanity/base/initial-value-template-builder";

export default [
  T.template({
    id: "category-child",
    title: "Category: Child",
    schemaType: "category",
    parameters: [{ name: `parentId`, title: `Parent ID`, type: `string` }],
    // This value will be passed-in from desk structure
    value: ({ parentId }) => {
      console.log("parent ID: ", parentId);
      return {
        parent: { _type: "reference", _ref: parentId },
      };
    },
  }),
  // Insert all your other Templates
  ...T.defaults(),
];
