const server = require('./server.js');
const PORT = 3001;

server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
});

