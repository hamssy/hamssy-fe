(async () => {
  if (typeof window === "undefined") {
    const { server } = await require("./server");
    server.listen();
  } else {
    const { worker } = require("./browser");
    await worker.start();
  }
})();

export {};
