function SomaImc(){
     
    const valorAltura = document.getElementById("valorAltura")
    const valorPeso = document.getElementById("valorPeso")

    const peso = Number(valorPeso.value)
    const altura = Number(valorAltura.value)

    calculo = peso / (altura * altura)
    
    document.getElementById("categoria").innerText = "Resultado:" + calculo.toFixed(1)
    
    if(calculo < 16.9){
        document.getElementById("resultado").innerText = "Muito abaixo do peso" 
    }else if(calculo >= 17 && calculo <= 18.4){
        document.getElementById("resultado").innerText = "Abaixo do peso"
    }else if(calculo >= 18.5 && calculo <= 24.9){
       document.getElementById("resultado").innerText = "Peso normal"
    }else if(calculo >= 25 && calculo <= 29.9){
        document.getElementById("resultado").innerText = "Acima do peso"
    }else if(calculo >= 30 && calculo <= 34.9){
        document.getElementById("resultado").innerText = "Obesidade grau I"
    }else if(calculo >= 35 && calculo <= 40){
        document.getElementById("resultado").innerText = "Obesidade grau II"
    }else if(calculo > 40){
        document.getElementById("resultado").innerText = "Obesidade grau III"
    }else{
        document.getElementById("resultado").innerText = "Erro"
    }
    

    
}
