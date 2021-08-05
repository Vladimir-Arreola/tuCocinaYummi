function ValidaClientes(){
    var id = document.getElementById("identify");
    var domicilio = document.getElementById("domicilio");
    var razon_social = document.getElementById("rzs");
    var giro = document.getElementById("giro");
    var rfc = document.getElementById("rfc");

    if(id.value == null || id.value == '' || !/^([0-9])*$/.test(id.value)){
        alert("Ingresa el ID usando números");
        document.getElementById("identify").focus();
        document.getElementById("identificar_id").style.color = "#d11515";
        return false;
    }else if(domicilio.value == null || domicilio.value == ''){
        alert("Ingresa el domicilio por favor!");
        document.getElementById("domicilio").focus();
        document.getElementById("identificar_domicilio").style.color = "#d11515";
        return false;
    }else if(razon_social.value == null || razon_social.value == ''){
        alert("Ingresa la razón social por favor!");
        document.getElementById("rzs").focus();
        document.getElementById("identificar_rzs").style.color = "#d11515";
        return false;
    }else if(giro.value == null || giro.value == ''){
        alert("Ingresa el giro por favor!");
        document.getElementById("giro").focus();
        document.getElementById("identificar_giro").style.color = "#d11515";
        return false;
    }else if(rfc.value == null || rfc.value == ''){
        alert("Ingresa el RFC por favor!");
        document.getElementById("rfc").focus();
        document.getElementById("identifica_Rfc").style.color = "#d11515";
        return false;
    }
    return true;
}


