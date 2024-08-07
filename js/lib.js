
function btnEncriptar() {
    if(document.getElementById("textIn").value.length==0){
        document.getElementById("text-warning").innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Debe escribir un texto para poder procesarlo';
    }else{
        let der = document.getElementById("der");
        let der2 = document.getElementById("der2");
        const mensaje = document.getElementById("textIn").value;
        const clave = "ClaveSecreta123";
        const mensajeCifrado = CryptoJS.AES.encrypt(mensaje, clave).toString();
        document.getElementById("textOut").innerHTML = mensajeCifrado;
        
        let hidden = der.getAttribute("hidden");
        der2.classList.remove("hidden");
        der.classList.add("hidden");
    }
}

function btnCopiar() {
    let der = document.getElementById("der");
    let der2 = document.getElementById("der2");
    let hidden = der2.getAttribute("hidden");
    der2.classList.add("hidden");
    der.classList.remove("hidden");

    let copiarTexto = document.getElementById('textOut').innerHTML;
    navigator.clipboard.writeText(copiarTexto);
    document.getElementById("textIn").value = "";
}

function btnDesencriptar(){

    if(document.getElementById("textIn").value.length==0){
        document.getElementById("text-warning").innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Debe escribir un texto para poder procesarlo';
    }else{
        const mensaje = document.getElementById("textIn").value;
        const clave = "ClaveSecreta123";
        const mensajeDescifrado = CryptoJS.AES.decrypt(mensaje, clave).toString(CryptoJS.enc.Utf8);
        document.getElementById("textOut").innerHTML = mensajeDescifrado;

        let der = document.getElementById("der");
        let der2 = document.getElementById("der2");
        let hidden = der.getAttribute("hidden");
        der2.classList.remove("hidden");
        der.classList.add("hidden");
    }
}

function btnLimpiar(){
    document.getElementById("textIn").value = "";
    //document.getElementById('textOut').value = "";
    //navigator.clipboard.writeText("");

    let der = document.getElementById("der");
    let der2 = document.getElementById("der2");
    let hidden = der2.getAttribute("hidden");
    der2.classList.add("hidden");
    der.classList.remove("hidden");
    textArea();
}

function textArea(){
    document.getElementById("text-warning").innerHTML = '&nbsp';
}