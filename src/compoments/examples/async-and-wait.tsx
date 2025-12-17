export function examplesAsyncWait() {
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
      title: "Random delay helper",
      code: `
function rand(min = 0.2, max = 0.8) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
      `.trim(),
    },
    {
      title: "Promise with validation and timeout",
      code: `
function waitForMessage(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Hit an error");
        return;
      }

      resolve(msg.toUpperCase() + " - Passed the promise");
    }, time);
  });
}
      `.trim(),
    },
    {
      title: "Async/await sequence",
      code: `
async function runAsync() {
  const first = await waitForMessage("First message", rand(0.2, 0.8));
  consoleLog(first);

  const second = await waitForMessage("Second message", rand(0.2, 0.8));
  consoleLog(second);

  try {
    await waitForMessage(123, rand(0.2, 0.8));
  } catch (err) {
    consoleLog("Caught rejection", err);
  }
}

runAsync();
      `.trim(),
    },
    {
      title: "Promise chaining (then/catch)",
      code: `
waitForMessage("Phase 1", rand(1, 3))
  .then((value) => {
    consoleLog(value);
    return waitForMessage("Phase 2", rand(0.2, 0.8));
  })
  .then((value) => {
    consoleLog(value);
    return waitForMessage("Phase 3", rand(0.2, 0.8));
  })
  .then((value) => {
    consoleLog(value);
  })
  .catch((err) => consoleLog("Caught rejection", err));
      `.trim(),
    },
    {
      title: "Async sequence with await",
      code: `
async function execute() {
  const resultPhase1 = await waitForMessage("Phase 1", rand(0.2, 0.8));
  consoleLog("Result Phase 1", resultPhase1);
  const resultPhase2 = await waitForMessage("Phase 2", rand(0.2, 0.8));
  consoleLog("Result Phase 2", resultPhase2);
  const resultPhase3 = await waitForMessage("Phase 3", rand(0.2, 0.8));
  consoleLog("Result Phase 3", resultPhase3);
  consoleLog("We have finished");
}

execute();
      `.trim(),
    },
  ];

  return {
    title: "Async and Wait",
    subtitle: "How Async and Wait work",
    description:
      "Async/await with random delays: validate inputs, resolve uppercased text, or reject with errors. Includes async/await and then/catch chaining. Click Show/Hide output to re-run and see new timings.",
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
        const rand = (min = 0.2, max = 0.8) => {
          min *= 1000;
          max *= 1000;
          return Math.floor(Math.random() * (max - min) + min);
        };

        const waitForMessage = (msg: string, time: number) =>
          new Promise<string>((resolve, reject) => {
            setTimeout(() => {
              if (typeof msg !== "string") {
                reject("Hit an error");
                return;
              }
              resolve(msg.toUpperCase() + " - Passed the promise");
            }, time);
          });

        const first = await waitForMessage("First message", rand(0.2, 0.8));
        consoleLog(first);

        const second = await waitForMessage("Second message", rand(0.2, 0.8));
        consoleLog(second);

        try {
          await waitForMessage("" as unknown as string, rand(0.2, 0.8));
        } catch (err) {
          consoleLog("Caught rejection", err);
        }

        await waitForMessage("Phase 1", rand(0.2, 0.8))
          .then((value) => {
            consoleLog(value);
            return waitForMessage("Phase 2", rand(0.2, 0.8));
          })
          .then((value) => {
            consoleLog(value);
            return waitForMessage("Phase 3", rand(0.2, 0.8));
          })
          .then((value) => {
            consoleLog(value);
          })
          .catch((err) => consoleLog("Caught rejection", err));

        // we can only use await if we use async before function
        async function execute() {
          const resultPhase1 = await waitForMessage("Phase 1", rand(0.2, 0.8));
          consoleLog("Result Phase 1", resultPhase1);
          const resultPhase2 = await waitForMessage("Phase 2", rand(0.2, 0.8));
          consoleLog("Result Phase 2", resultPhase2);
          const resultPhase3 = await waitForMessage("Phase 3", rand(0.2, 0.8));
          consoleLog("Result Phase 3", resultPhase3);
          consoleLog("We have finished");
        }
        await execute();
      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
