var http=require("http"),
      fs= require("fs");

http.createServer(function(req,res){
    fs.readFile("./Leer_Archivo.html",function(err,html){ 
        var html_string=html.toString()
        var variables=html_string.match(/[^\{\}]+(?=\})/g)
        var nombre="Aaron Ortiz"

        for (var i = variables.length -1 ; i>=0  ; i--) {
           var valor=eval(variables[i])
           html_string=html_string.replace("{"+variables[i]+"}",valor)  
        }

        res.write(html_string)
        res.end()
    })
}).listen(8000)