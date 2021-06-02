const net = require("net");
const connect = require("./client").connect;

console.log("Connecting ...");
const conn = connect();
conn.on("connect", () => {
  // conn.write("Move: up");
  // setTimeout(() => {
  //   conn.write("Move: up");
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //     setTimeout(() => {
  //       conn.write("Move: up");
  //     }, 500);
  //     setTimeout(() => {
  //       conn.write("Move: left");
  //       setTimeout(() => {
  //         conn.write("Move: left");
  //         setTimeout(() => {
  //           conn.write("Move: left");
  //           setTimeout(() => {
  //             conn.write("Move: down");
  //           }, 500);
  //         }, 500);
  //       }, 500);
  //     }, 500);
  //   }, 500);
  // }, 500);
});
