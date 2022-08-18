// el modulo http de nodejs permite  a Node. js para transferir datos a través del Protocolo de transferencia de hipertexto (HTTP) y crear servidores

var http=require('http') // permite usar http mejor dicho sus protocolos, recibir peticios y mandar respuestas

http.createServer(function(req,res){ // el metodo createServer() permite crear un servidor y recibe un funcion callback el cual tiene dos parametros uno que recibe peticiones y otro argumento que es el que manda respuestas y por ultimo usamos el metodo listen el cual sirve para especificar en que puerto se va a ejecutar nuestras peticiones o el envio de respuestas
    res.write("Hola Mundo Aaron Ortiz")
    res.end();
}).listen(8000)