// Empty JS for your own code to be here

var pi = 3.14159265359;
function volumenCilindro(){
    var radio =  document.getElementById("radiocilindro").value;
    var altura =  document.getElementById("alturacilindro").value;
    console.log(radio, altura);
    var result  = radio*radio*altura*pi*0.001;
    result2 = result.toFixed(2);
    document.getElementById("resultadoCilindro").textContent = result2.toString() + " Litros";
}


function volumenTronco(){
    var radio =  document.getElementById("radio1tronco").value;
    var radio2 =  document.getElementById("radio2tronco").value;
    var altura =  document.getElementById("alturatronco").value;
    result = ((pi*altura*(radio*radio + radio2*radio2 + radio*radio2)/3))*0.001;
    result2 = result.toFixed(2);
    document.getElementById("resultadotronco").textContent = result2.toString() + " Litros";
}

function volumendosTronco(){
    var radio =  document.getElementById("radio1dostronco").value;
    var radio2 = document.getElementById("radio2dostronco").value;
    var radio3 = document.getElementById("radio3dostronco").value;
    var altura1 =  document.getElementById("altura1dostronco").value;
    var altura2 =  document.getElementById("altura2dostronco").value;
    var tronco1  = (pi*altura1*(radio*radio + radio2*radio2 + radio*radio2)/3);
    var tronco2  = (pi*altura2*(radio3*radio3 + radio2*radio2 + radio2*radio3)/3);
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
    var cilindro = radio2*radio2*altura2*pi;
    var tronco2  = (pi*altura3*(radio3*radio3 + radio2*radio2 + radio2*radio3)/3);
    result = (tronco1 + tronco2 + cilindro)*0.001;
    result2 = result.toFixed(2);
    document.getElementById("resultadodostroncocilindro").textContent = result2.toString() + " Litros";
}

function calculoradio(){
    var perimetro =  document.getElementById("perimetro").value;
    var result  = perimetro/(2*pi);
    result2 = result.toFixed(2);
    document.getElementById("resultadoradio").textContent = result2.toString() + " cm de radio";
}