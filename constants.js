const IP = "135.23.222.131";
const PORT = 50542;
const movementCommand = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  m: "Say: Yay! I can do this",
  p: "Say: Hmmm......"
};

const speedInterval = 100;

module.exports = { IP, PORT, movementCommand, speedInterval };