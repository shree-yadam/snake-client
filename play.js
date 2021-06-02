const net = require("net");
const connect = require("./client").connect;

console.log("Connecting ...");
const conn = connect();

// setup interface to handle user input from stdin

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log("Quitting");
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();


