export function exempleArraysFilters() {
  const codeSnippets = [
    {
      title: "Setup",
      code: `
const logs = [];
const consoleLog = (...args) => {
  // Preserve objects/arrays for clearer rendering
  logs.push(args.length === 1 ? args[0] : args);
};
      `.trim(),
    },
    {
      title: "Filter numbers greater than 10 (long and short)",
      code: `
const numbers = [
  1, 3, 44, 55, 66, 22, 11, 455, 324, 66, 7, 89, 32, 11, 91, 33, 55,
];

consoleLog("Numbers", numbers);

function callbackFilter(value) {
  return value > 10;
}
const filteredNumbersLong = numbers.filter(callbackFilter);
consoleLog("Filtered numbers (long way)", filteredNumbersLong);

const filteredNumbersShort = numbers.filter((value) => value > 10);
consoleLog("Filtered numbers (short way)", filteredNumbersShort);
      `.trim(),
    },
    {
      title: "Sample people list",
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
      `.trim(),
    },
    {
      title: "People filters",
      code: `
// return names with 5 or more letters
const longNames = people.filter(({ name }) => name.length >= 5);
consoleLog("Names with 5+ letters", longNames);

// return people older than 50
const overFifty = people.filter(({ age }) => age > 50);
consoleLog("Older than 50", overFifty);

// return names that end with "a"
const endsWithA = people.filter(({ name }) =>
  name.toLowerCase().endsWith("a")
);
consoleLog("Names ending with 'a'", endsWithA);
      `.trim(),
    },
  ];

  return {
    title: "Arrays",
    subtitle: "Array Filter",
    description:
      "Filter builds a new array with only the items that satisfy a given condition (predicate). The original array is not modified.",
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
        //return number bigger than 10
        const numbers = [
          1, 3, 44, 55, 66, 22, 11, 455, 324, 66, 7, 89, 32, 11, 91, 33, 55,
        ];
        consoleLog("Numbers", numbers);
        //long Way
        function callbackFilter(value: number) {
          return value > 10;
        }
        const filtersNumbersLong = numbers.filter(callbackFilter);
        consoleLog("Filtered numbers (long way)", filtersNumbersLong);
        //short way
        const filtersNumbersShort = numbers.filter((v) => v > 10);
        consoleLog("Filtered numbers (short way)", filtersNumbersShort);
        //return name people that have more than 5 letters or more
        //return name people that have more than 50 years old
        //return name people whose name ends on "a" letters
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

        const peopleWithBigName = people.filter((value) => {
          return value.name.length >= 5;
        });
        consoleLog("People with big name", peopleWithBigName);

        const peopleOlder50 = people.filter((value) => {
          return value.age >= 50;
        });
        consoleLog("People with age bigger 50", peopleOlder50);


        const peopleNameEndsWithA = people.filter((value) => {
          return value.name.toLowerCase().endsWith("a");
        });
        consoleLog("People whose name ends with 'a'", peopleNameEndsWithA);


      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
