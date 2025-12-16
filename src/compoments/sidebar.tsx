import type { MenuType } from "../types/menu";

interface SidebarProps {
  onSelect: (topic: MenuType) => void;
}

const items: Array<{ key: MenuType; label: string; detail: string }> = [
  { key: "arrays", label: "Arrays", detail: "map, filter, reduce" },
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
