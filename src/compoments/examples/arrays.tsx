export function exemploArrays() {
  const codeSnippet = `
const a = "A";
const b = "B";
const c = "C";

console.log(a, b, c);
const letters = [b, c, a];
[a, b, c] = letters;
console.log(a, b, c);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers[0]);
const [firstNumber, secondNumber, ...restNumbers] = numbers; //rest operator
console.log(firstNumber);
console.log(secondNumber);
console.log(restNumbers);
const [firstNumberSecond, , secondNumberSecond, , thirdNumberSecond] = numbers;
console.log(firstNumberSecond);
console.log(secondNumberSecond);
console.log(thirdNumberSecond);
const listNumbers = [
          [1, 2, 3],
          [11, 22, 33],
          [111, 222, 333],
        ];
console.log(listNumbers[1])
console.log(listNumbers[1][2])
const [,[,,six]] = listNumbers;
console.log(six);
const [list1, list2, list3] = listNumbers;
console.log(list1);
console.log(list2);
console.log(list3);
  `.trim();

  return {
    title: "Arrays",
    subtitle: "Array destructuring and logging",
    description:
      "Demonstrates destructuring assignment with arrays and logging values before and after the reassignment.",
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
        let a = "A";
        let b = "B";
        let c = "C";
        consoleLog(a, b, c);
        const letters = [b, c, a];
        [a, b, c] = letters;
        consoleLog(a, b, c);
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        consoleLog(numbers[0]);
        const [firstNumber, secondNumber, ...restNumbers] = numbers; //rest operator
        consoleLog(firstNumber);
        consoleLog(secondNumber);
        consoleLog(restNumbers);
        const [firstNumberSecond, , secondNumberSecond, , thirdNumberSecond] =
          numbers;
        consoleLog(firstNumberSecond);
        consoleLog(secondNumberSecond);
        consoleLog(thirdNumberSecond);
        const listNumbers = [
          [1, 2, 3],
          [11, 22, 33],
          [111, 222, 333],
        ];
        consoleLog(listNumbers[1]);
        consoleLog(listNumbers[1][2]);
        const [, [, six]] = listNumbers;
        consoleLog(six);
        const [list1, list2, list3] = listNumbers;
        consoleLog(list1);
        consoleLog(list2);
        consoleLog(list3);
      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
