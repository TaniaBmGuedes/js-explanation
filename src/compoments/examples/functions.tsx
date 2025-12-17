export function exampleFunctions() {
  const codeSnippets = [
    {
      title: "Setup",
      code: `
const logs = [];
const consoleLog = (...args) => {
  logs.push(args.map((arg) => String(arg)).join(", "));
};
      `.trim(),
    },
    {
      title: "Function declaration (hoisting)",
      code: `
sayHi();
function sayHi() {
  consoleLog("Hi");
}
sayHi();
      `.trim(),
    },
    {
      title: "Function expression (first-class)",
      code: `
const iAmDice = function () {
  consoleLog("I am a dice");
};

iAmDice();

function executeFunction(functionData: () => void) {
  consoleLog("I am gonna execute your function below");
  functionData();
}

executeFunction(iAmDice);
      `.trim(),
    },
    {
      title: "Arrow function",
      code: `
const arrowFunction = () => {
  consoleLog("I am an arrow function");
};

arrowFunction();
      `.trim(),
    },
    {
      title: "Function inside an object",
      code: `
const obj = {
  talk: function () {
    consoleLog("I am speaking...");
  },
};

obj.talk();
      `.trim(),
    },
  ];

  return {
    title: "Functions",
    subtitle: "Function declarations, expressions, arrows, and methods",
    description:
      "Shows different ways to declare and use functions: hoisting, function expressions, arrow functions, and object methods.",
    code: codeSnippets,
    output: {
      logs: [],
    },
    run: () => {
      const logs: string[] = [];
      const consoleLog = (...args: unknown[]) => {
        logs.push(args.map((arg) => String(arg)).join(", "));
      };

      try {
        //Funciton declaration (function hoisting)
        sayHi();
        function sayHi() {
          consoleLog("Hi");
        }
        sayHi();

        //First class objects(first class objects) ->we can treatat function like data (Function expression)
        const iAmDice = function () {
          consoleLog("I am a dice");
        };
        iAmDice();

        function executeFunction(functionData: () => void) {
          consoleLog("i am gonna execute your function below");
          functionData();
        }
        executeFunction(iAmDice);

        //arrow function : they are treated like a dice
        const arrowFunction = () => {
          consoleLog("I am a arrow function");
        };
        arrowFunction();

        //function inside an object
        const obj = {
          talk: function () {
            consoleLog("I am speaking...");
          },
        };
        obj.talk();
      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
