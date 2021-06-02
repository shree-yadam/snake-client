// setup interface to handle user input from stdin
const { movementCommand, speedInterval } = require("./constants");
let connection;
let timerId = null;
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Quitting");
    process.exit();
  } else if (key in movementCommand) {
    if (key === 'w' || key === 'a' || key === 's' || key === 'd') {
      clearInterval(timerId);
      timerId = setInterval(() => {
        connection.write(movementCommand[key]);
      }, speedInterval);
    } else {
      connection.write(movementCommand[key]);
    }
  }
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;
  console.log("Use any of the following keys: ");
  for (let key in movementCommand) {
    console.log(`${key} - ${movementCommand[key]}`);
  }
  console.log("Ctrl + C - Quit");
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };