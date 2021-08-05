function ValidarArticulo(){
    var id = document.getElementById("identify");
    var nombre = document.getElementById("nombre");
    var marca = document.getElementById("marca");
    var precio = document.getElementById("precio");

    if(id.value == null || id.value == '' || !/^([0-9])*$/.test(id.value)){
        alert("Ingresa el ID usando números");
        document.getElementById("identify").focus();
        document.getElementById("identificar_id").style.color = "#d11515";
        return false;
    }else if(nombre.value == null || nombre.value == ''){
        alert("Ingresa el nombre del artículo por favor!");
        document.getElementById("nombre").focus();
        document.getElementById("identificar_nombre").style.color = "#d11515";
        return false;
    }else if(marca.value == null || marca.value == ''){
        alert("Ingresa la marca del articulo por favor");
        document.getElementById("marca").focus();
        document.getElementById("identificar_marca").style.color = "#d11515";
        return false;
    }else if(precio.value <=0 || precio.value == null){
        alert("Ingresa el precio por favor");
        document.getElementById("precio").focus();
        document.getElementById("identificar_precio").style.color = "#d11515";
        return false;
    }
}