// setup interface to handle user input from stdin
let connection;

const movementCommand = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Quitting");
    process.exit();
  } else if (key === 'w' || key === 'a' || key === 's' || key === 'd') {
    connection.write(movementCommand[key]);
  }
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };