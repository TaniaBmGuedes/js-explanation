export function examplesFecthApiAxios() {
  const codeSnippets = [
    {
      title: "Setup",
      code: `
const logs = [];
const consoleLog = (...args) => {
  logs.push(args.length === 1 ? args[0] : args);
};

// Mock JSON that axios will return
const mockData = {
  "/api/example": {
    message: "Hello from axios mock",
    items: [
      { id: 1, title: "First" },
      { id: 2, title: "Second" },
      { id: 3, title: "Third" },
    ],
  },
};
      `.trim(),
    },
    {
      title: "Mock axios.get",
      code: `
const axios = {
  get: (url) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (mockData[url]) {
          resolve({ data: mockData[url], status: 200 });
        } else {
          reject({ error: "Not found", status: 404 });
        }
      }, 200);
    }),
};
      `.trim(),
    },
    {
      title: "Fetch JSON with axios mock",
      code: `
async function loadWithAxios() {
  try {
    const { data, status } = await axios.get("/api/example");
    consoleLog({ status, data });
  } catch (err) {
    consoleLog("Axios mock failed", err);
  }
}

loadWithAxios();
      `.trim(),
    },
  ];

  return {
    title: "Axios Mock",
    subtitle: "How axios-style fetch works",
    description:
      "Mocked axios.get hitting a fake JSON endpoint to show Promise-based fetching and structured logging.",
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
        const mockData: Record<string, unknown> = {
          "/api/example": {
            message: "Hello from axios mock",
            items: [
              { id: 1, title: "First" },
              { id: 2, title: "Second" },
              { id: 3, title: "Third" },
            ],
          },
        };

        const axios = {
          get: (url: string) =>
            new Promise<{ data: unknown; status: number }>((resolve, reject) => {
              setTimeout(() => {
                if (mockData[url]) {
                  resolve({ data: mockData[url], status: 200 });
                } else {
                  reject({ error: "Not found", status: 404 });
                }
              }, 200);
            }),
        };

        consoleLog({ status: "Ready", note: "Axios mock demo running." });

        try {
          const { data, status } = await axios.get("/api/example");
          consoleLog({ status, data });
        } catch (err) {
          consoleLog("Axios mock failed", err);
        }
      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
