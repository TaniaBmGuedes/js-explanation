import type { MenuType } from "../types/menu";

interface SidebarProps {
  onSelect: (topic: MenuType) => void;
}

const items: Array<{ key: MenuType; label: string; detail: string }> = [
  { key: "arrays", label: "Arrays", detail: "Destructuring assignment" },
  { key: "arraysFilters", label: "Arrays", detail: "Filters" },
  { key: "arraysMap", label: "Arrays", detail: "Map" },
  { key: "arraysReduce", label: "Arrays", detail: "Reduce" },
  {
    key: "arraysFilterMapReduce",
    label: "Arrays",
    detail: "Filter, Map, Reduce",
  },
  { key: "objects", label: "Objects", detail: "Destructuring assignment" },
  { key: "functions", label: "Functions", detail: "Declarations" },
  { key: "forEach", label: "Foreach", detail: "What forEach does " },
  { key: "classes", label: "Classes", detail: "What classes does " },
  {
    key: "staticMethods",
    label: "Static Methods",
    detail: "How static Methods works ",
  },
  {
    key: "promises",
    label: "Promises",
    detail: "How promises works ",
  },
  {
    key: "asyncAndWait",
    label: "Async And Wait",
    detail: "How Async And Wait works ",
  },

  {
    key: "fetchAPI",
    label: "Fetch API",
    detail: "How fetch API works ",
  },

  {
    key: "fetchAPIAndAxios",
    label: "Fetch API And Axios",
    detail: "How fetch API And Axios works ",
  },
];

export function Sidebar({ onSelect }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar__title">Examples</div>
      <div className="sidebar__hint">
        Choose a theme to see the code and its output
      </div>

      <div className="nav-list">
        {items.map(({ key, label, detail }) => (
          <button
            key={key}
            type="button"
            className="nav-button"
            onClick={() => onSelect(key)}
          >
            <span>{label}</span>
            <small>{detail}</small>
          </button>
        ))}
      </div>
    </aside>
  );
}
