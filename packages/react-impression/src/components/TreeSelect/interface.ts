interface TreeSelectProps {
  type: "select" | "tree";
  multiple: Boolean; // 树每个选项前是否有 checkbox
  defaultSelectedKeys: Array<TreeSelection["value"]>;
  data: Array<TreeSelection>;
  disabled: Boolean;
}

interface TreeSelection {
  value: String | Number;
  label: String;
  children: Array<TreeSelection>;
}
