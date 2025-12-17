export function exempleObjects() {
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
      title: "Create and read properties",
      code: `
const person = {
  name: "Tania",
  subname: "Guedes",
  age: 23,
  address: {
    street: "Main Street n30",
    city: "Porto",
  },
};

consoleLog(person);
consoleLog(person.name);

const nameFirst = person.name;
consoleLog(nameFirst);
      `.trim(),
    },
    {
      title: "Destructuring known keys",
      code: `
const { name, subname, age } = person;
consoleLog(name);
consoleLog(subname);
consoleLog(age);
      `.trim(),
    },
    {
      title: "Another object with unknown keys",
      code: `
const unknownPersonName = {
  unknownname: "",
  unknownsubname: "Guedes",
  unknownage: 23,
  unknownaddress: {
    unknownstreet: "Main Street n30",
    unknowncity: "Porto",
  },
};

const { unknownname, unknownsubname, unknownage } = unknownPersonName;
consoleLog(unknownname);
consoleLog(unknownsubname);
consoleLog(unknownage);
      `.trim(),
    },
    {
      title: "Defaults, renaming and nested destructuring",
      code: `
const unknownPersonNameSecond = {
  secondunknownname: "",
  secondunknownsubname: "Guedes",
  secondunknownage: 23,
  secondunknownaddress: {
    secondunknownstreet: "Main Street n30",
    secondunknowncity: "Porto",
  },
};

const { secondunknownname = "Does not exist" } = unknownPersonNameSecond;
consoleLog(secondunknownname);

const manperson = {
  manname: "David",
  mansubname: "Garrucho",
  manage: 23,
  manaddress: {
    manstreet: "Main Street n30",
    mancity: "Porto",
  },
};

const { manname: test = "", mansubname, manaddress } = manperson;
consoleLog(test, mansubname);
consoleLog(manaddress);

const {
  manaddress: { manstreet, mancity },
} = manperson;
consoleLog(manstreet);
consoleLog(mancity);

const {
  manaddress: { manstreet: r, mancity: c = "Coimbra" },
} = manperson;
consoleLog(r);
consoleLog(c);

const { manage, ...rest } = manperson;
consoleLog(manage);
consoleLog(rest);
      `.trim(),
    },
  ];

  return {
    title: "Objects",
    subtitle: "Objects destructuring and logging",
    description:
      "Demonstrates destructuring assignment with objects and logging values before and after the reassignment.",
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
        const person = {
          name: "Tania",
          subname: "Guedes",
          age: 23,
          address: {
            street: "Main Street n30",
            city: "Porto",
          },
        };
        consoleLog(person);
        consoleLog(person.name);
        const nameFirst = person.name;
        consoleLog(nameFirst);

        const { name, subname, age } = person;
        consoleLog(name);
        consoleLog(subname);
        consoleLog(age);

        const unknownPersonName = {
          unknownname: "",
          unknownsubname: "Guedes",
          unknownage: 23,
          unknownaddress: {
            unknownstreet: "Main Street n30",
            unknowncity: "Porto",
          },
        };
        const { unknownname, unknownsubname, unknownage } = unknownPersonName;
        consoleLog(unknownname);
        consoleLog(unknownsubname);
        consoleLog(unknownage);

        const unknownPersonNameSecond = {
          secondunknownname: "",
          secondunknownsubname: "Guedes",
          secondunknownage: 23,
          secondunknownaddress: {
            secondunknownstreet: "Main Street n30",
            secondunknowncity: "Porto",
          },
        };
        const { secondunknownname = "Does not exist" } = unknownPersonNameSecond;
        consoleLog(secondunknownname);

        const manperson = {
          manname: "David",
          mansubname: "Garrucho",
          manage: 23,
          manaddress: {
            manstreet: "Main Street n30",
            mancity: "Porto",
          },
        };
        const { manname: test = "", mansubname, manaddress } = manperson;
        consoleLog(test, mansubname);
        consoleLog(manaddress);

        const {
          manaddress: { manstreet, mancity },
        } = manperson;
        consoleLog(manstreet);
        consoleLog(mancity);

        const {
          manaddress: { manstreet: r, mancity: c = "Coimbra" },
        } = manperson;
        consoleLog(r);
        consoleLog(c);

        const { manage, ...rest } = manperson;
        consoleLog(manage);
        consoleLog(rest);
      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
