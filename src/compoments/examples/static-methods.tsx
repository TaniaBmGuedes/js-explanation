export function exampleStatiMethods() {
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
      title: "Class with instance and static methods",
      code: `
class RemoteController {
  tv: string;
  volume: number;

  constructor(tv: string) {
    this.tv = tv;
    this.volume = 0;
    test();
  }

  // instance methods
  increaseVolume() {
    this.volume += 2;
  }

  decreaseVolume() {
    this.volume -= 2;
  }

  // static method
  static changeEnergy() {
    consoleLog("I will change battery");
    // consoleLog(this.volume) -> undefined (static methods cannot access instance properties)
  }

  static sum(x: number, y: number) {
    return x + y;
  }

  static whoIsThis() {
    consoleLog(this);
  }
}
      `.trim(),
    },
    {
      title: "Using instance methods",
      code: `
const remoteController1 = new RemoteController("LG");
consoleLog("Remote Controller 1", remoteController1);

remoteController1.increaseVolume();
remoteController1.increaseVolume();
remoteController1.increaseVolume();
consoleLog("Volume", remoteController1.volume);

remoteController1.decreaseVolume();
remoteController1.decreaseVolume();
consoleLog("Volume", remoteController1.volume);
      `.trim(),
    },
    {
      title: "Static method call",
      code: `
const remoteController2 = new RemoteController("SAMSUNG");
consoleLog("Remote Controller 2", remoteController2);
remoteController2.increaseVolume();
consoleLog("Volume", remoteController2.volume);
remoteController2.decreaseVolume();
consoleLog("Volume", remoteController2.volume);

RemoteController.changeEnergy();

// calling other static helpers
consoleLog("Random from Math.random()", Math.random());
const res = RemoteController.sum(2, 4);
consoleLog("Sum (static)", res);
RemoteController.whoIsThis();
      `.trim(),
    },
  ];

  return {
    title: "Static Methods",
    subtitle: "How static methods work",
    description:
      "Static methods live on the class itself (not on instances) and can be called without creating an object.",
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
        class RemoteController {
          tv: string;
          volume: number;
          constructor(tv: string) {
            this.tv = tv;
            this.volume = 0;
            consoleLog("This is my Test");
          }
          //instance method
          increaseVolume() {
            this.volume += 2;
          }
          decreaseVolume() {
            this.volume -= 2;
          }
          //static method
          static changeEnergy() {
            consoleLog("I will change battery");
            //consoleLog(this.volume) :undifined
          }
          static sum(x: number, y: number) {
            return x + y;
          }
          static whoIsThis() {
            consoleLog(this);
          }
        }

        const remoteController1 = new RemoteController("LG");
        consoleLog("Remote Controller 1", remoteController1);
        remoteController1.increaseVolume();
        remoteController1.increaseVolume();
        remoteController1.increaseVolume();
        consoleLog("Volume", remoteController1.volume);
        remoteController1.decreaseVolume();
        remoteController1.decreaseVolume();
        consoleLog("Volume", remoteController1.volume);

        const remoteController2 = new RemoteController("SAMSUNG");
        consoleLog("Remote Controller 2", remoteController2);
        remoteController2.increaseVolume();
        consoleLog("Volume", remoteController2.volume);
        remoteController2.decreaseVolume();
        consoleLog("Volume", remoteController2.volume);

        RemoteController.changeEnergy();

        //random is static method of Math class
        consoleLog(Math.random());

        const res = RemoteController.sum(2, 4);
        consoleLog(res);

        RemoteController.whoIsThis();
      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
