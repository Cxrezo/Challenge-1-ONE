const botonEncriptar = document.getElementById('botones-encriptar');
const cajaTexto = document.getElementById('cajaTexto-textarea');
const resultadoVacio = document.getElementById('resultado-vacio-contenido'); 
const resultadoLleno = document.getElementById('resultado-lleno-contenido');
const resultadoLlenoTextarea = document.getElementById('resultado-texto');
const botonDesencriptar = document.getElementById('botones-desencriptar');
const botonCopiar = document.getElementById('copiar');


function trabajar() {
    var texto = cajaTexto.value;
    if(texto !== ''){
        if(validar(texto)){
            var textoEncriptado = encriptar(texto)
            resultadoVacio.style.display = 'none'
            resultadoLleno.style.display = 'flex'
            resultadoLlenoTextarea.value = textoEncriptado
        } else {
            alert('Solo se admiten minusculas y sin acentos')
        }
    } else {alert('Texto vacio')}   
};

function encriptar(texto){
    var textosplit = texto.split("")
    var n = 0
    while (n != textosplit.length){
        if(textosplit[n] === 'e'){textosplit[n] = 'enter'};
        if(textosplit[n] === 'i'){textosplit[n] = 'imes'};
        if(textosplit[n] === 'a'){textosplit[n] = 'ai'};
        if(textosplit[n] === 'o'){textosplit[n] = 'ober'};
        if(textosplit[n] === 'u'){textosplit[n] = 'ufat'};
        n++;
    };
    var textoEncriptado = textosplit.join('')
    return textoEncriptado
}

function destrabajar() {
    var texto = cajaTexto.value;
    if(texto !== ''){
        var textoDesencriptado = desencriptar(texto)
        resultadoVacio.style.display = 'none'
        resultadoLleno.style.display = 'flex'
        resultadoLlenoTextarea.value = textoDesencriptado
    } else {alert('Texto vacio')}   
}

function desencriptar(texto){
    var textosplit = texto.split('');
    var textoDesencriptado = [];
    var n = 0;

    while (n != textosplit.length){
        if (textosplit[n] === 'o'){
            if(
                textosplit[n+1] === 'b' &&
                textosplit[n+2] === 'e' &&
                textosplit[n+3] === 'r' 
            ) {
                textoDesencriptado.push(textosplit[n]);
                n = n+4;
            } else {
                alert('Vaya! Parece que el texto no esta encriptado');
                textoDesencriptado = ["E","R","R","O","R"];
                break;
            };
        }    
        else if (textosplit[n] === 'a'){
            if(
                textosplit[n+1] === 'i'
            ){
                textoDesencriptado.push(textosplit[n]);
                n = n+2;
            } else {
                alert('Vaya! Parece que el texto no esta encriptado');
                textoDesencriptado = ["E","R","R","O","R"]
                break;
            };
        }    
        else if (textosplit[n] === 'e'){
            if(
                textosplit[n+1] === 'n' &&
                textosplit[n+2] === 't' &&
                textosplit[n+3] === 'e' &&
                textosplit[n+4] === 'r'
            ){
                textoDesencriptado.push(textosplit[n]);
                n = n+5;
            } else {
                alert('Vaya! Parece que el texto no esta encriptado');
                textoDesencriptado = ["E","R","R","O","R"]
                break;
            };
        }    
        else if (textosplit[n] === 'i'){
            if(
                textosplit[n+1] === 'm' && 
                textosplit[n+2] === 'e' && 
                textosplit[n+3] === 's' 
            ){
                textoDesencriptado.push(textosplit[n]);
                n = n+4;
            } else {
                alert('Vaya! Parece que el texto no esta encriptado');
                textoDesencriptado = ["E","R","R","O","R"]
                break;
            };
        }    
        else if (textosplit[n] === 'u'){
            if(
                textosplit[n+1] === 'f' && 
                textosplit[n+2] === 'a' && 
                textosplit[n+3] === 't' 
            ){
                textoDesencriptado.push(textosplit[n])
                n = n+4
            } else {
                alert('Vaya! Parece que el texto no esta encriptado');
                textoDesencriptado = ["E","R","R","O","R"]
                break;
            }
        } else {
            textoDesencriptado.push(textosplit[n])
            n++}    
    }
    textoDesencriptado = textoDesencriptado.join('')
    return textoDesencriptado
}

function copiar(){
    resultadoLlenoTextarea.select();
    document.execCommand('copy')
};

function validar(texto){
    var esMinuscula = texto.match(/^[a-z\s]+$/);

    if (esMinuscula){
        return true;
    } else {
        return false;
    };
};


botonEncriptar.addEventListener('click', trabajar);
botonDesencriptar.addEventListener('click', destrabajar)
botonCopiar.addEventListener('click',copiar)
