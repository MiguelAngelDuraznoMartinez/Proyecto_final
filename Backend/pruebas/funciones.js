function saludar(nombre){
    console.log("Hola..... "+nombre);

}

//saludar("Miguel");

var saludar=nombre=>{
    console.log("Hola "+nombre);
}

saludar("Pancho");



var saludo2=(nombre1, nombre2)=>{
    console.log("Hola "+nombre1+" y "+nombre2);
}

saludo2("Pancho, Paco");




var saludo3=(nombre1, nombre2)=>{
    return "Hola "+nombre1+" y "+nombre2;
}

console.log(saludo3("Hugo", "Angel"));


var saludo4=(nombre1)=> "Hola "+nombre1;
console.log(saludo4("Bethoveen")); 

var saludo5 = function(){
    console.log("Hola con funcion anonima");
}
saludo5();

var saludo6 =()=>{
    console.log("Estas en saludo 6");
}

var saludo7 =(nombre="Vivaldi", s)=>{
    console.log("Hola "+ nombre);
    s();
}
saludo7("Vivaldi", saludo6);