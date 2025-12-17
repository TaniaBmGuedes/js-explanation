export function exampleStatiMethods() {
  const codeSnippets = [{}];

  return {
    title: "Static Methods",
    subtitle: "How static methods work",
    description:
      "They are methoda that we can instance in classes without using the word new",
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
        class Person {
          name: string;
          subname: string;
          constructor(name: string, subname: string) {
            this.name = name;
            this.subname = subname;
          }
          speak() {
            consoleLog(`${this.name} is speaking`);
          }
          drink() {
            consoleLog(`${this.name} is drinking`);
          }
          eat() {
            consoleLog(`${this.name} is eating`);
          }
          sleep() {
            consoleLog(`${this.name} is sleeping`);
          }
        }

        type PersonTwoType = {
          name: string;
          subname: string;
          speak: () => void;
        };
        type PersonTwoConstructor = new (
          name: string,
          subname: string
        ) => PersonTwoType;

        function PersonTwo(this: PersonTwoType, name: string, subname: string) {
          this.name = name;
          this.subname = subname;
        }
        PersonTwo.prototype.speak = function () {
          consoleLog(`${this.name} is speaking`);
        };
        const PersonTwoCtor = PersonTwo as unknown as PersonTwoConstructor;
        //instance : create a object of the class
        const newPerson = new Person("Tania", "Guedes");
        consoleLog(newPerson);
        newPerson.sleep();
        newPerson.eat();
        newPerson.drink();
        newPerson.speak();
        //how to compare them
        const newPersonTwo = new PersonTwoCtor("Guilherme", "Garrucho");
        consoleLog(newPersonTwo);
        newPersonTwo.speak();
      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
