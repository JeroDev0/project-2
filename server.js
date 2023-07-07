const  http = require('http');

const host = "localhost";
const port = 8080

const tareas = [
    { id: 1, description: "revisar codigo", state: true},
    { id: 2, description: "documentar codigo", state: false },
    { id: 3, description: "breack", state: true },
    { id: 4, description: "estudiar", state: true },
    { id: 5, description: "comprar la mesa", state: false },
    { id: 6, description: "descansar", state: true }
  ];

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(tareas))
    res.end();
  });
  

server.listen(port, host, () => {
console.log(`servidor funcionando en http://${host}:${port}`)
});