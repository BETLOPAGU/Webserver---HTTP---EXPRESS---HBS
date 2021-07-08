const http = require('http');

http.createServer( (req, res) => {
    //console.log(req);

    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    //res.writeHead(200, { 'Content-Type': 'application/csv' });
   
    res.write('Hola Mundo');
    //res.write( 'id, nombre\n' );
    //res.write( '1, Verónica\n' );
    //res.write( '2, Gera\n' );
    //res.write( '3, Nadia\n' );
    res.end();
})
.listen(8080);

console.log('Escuchando en el puerto', 8080); 