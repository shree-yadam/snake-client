// setup interface to handle user input from stdin
let connection;

const movementCommand = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  m: "Say: Yay! I can do this",
  p: "Say: Hmmm......"
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Quitting");
    process.exit();
  } else if (key in movementCommand) {
    connection.write(movementCommand[key]);
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
  console.log("Ctrl + C - move up");
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };