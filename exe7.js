function ex7(){
    let idade, altura, peso;
    let idade50=0; let somaAltura=0;
    let contaALtura=0; let peso40=0;

    for(let conta=1; conta<=5; conta++){
        idade=Number(prompt("informe idade"))
        altura=Number(prompt("informe altura"))
        peso=Number(prompt("informe peso"))

        if (idade>50) {
            idade50++
        }
        else if (idade>=10 && idade<=20) {
            somaAltura= somaAltura+altura
            contaALtura++
        }
        if (peso<40) {
            peso40++
        }
    }

    alert('idade>50 ${idade50}')
    alert('media altura com 10<=idade<=20 ${somaAltura/contaALtura}')
    alert('% peso<40 ${peso40/5*100}')
}