export function examplesPromises() {
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
      title: "Promise with setTimeout",
      code: `
function waitASecond(msg: string, time: number) {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}
      `.trim(),
    },
    {
      title: "Async/await flow",
      code: `
async function runAsync() {
  const first = await waitASecond("Message after 300ms", 300);
  consoleLog(first);

  const second = await waitASecond("Message after 600ms", 300);
  consoleLog(second);

  const all = await Promise.all([
    waitASecond("All: A", 200),
    waitASecond("All: B", 200),
  ]);
  consoleLog(all);
}

runAsync();
      `.trim(),
    },
    {
      title: "Async chain with random delays",
      code: `
const rand = (min = 1000, max = 3000) =>
  Math.floor(Math.random() * (max - min) + min);

async function runChained() {
  const first = await waitASecond("DB connection: A", rand());
  consoleLog(first);

  const second = await waitASecond("Getting data from DB", rand());
  consoleLog(second);

  const third = await waitASecond("Treat data from DB", rand());
  consoleLog(third);

  consoleLog("Show data");
}

runChained();
      `.trim(),
    },
    {
      title: "Promise.all, Promise.race, resolve, reject",
      code: `
async function runAllRace() {
  const allResult = await Promise.all([
    waitASecond("All: One", 150),
    waitASecond("All: Two", 150),
  ]);
  consoleLog("Promise.all result", allResult);

  const raceResult = await Promise.race([
    waitASecond("Race: Fast", 50),
    waitASecond("Race: Slow", 200),
  ]);
  consoleLog("Promise.race winner", raceResult);

  const resolved = await Promise.resolve("Resolved immediately");
  consoleLog(resolved);

  try {
    await Promise.reject("Rejected immediately");
  } catch (err) {
    consoleLog("Caught rejection", err);
  }
}

runAllRace();
      `.trim(),
    },
  ];

  return {
    title: "Promise",
    subtitle: "How Promise work",
    description:
      "When we use async we use promise. Demonstrates creating a Promise, awaiting it, combining multiple Promises, and chaining async steps. Click Show/Hide output to re-run and see new randomized timings.",
    code: codeSnippets,
    output: {
      logs: [],
    },
    run: async () => {
      const logs: unknown[] = [];
      const consoleLog = (...args: unknown[]) => {
        logs.push(args.length === 1 ? args[0] : args);
      };

      try {
        const rand = (min = 1000, max = 3000) =>
          Math.floor(Math.random() * (max - min) + min);

        const waitASecond = (msg: string, time: number) =>
          new Promise<string>((resolve) => {
            setTimeout(() => resolve(msg), time);
          });

        const first = await waitASecond("Message after 300ms", 300);
        consoleLog(first);

        const second = await waitASecond("Message after 600ms", 300);
        consoleLog(second);

        const all = await Promise.all([
          waitASecond("All: A", 200),
          waitASecond("All: B", 200),
        ]);
        consoleLog(all);

        const db1 = await waitASecond("DB connection: A", rand());
        consoleLog(db1);

        const db2 = await waitASecond("Getting data from DB", rand());
        consoleLog(db2);

        const db3 = await waitASecond("Treat data from DB", rand());
        consoleLog(db3);

        consoleLog("Show data");

        consoleLog("I will be the first");

        const allResult = await Promise.all([
          waitASecond("All: One", 150),
          waitASecond("All: Two", 150),
        ]);
        consoleLog("Promise.all result", allResult);

        const raceResult = await Promise.race([
          waitASecond("Race: Fast", 50),
          waitASecond("Race: Slow", 200),
        ]);
        consoleLog("Promise.race winner", raceResult);

        const resolved = await Promise.resolve("Resolved immediately");
        consoleLog(resolved);

        try {
          await Promise.reject("Rejected immediately");
        } catch (err) {
          consoleLog("Caught rejection", err);
        }
      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
