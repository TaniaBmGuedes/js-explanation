export function examplesFecthApi() {
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
      title: "XHR wrapped in a Promise",
      code: `
const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};
      `.trim(),
    },
    {
      title: "Triggering the request",
      code: `
document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    consoleLog("Link click intercepted; would load page via XHR here.");
  }
});
      `.trim(),
    },
    {
      title: "Async loader (placeholder)",
      code: `
async function loadPage(el) {
  const href = el.getAttribute("href");
  consoleLog("Would load", href);
}
      `.trim(),
    },
    {
      title: "Async load with XHR wrapper",
      code: `
async function loadPage(el) {
  const href = el.getAttribute("href");

  const config = {
    method: "GET",
    url: href,
  };

  try {
    const response = await request(config);
    renderResult(response);
  } catch (e) {
    consoleLog("Request failed", e);
  }
}

function renderResult(response) {
  const resultEl = document.querySelector(".resultado");
  if (resultEl) {
    resultEl.innerHTML = response;
  }
}
      `.trim(),
    },
    {
      title: "Async load with fetch",
      code: `
async function loadPage(el) {
  const href = el.getAttribute("href");
  if (!href) return;

  try {
    const resp = await fetch(href);
    if (!resp.ok) throw new Error("Fetch failed: " + resp.status);
    const html = await resp.text();
    renderResult(html);
  } catch (e) {
    consoleLog("Request failed", e);
  }
}
      `.trim(),
    },
  ];

  return {
    title: "Fetch API",
    subtitle: "How Fetch API work",
    description:
      "Demonstrates intercepting links to load HTML via fetch/XHR, render the response into the DOM, and log previews for easy debugging.",
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
        document.addEventListener("click", (e) => {
          const el = e.target as HTMLElement;
          const tag = el?.tagName?.toLowerCase();

          if (tag === "a") {
            e.preventDefault();
            consoleLog("Link click intercepted; would load page via XHR here.");
            loadPage(el);
          }
        });

        async function loadPage(el: HTMLElement) {
          const href = el.getAttribute("href");
          if (!href) {
            consoleLog("No href found on clicked link.");
            return;
          }

          try {
            const resp = await fetch(href);
            if (!resp.ok) throw new Error(`Fetch failed: ${resp.status}`);
            const html = await resp.text();
            loadResults(html);
          } catch (e) {
            consoleLog("Request failed", e);
          }
        }

        function loadResults(response: string) {
          const res = document.querySelector(
            ".resultado"
          ) as HTMLElement | null;
          if (res) {
            res.innerHTML = response;
          }
          consoleLog({
            loaded: true,
            preview: `${response.slice(0, 120)}...`,
          });
        }

        consoleLog({ status: "Ready", note: "Click a link to load via fetch." });
        const sampleHref = "/pagina1.html";
        try {
          const resp = await fetch(sampleHref);
          if (!resp.ok) throw new Error(`Fetch failed: ${resp.status}`);
          const html = await resp.text();
          consoleLog({ sampleFetch: sampleHref, preview: `${html.slice(0, 120)}...` });
        } catch (err) {
          consoleLog("Sample fetch failed", err);
        }
      } catch (error) {
        logs.push(`Error: ${String(error)}`);
      }

      return { logs };
    },
  };
}
