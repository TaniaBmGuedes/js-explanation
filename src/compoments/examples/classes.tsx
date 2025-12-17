export function exampleClasses() {
  const codeSnippets = [
    {
      title: "Setup",
      code: `

      `.trim(),
    },
  
  ];

  return {
    title: "Classes",
    subtitle: "How Classes works",
    description:
      "",
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
        const numbers = [
          1, 3, 44, 55, 66, 22, 11, 455, 324, 66, 7, 89, 32, 11, 91, 33, 55,
        ];
        consoleLog("Numbers", numbers);

        for (const value of numbers) {
          consoleLog(value);
        }

        numbers.forEach((value, index, array) => {
          consoleLog("Index", index, "Value", value, "From array", array[index]);
        });

        let total = 0;
        numbers.forEach((value) => {
          total += value;
        });
        consoleLog("Total", total);
      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
