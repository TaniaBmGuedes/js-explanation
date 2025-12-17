export function exempleArraysMap() {
  const codeSnippets = [
    {
      title: "Setup",
      code: `
const logs = [];
const consoleLog = (...args) => {
  // Keep objects/arrays intact so they render clearly
  logs.push(args.length === 1 ? args[0] : args);
};
      `.trim(),
    },
    {
      title: "Map numbers to doubled values",
      code: `
const numbers = [
  1, 3, 44, 55, 66, 22, 11, 455, 324, 66, 7, 89, 32, 11, 91, 33, 55,
];
consoleLog("Numbers", numbers);

const doubledNumbers = numbers.map((value) => value * 2);
consoleLog("Doubled numbers", doubledNumbers);
      `.trim(),
    },
    {
      title: "Map people into different shapes",
      code: `
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

// just names
const namesOnly = people.map(({ name }) => name);
consoleLog("Only names", namesOnly);

// remove the name key (keep the rest)
const withoutName = people.map((obj) => ({ age: obj.age }));
consoleLog("Without name key", withoutName);

// add incremental id
const peopleWithId = people.map((value, indice) => {
    const id = (indice + 1) * 1000;
    return { id, ...value };
});
consoleLog("People with id", peopleWithId);
      `.trim(),
    },
  ];

  return {
    title: "Arrays",
    subtitle: "Array Map",
    description:
      "Map transforms each element and keeps the array length the same.",
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
        //return number duplicated
        const numbers = [
          1, 3, 44, 55, 66, 22, 11, 455, 324, 66, 7, 89, 32, 11, 91, 33, 55,
        ];
        consoleLog("Numbers", numbers);

        const duplicatedNumber = numbers.map((value) => value * 2);
        consoleLog("Doubled numbers", duplicatedNumber);

        //for each element return a string with person name
        //for each element remove only the name key of object
        //for each element add a id key in each object
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

        const onlyNamePeople = people.map(({ name }) => name);
        consoleLog("Only names", onlyNamePeople);

        const withoutName = people.map((obj) => ({ age: obj.age }));
        consoleLog("Without name key", withoutName);

        const peopleWithId = people.map((value, indice) => {
          const id = (indice + 1) * 1000;
          return { id, ...value };
        });
        consoleLog("People with id", peopleWithId);
      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
