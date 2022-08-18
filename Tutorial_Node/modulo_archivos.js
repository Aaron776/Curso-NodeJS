// En NodeJs podemos trabajar con archviso de texto usando el modulo corrspondiente que es FileSystem
const archivo=require('fs'); // este modulo permite crear y leer archivos de texto

archivo.writeFile('./nombre.txt','Aaron Ortiz',function(err){
    if(err){
        console.log("Hubo un error al crear el archivo")
    }else{
        console.log("Archivo creado")
    }
}) // el metodo writeFile() permite crear un archivo y resive tres parametros el primero es el nombre del archivo que queremos crear y en donde queremos crearlo, el segundo ponemos lo que quermeos que tenga dentro ese archivo por ejemplo texto simple y el tercer parametro es una funcion callback el cual permite manejar errores por ejemplo un error al crear ese archivo que queremos




archivo.readFile('./nombre.txt',function(err,datos){
    if(err){
        console.log("Hubo un error al leer el archivo")
    }else{
        console.log(datos.toString())
    }
}) // este metodo permite leer lo que hay dentro de un archivo, recibe como primer parametro el nombbre del archivo que queremos leer, luego como segundo parametro se usa uuna funcion callback el cual permite ller los datos en ese archivo