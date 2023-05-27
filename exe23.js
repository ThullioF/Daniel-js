function ex23() {
    let salario, novo, ferias, terceiro, meses, opcao;
    do{
        opcao= Number(prompt('escolha uma opçao: \n 1. movo salario \n 2. ferias \n 3. decimo terceiro \n 4. sair'))
        switch (opcao){
            case 1: salario = Number(prompt('informe salario'))
            if ((salario >=0) && (salario < 210)) {
                novo = salario + salario*15/100
            } else if ((salario > 210) && (salario <600)){
                novo = salario + salario*10/100
            } else if(salario >600) {
                novo = salario + salario*5/100
            } else{
                alert('salario negativo'); break
            }
            alert(`novo salario ${novo}`); break

            case 2: salario = Number(prompt('informe salario'))
            ferias = salario + 1/3*salario
            alert(`Férias ${ferias}`); break
            case 3: salario = Number(prompt(`Informe salário`))
                    meses = Number(prompt(`Informe meses`))
                    if ((meses >=1 ) && (meses <=12)){
                        decimoTerceiro = salario + salario * meses/12
                        alert(`Décimo terceiro ${decimoTerceiro}`)
                    }
                    else {
                        alert(`Nro de meses inválido`)
                    }
                    break
            case 4: alert('Encerra o programa'); break
            default: alert('Opção inválida')
        }
    }
    while (opcao != 4)
}