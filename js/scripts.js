// Empty JS for your own code to be here

var pi = 3.14159265359;

function CalculoVolumenCilindro(radio,altura){
    return radio*radio*altura*pi;
}

function CalculoVolumenTronco(radio,radio2,altura){
    return pi*altura*(radio*radio + radio2*radio2 + radio*radio2)/3;
}

function volumenCilindro(){
    var radio =  document.getElementById("radiocilindro").value;
    var altura =  document.getElementById("alturacilindro").value;
    console.log(radio, altura);
    var result  = CalculoVolumenCilindro(radio,altura)*0.001;
    result2 = result.toFixed(2);
    document.getElementById("resultadoCilindro").textContent = result2.toString() + " Litros";
}


function volumenTronco(){
    var radio =  document.getElementById("radio1tronco").value;
    var radio2 =  document.getElementById("radio2tronco").value;
    var altura =  document.getElementById("alturatronco").value;
    result = CalculoVolumenTronco(radio, radio2, altura)*0.001;
    result2 = result.toFixed(2);
    document.getElementById("resultadotronco").textContent = result2.toString() + " Litros";
}

function volumendosTronco(){
    var radio =  document.getElementById("radio1dostronco").value;
    var radio2 = document.getElementById("radio2dostronco").value;
    var radio3 = document.getElementById("radio3dostronco").value;
    var altura1 =  document.getElementById("altura1dostronco").value;
    var altura2 =  document.getElementById("altura2dostronco").value;
    //var tronco1  = (pi*altura1*(radio*radio + radio2*radio2 + radio*radio2)/3);
    var tronco1  = CalculoVolumenTronco(radio, radio2, altura1);
    var tronco2  = CalculoVolumenTronco(radio2, radio3, altura2);
    result = (tronco1 + tronco2)*0.001;
    result2 = result.toFixed(2);
    document.getElementById("resultadodostronco").textContent = result2.toString() + " Litros";
}

function volumendosTroncocilindro(){
    var radio =  document.getElementById("radio1dostroncocilindro").value;
    var radio2 = document.getElementById("radio2dostroncocilindro").value;
    var radio3 = document.getElementById("radio3dostroncocilindro").value;
    var altura1 =  document.getElementById("altura1dostroncocilindro").value;
    var altura2 =  document.getElementById("altura2dostroncocilindro").value;
    var altura3 =  document.getElementById("altura3dostroncocilindro").value;
    var tronco1  = (pi*altura1*(radio*radio + radio2*radio2 + radio*radio2)/3);
    var tronco1  = CalculoVolumenTronco(radio, radio2, altura1);
    var cilindro  = CalculoVolumenCilindro(radio2,altura2)
    var tronco2  = CalculoVolumenTronco(radio2, radio3, altura3);
    result = (tronco1 + tronco2 + cilindro)*0.001;
    result2 = result.toFixed(2);
    document.getElementById("resultadodostroncocilindro").textContent = result2.toString() + " Litros";
}

function volumencuatroTroncos(){
    var radio1 =  document.getElementById("radio1cuatrotronco").value;
    var radio2 = document.getElementById("radio2cuatrotronco").value;
    var radio3 = document.getElementById("radio3cuatrotronco").value;
    var radio4 = document.getElementById("radio4cuatrotronco").value;
    var radio5 = document.getElementById("radio5cuatrotronco").value;
    var altura1 =  document.getElementById("altura1cuatrotronco").value;
    var altura2 =  document.getElementById("altura2cuatrotronco").value;
    var altura3 =  document.getElementById("altura3cuatrotronco").value;
    var altura4 =  document.getElementById("altura4cuatrotronco").value;
    var tronco1  = CalculoVolumenTronco(radio1, radio2, altura1);
    var tronco2  = CalculoVolumenTronco(radio2, radio3, altura2);
    var tronco3  = CalculoVolumenTronco(radio3, radio4, altura3);
    var tronco4  = CalculoVolumenTronco(radio4, radio5, altura4);
    result = (tronco1 + tronco2 + tronco3 + tronco4)*0.001;
    result2 = result.toFixed(2);
    document.getElementById("resultadocuatrotronco").textContent = result2.toString() + " Litros";
}

function calculoradio(){
    var perimetro =  document.getElementById("perimetro").value;
    var result  = perimetro/(2*pi);
    result2 = result.toFixed(2);
    document.getElementById("resultadoradio").textContent = result2.toString() + " cm de radio";
}