import type { MenuType } from "../types/menu";

interface SidebarProps {
  onSelect: (topic: MenuType) => void;
}

const items: Array<{ key: MenuType; label: string; detail: string }> = [
  { key: "arrays", label: "Arrays", detail: "Destructuring assignment" },
  { key: "arraysFilters", label: "Arrays", detail: "Filters" },
    { key: "arraysMap", label: "Arrays", detail: "Map" },
  { key: "objects", label: "Objects", detail: "Destructuring assignment" },
  { key: "functions", label: "Functions", detail: "Declarations" },
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
