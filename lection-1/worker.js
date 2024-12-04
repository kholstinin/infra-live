const { Worker, isMainThread, parentPort } = require("node:worker_threads");

if (isMainThread) {
  const worker = new Worker(__filename);

  worker.once("message", (message) => {
    console.log("received", message);
  });

  worker.postMessage("Hello, world!");
} else {
  parentPort.once("message", (message) => {
    parentPort.postMessage(message);
  });
}
