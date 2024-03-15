import project from "../project";

export default function searchResult() {
  const searchResultObj = Object.create(project());
  searchResultObj.changeValue(
    "Search Result",
    "Where you can see your search results!"
  );
  return searchResultObj;
}
