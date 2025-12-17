export function exempleArraysFilterMapReduce() {
  const codeSnippets = [
    {
      title: "Setup",
      code: `
const logs = [];
const consoleLog = (...args) => {
  // Keep objects/arrays for readable output
  logs.push(args.length === 1 ? args[0] : args);
};
      `.trim(),
    },
    {
      title: "Long way (filter → map → reduce)",
      code: `
const numbers = [
  1, 3, 44, 55, 66, 22, 11, 455, 324, 66, 7, 89, 32, 11, 91, 33, 55,
];
consoleLog("Numbers", numbers);

// filter odd numbers
const oddNumbers = numbers.filter((value) => value % 2 !== 0);
consoleLog("Odd numbers", oddNumbers);

// double them
const doubledOdds = oddNumbers.map((value) => value * 2);
consoleLog("Doubled odd numbers", doubledOdds);

// sum them
const sumDoubledOdds = doubledOdds.reduce((acc, value) => acc + value, 0);
consoleLog("Sum of doubled odd numbers", sumDoubledOdds);
      `.trim(),
    },
    {
      title: "Chained (short way)",
      code: `
const result = numbers
  .filter((value) => value % 2 !== 0)
  .map((value) => value * 2)
  .reduce((acc, value) => acc + value, 0);

consoleLog("Result", result);
      `.trim(),
    },
  ];

  return {
    title: "Arrays",
    subtitle: "Array Filter, Map and Reduce",
    description:
      "Combines filter, map, and reduce to process arrays step by step or in a chained expression.",
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
        //return the summed numbers of odd duplicated numbers
        //filter odd number
        //map duplicate value
        //reduce to sum all value

        //Long Way
        const numbers = [
          1, 3, 44, 55, 66, 22, 11, 455, 324, 66, 7, 89, 32, 11, 91, 33, 55,
        ];
        consoleLog("Numbers", numbers);

        const oddNumbers = numbers.filter((value) => {
          return value % 2 !== 0;
        });
        consoleLog("Odd numbers", oddNumbers);

        const dupNumbers = oddNumbers.map((value) => {
          return value * 2;
        });
        consoleLog("Duplicated numbers", dupNumbers);

        const sumNumbers = dupNumbers.reduce((acc, value) => {
          return acc + value;
        }, 0);
        consoleLog("Sum numbers", sumNumbers);

        //Short Way
        const result = numbers
          .filter((value) => value % 2 !== 0)
          .map((value) => value * 2)
          .reduce((acc, value) => acc + value, 0);

        consoleLog("Result ", result);
      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
