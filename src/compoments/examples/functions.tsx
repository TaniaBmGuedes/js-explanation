export function exampleFunctions() {
  const codeSnippet = `

  `.trim();

  return {
    title: "Functions",
    subtitle: "Array destructuring and logging",
    description: ".",
    code: codeSnippet,
    output: {
      logs: [],
    },
    run: () => {
      const logs: string[] = [];
      const consoleLog = (...args: unknown[]) => {
        logs.push(args.map((arg) => String(arg)).join(", "));
      };

      try {
        //Funciton declaration (function)
        function sayHi() {
          consoleLog("Hi");
        }
        sayHi();
      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
