export function exampleforEach() {
  const codeSnippets = [
    {
      title: "Setup",
      code: `
const logs = [];
const consoleLog = (...args) => {
  // Keep arrays/objects intact for readable output
  logs.push(args.length === 1 ? args[0] : args);
};
      `.trim(),
    },
    {
      title: "Numbers sample",
      code: `
const numbers = [
  1, 3, 44, 55, 66, 22, 11, 455, 324, 66, 7, 89, 32, 11, 91, 33, 55,
];
consoleLog("Numbers", numbers);
      `.trim(),
    },
    {
      title: "for...of iteration",
      code: `
for (const value of numbers) {
  consoleLog(value);
}
      `.trim(),
    },
    {
      title: "forEach iteration",
      code: `
numbers.forEach((value, index, array) => {
  consoleLog("Index", index, "Value", value, "From array", array[index]);
});
      `.trim(),
    },
    {
      title: "Summing with forEach",
      code: `
let total = 0;
numbers.forEach((value) => {
  total += value;
});
consoleLog("Total", total);
      `.trim(),
    },
  ];

  return {
    title: "ForEach",
    subtitle: "How forEach works",
    description:
      "forEach iterates over arrays without returning a new array; use it for side effects like logging or accumulation.",
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
