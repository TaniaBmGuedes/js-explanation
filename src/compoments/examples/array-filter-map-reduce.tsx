export function exempleArraysFilterMapReduce() {
  const codeSnippets = [
    {
      title: "Setup",
      code: `

      `.trim(),
    },
  ];

  return {
    title: "Arrays",
    subtitle: "Array Filter, Map and Reduce",
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
          return value % 2 === 0;
        });
        consoleLog("Odd numbers", oddNumbers);

        const dupNumbers = oddNumbers.map((value) => {
          return value * 2;
        });
        consoleLog("Duplicated numbers", dupNumbers);

        const sumNumbers = dupNumbers.reduce((acc, value) => {
          return (acc + value);
        });
        consoleLog("Sum numbers", sumNumbers);

        //Short Way
        const result = numbers
          .filter((value) => value % 2 === 0)
          .map((value) => value * 2)
          .reduce((acc, value) => acc + value);

        consoleLog("Result ", result);
      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
