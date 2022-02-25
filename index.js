const http = require("http");
const server = http.createServer((req, res) => {
  console.log("new request");
  res.write("hello world");
  res.end();
});
server.listen(3000);
console.log("Server listening in port 3000");
