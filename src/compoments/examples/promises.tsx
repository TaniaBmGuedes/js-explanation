export function examplesPromises() {
  const codeSnippets = [
    {
      title: "Setup",
      code: `

      `.trim(),
    },
  ];

  return {
    title: "Promise",
    subtitle: "How Promise work",
    description: "",
    code: codeSnippets,
    output: {
      logs: [],
    },
    run: () => {
      const logs: unknown[] = [];
      const consoleLog = (...args: unknown[]) => {
        logs.push(args.length === 1 ? args[0] : args);
      };

      try {

      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
