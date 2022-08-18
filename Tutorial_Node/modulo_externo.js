// Tambien podemos trabajar con modulos propios de NodeJs por ejemplo el modulo Os aunque hay muchos mas modulos que nos sirven para diferentes tareas
const os=require('os'); //se utiliza para proporcionar información sobre el sistema operativo de la computadora. 
console.log(os.platform)
console.log("Mi total de memoria es: "+os.totalmem+" bytes")