//require();  es un metodo para poder trarer archivos o modulos que vamos a necesitar
var http=require("http");

var manejador=function(solicitud,respuesta){
    console.log("Hola Mundo")
    respuesta.end(); //el metodo es para cerrar la conexion usando el objeto de la respuetsa que viene a ser el segundo parametro
    
};

var servidor=http.createServer(manejador);
servidor.listen(8000)// aqui pongo en que puerto se va aejecutar la aplicacion


