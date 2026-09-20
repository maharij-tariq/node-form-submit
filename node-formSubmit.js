const fs = require("node:fs");
const http = require("node:http");

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    fs.writeFile;
    if (err) {
      console.log(err);
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("<h1>404 Page Not Found</h1>");
    } else if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } else if (req.url === "/submit") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
         res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Submit Foam Successfully</h1>");
      });    
    } else {
      (res.writeHead(404), { "Content-Type": "text/html" });
      res.end("<h1>404 Page Not Found</h1>");
    }
  });
});
server.listen(7000, () => {
  console.log("server is running on port 7000");
});
