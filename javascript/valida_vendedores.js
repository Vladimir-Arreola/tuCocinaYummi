function ValidarVendedor(){
    var id = document.getElementById("identify");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var apellido_materno = document.getElementById("apellidoMaterno");
    var dia = document.getElementById("selecc_dias").selectedIndex;
    var mes = document.getElementById("selecc_meses").selectedIndex;
    var years = document.getElementById("selecc_year").selectedIndex;

    if(id.value == '' || id.value == null || !/^([0-9])*$/.test(id.value)){
        alert("Ingresa el ID usando números");
        document.getElementById("identify").focus();
        document.getElementById("identificar_id").style.color = "#d11515";
        return false;
    }else if(nombre.value == null || nombre.value == ''){
        alert("Ingresa el nombre del vendedor por favor!");
        document.getElementById("nombre").focus();
        document.getElementById("identificar_nombre").style.color = "#d11515";
        return false;
    }else if(apellido.value == null || apellido.value == ''){
        alert("Ingresa el apellido paterno del vendedor por favor!");
        document.getElementById("apellido").focus();
        document.getElementById("identificar_apellido").style.color = "#d11515";
        return false;
    }else if(apellido_materno.value == null || apellido_materno.value == ''){
        alert("Ingresa el apellido materno del vendedor por favor!");
        document.getElementById("apellidoMaterno").focus();
        document.getElementById("identificar_apellidoMaterno").style.color = "#d11515";
        return false;
    }else if(dia == 0 || dia == null){
        alert("Ingresa el dia de nacimiento del vendedor del vendedor por favor!");
        document.getElementById("identificar_fecha").style.color = "#d11515";
        document.getElementById("selecc_dias").focus();
        return false;
    }else if(mes == null || mes == 0){
        alert("Ingresa el mes de nacimiento del vendedor del vendedor por favor!");
        document.getElementById("identificar_fecha").style.color = "#d11515";
        document.getElementById("selecc_meses").focus();
        return false;
    }else if(years == null || years == 0){
        alert("Ingresa el año de nacimiento del vendedor del vendedor por favor!");
        document.getElementById("identificar_fecha").style.color = "#d11515";
        document.getElementById("selecc_year").focus();
        return false;
    }
    return true;
}

var ejecucion = false;

function Dias(){

    if(!ejecucion){
        ejecucion = true
        var caja = document.getElementById("selecc_dias");

        for(i = 1; i<32; i++){
            opcion = document.createElement("option");
    
            opcion.innerText = i;
    
            opcion.value = i;
            
            caja.appendChild(opcion);
        }   
    }  
} 

var ejecucionMeses = false;

function Meses(){

    if(!ejecucionMeses){
        ejecucionMeses = true
        var caja = document.getElementById("selecc_meses");

        for(i = 1; i<=12; i++){
            opcion = document.createElement("option");
    
            opcion.innerText = i;
    
            opcion.value = i;
            
            caja.appendChild(opcion);
        }   
    }  
} 

var ejecucionYear= false;

function Years(){

    if(!ejecucionYear){
        ejecucionYear = true
        var caja = document.getElementById("selecc_year");

        for(i = 1940; i<=2003; i++){
            opcion = document.createElement("option");
    
            opcion.innerText = i;
    
            opcion.value = i;
            
            caja.appendChild(opcion);
        }   
    }  
} 