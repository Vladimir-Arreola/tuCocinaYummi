
function Validar(){
    //Obtenemos los elementos del DOM y los guardamos en variables para su uso
    var nombrex = document.getElementById("nombre");
    var gen = document.getElementsByName("genero");
    var ages = document.getElementById("selec_edades").selectedIndex;
    var noticias = document.getElementsByName("noticias");

    //Inicializamos una variable que nos indicará si el usuario ha elegido una opciónde genero
    var sexo = false;

    //Usamos un ciclo for para recorrer todas las opciones que llevan el nombre de "genero", y checamos por cada posición que haya una opción elegida, en ese caso nos retorna true
    for(var i = 0; i<gen.length; i++){
        if(gen[i].checked){
            sexo = true;
            break;
        }
    }


    var caja = false;

    for(var x = 0; x<noticias.length; x++){
        if(noticias[x].checked){
            caja = true;
            break;
        }
    }

   if(nombrex.value == null || nombrex.value == ''){
        alert("Este campo es obligatorio");
        document.getElementById("nombre").focus();
        document.getElementById("identifica_nombre").style.color = "#d11515";
        return false;
       
    }else if(!sexo){
        alert("El campo para elegir el genero es obligatorio");
        document.getElementById("identifica_sexo").style.color = "#d11515";
        return false;
    }else if(ages == 0){
        alert("El campo de edad es obligatorio");
        document.getElementById("identificar_edades").style.color = "#d11515";
        return false;
    }else if(!caja){
        alert("Debes seleccionar algún tema!!!");
        document.getElementById("identificar_noticias").style.color = "#d11515";
        return false;
    }
    return true
}



let contador = 1;

function Aumenta(){
    let contadorx;

    document.getElementById("contax").innerHTML = contador;

    contador++;

    return false;
}

var ejecucion = false;

function Edad(){

        if(!ejecucion){
            ejecucion = true
            var caja = document.getElementById("selec_edades");

            for(i = 18; i<61; i++){
    
                opcion = document.createElement("option");
    
                opcion.innerText = i;
    
                opcion.value = i;
            
                caja.appendChild(opcion);
    
            }
           
        }   

}  

var mostrarEjectudo = false;

function MostrarFormularios(ruta){
    if(!mostrarEjectudo){
        var menu = document.getElementById("menu");

        var opcion1 = document.createElement("a");
        opcion1.innerText = "Clientes";
        opcion1.className = "links link_desplegable";
        opcion1.href = ruta + "clientes.html";
        opcion1.id = "opcion1";
    
        var opcion2 = document.createElement("a");
        opcion2.innerText = "Vendedores";
        opcion2.className = "links link_desplegable";
        opcion2.href = ruta + "vendedores.html";
        opcion2.id = "opcion2";
    
        var opcion3 = document.createElement("a");
        opcion3.innerText = "Artículo";
        opcion3.className = "links link_desplegable";
        opcion3.href = ruta + "articulos.html";
        opcion3.id = "opcion3";

        var boton = document.getElementById("boton_formulario");
    
        boton.className = "links centrar";
    
        menu.appendChild(opcion1);
        menu.appendChild(opcion2);
        menu.appendChild(opcion3);

        mostrarEjectudo = true;
        
    }else{
        var opcion1 = document.getElementById("opcion1");
        var opcion2 = document.getElementById("opcion2");
        var opcion3 = document.getElementById("opcion3");

        opcion1.remove();
        opcion2.remove();
        opcion3.remove();

        mostrarEjectudo = false;
    }

}