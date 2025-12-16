export type MenuType = "arrays" | "objects";

export type Example = {
  title: string;
  subtitle?: string;
  description?: string;
  code: string;
  output: unknown;
  // Optional runner to produce dynamic output at render time.
  run?: () => unknown;
};
