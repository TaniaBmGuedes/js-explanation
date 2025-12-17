export type MenuType =
  | "arrays"
  | "arraysFilters"
  | "arraysMap"
  | "arraysReduce"
  | "arraysFilterMapReduce"
  | "objects"
  | "functions"
  | "forEach"
  | "classes"
  | "staticMethods"
  | "promises";

export type CodeSnippet = {
  title?: string;
  code: string;
};

export type Example = {
  title: string;
  subtitle?: string;
  description?: string;
  code: string | CodeSnippet[];
  output: unknown;
  run?: () => unknown;
};
