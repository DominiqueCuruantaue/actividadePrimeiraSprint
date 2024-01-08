function identificarNumeroInserido() {
    var inputNumero = document.querySelector(".numero").value;
    var resultadoElement = document.querySelector(".resultado");
    
    if (inputNumero.length >= 4 && !isNaN(inputNumero)) { 
        resultadoElement.style.color = "green"; 
        resultadoElement.innerHTML = "Parabéns! O número inserido é válido.";
    } else {

        resultadoElement.style.color = "red"; 
        var mensagem = "O próximo valor deve ser ";
        
        if (inputNumero.length < 4) {
            mensagem += "maior.";
        } else {
            
            mensagem = "Por favor, insira um número válido com pelo menos quatro dígitos.";
        }

    document.querySelector(".resultado").innerHTML = mensagem;
    }
}
