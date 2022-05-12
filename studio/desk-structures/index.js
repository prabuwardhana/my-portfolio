import S from "@sanity/desk-tool/structure-builder";
import parentChild from "./parentChild";

export default () =>
  S.list()
    .title("Base")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["siteSettings"].includes(listItem.getId()) &&
          !["category"].includes(listItem.getId())
      ),
      S.divider(),
      parentChild("category"),
    ]);
