const http = require("http");
const server = http.createServer((req, res) => {
  console.log("new request");
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  } else if (req.url === "/api/customers") {
    res.write("customers list");
    res.end();
  }
});
server.listen(3000);
console.log("Server listening in port 3000");
