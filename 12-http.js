const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h1>hello world this is mine  welcome to about</h1>
         <a href="/about"> To about</a>`);
  } else if (req.url === "/about") {
    res.end(`<h1>welcome to about</h1>
         <a href="/"> back home</a>`);
  }
  res.end(`
      <h1>oops something went wrong</h1>
      <p>page not found </p>
      <a href="/"> back home</a>`);
});
server.listen(5000);
