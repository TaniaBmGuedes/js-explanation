export function exempleArraysReduce() {
  const codeSnippets = [
    {
      title: "Setup",
      code: `
const logs = [];
const consoleLog = (...args) => {
  logs.push(args.length === 1 ? args[0] : args);
};
      `.trim(),
    },
    {
      title: "Sum all numbers",
      code: `
const numbers = [
  1, 3, 44, 55, 66, 22, 11, 455, 324, 66, 7, 89, 32, 11, 91, 33, 55,
];
consoleLog("Numbers", numbers);

const summedValues = numbers.reduce((acc, value) => acc + value, 0);
consoleLog("Summed numbers", summedValues);
      `.trim(),
    },
    {
      title: "Partition into odd and even",
      code: `
const oddValues = numbers.reduce((acc, value) => {
  if (value % 2 !== 0) acc.push(value);
  return acc;
}, []);
consoleLog("Odd numbers", oddValues);

const evenValues = numbers.reduce((acc, value) => {
  if (value % 2 === 0) acc.push(value);
  return acc;
}, []);
consoleLog("Even numbers", evenValues);
      `.trim(),
    },
    {
      title: "Build a doubled array with reduce",
      code: `
const doubledValues = numbers.reduce((acc, value) => {
  acc.push(value * 2);
  return acc;
}, []);
consoleLog("Doubled numbers", doubledValues);
      `.trim(),
    },
  ];

  return {
    title: "Arrays",
    subtitle: "Array Reduce",
    description:
      "Reduce accumulates array values into a single result (number, array, object, etc.) without mutating the original.",
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
        //return all the summed numbers
        //return an array with  odd  numbers
        //return an array with  even  numbers
        //return an array with  double values
        const numbers = [
          1, 3, 44, 55, 66, 22, 11, 455, 324, 66, 7, 89, 32, 11, 91, 33, 55,
        ];
        consoleLog("Numbers", numbers);

        const summedValues = numbers.reduce((acc, value) => {
          return acc + value;
        }, 0);
        consoleLog("Summed numbers", summedValues);

        const oddValues = numbers.reduce<number[]>((acc, value) => {
          if (value % 2 !== 0) {
            acc.push(value);
          }
          return acc;
        }, []);
        consoleLog("Odd numbers", oddValues);

        const evenValues = numbers.reduce<number[]>((acc, value) => {
          if (value % 2 === 0) {
            acc.push(value);
          }
          return acc;
        }, []);
        consoleLog("Even numbers", evenValues);

        const duplicatedValues = numbers.reduce((acc, value) => {
          acc.push(value * 2);
          return acc;
        }, [] as number[]);
        consoleLog("Doubled numbers", duplicatedValues);

        //return the oldest person
        const people = [
          { name: "Tania", age: 23 },
          { name: "Guilherme", age: 31 },
          { name: "David", age: 10 },
          { name: "Marta", age: 46 },
          { name: "Claudia", age: 21 },
          { name: "Pedro", age: 51 },
          { name: "Rosa", age: 78 },
          { name: "Jose", age: 76 },
          { name: "Simone", age: 6 },
          { name: "Ricardo", age: 51 },
        ];
        consoleLog("People", people);

        const oldestPerson = people.reduce((acc, value) => {
          if (value.age > acc.age) {
            return value;
          }
          return acc;
        });
        consoleLog("Oldest person", oldestPerson);
      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
