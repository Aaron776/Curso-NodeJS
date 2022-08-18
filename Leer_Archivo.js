// Para poder un leer un archivo en NodeJs usamoes el modulo fs que permite la comunicacion con el sistema de archivos del computador y para eso hay dos formas de hacer.
var http=require("http"),
      fs= require("fs");


/* Primer forma es usando el metodo  readFileSync() devuleve el contenido del archivo que queremos leer y dentro de este metodo pasamos como parametro un path, pero solo se usa en version sincrona
var documento=fs.readFileSync("./Leer_Archivo.html") 
http.createServer(function(req,res){ // es comun llamar al primera parametro requ para la solicitu o peticion al servidor y res para la r4espuesta del servidor
    res.write(documento) // en el localhost o servidor puedo ver lo que esta escrito en el archivo Leer_Archivo.html y asi es como podemos leer un archivo con nodeJs
    res.end()   
}).listen(8000)*/

// Segunda Forma  es usando eñ metodo readFile() devuleve el contenido del archivo que queremos leer y dentro de este metodo pasamos como parametro un path y una funcion callback, pero solo se usa en version asincrona la cual es la mas usada en sistios web

http.createServer(function(req,res){
    fs.readFile("./Leer_Archivo.html",function(err,texto){ 
        res.write(texto)
        res.end()
    })
}).listen(8000)














