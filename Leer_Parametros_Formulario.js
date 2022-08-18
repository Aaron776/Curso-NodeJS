// Para leer los datos que un usaurio manda atgraves de un formulario podria ser  inspeccionando el objeto req

var http=require("http"),
      fs= require("fs");
      
      
      
http.createServer(function(req,res){
    if(req.url.indexOf("favicon.ico")>0){return;}
    fs.readFile("./Leer_Parametros_Formularios.html",function(err,html){ 
        var html_string=html.toString()
        var arreglo_parametros=[],parametros={};
        var variables=html_string.match(/[^\{\}]+(?=\})/g)
        var nombre=""

        if(req.url.indexOf("?")>0){
            var url_data=req.url.split("?")
            var arreglo_parametros=url_data[1].split("&s")
        }

        for(var i = arreglo_parametros.length -1 ; i>=0  ; i--){
            var parametro=arreglo_parametros[i]
            var param_data=parametro.split("=")
            parametros[param_data[0]]=param_data[1]
        }


        for (var i = variables.length -1 ; i>=0  ; i--) {
            var variable=variables[i]
           
           html_string=html_string.replace("{"+variables[i]+"}",parametros[variables[i]])  
        }

        res.write(html_string)
        res.end()
    })
}).listen(8000)