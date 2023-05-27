function ex21(){
    let cond1=0, cond2=0, cond3=0, cond4=0, nulos=0, brancos=0;
    let total, opcao;

    do{
     opcao= Number(prompt('escolha uma opção: \n 1. cond 1 \n 2. cond 2 \n 3. cond 3 \n 4. cond 4 \n 5. nulo  \n 6. branca \n 0. sair'))
        switch(opcao){
            case 1: cond1++; break
            case 2: cond2++; break
            case 3: cond3++; break
            case 4: cond4++; break
            case 5: nulos++; break
            case 6: brancos++; break
            case 0: alert('votação encerrada'); break
            default: alert('opção invalida')
        }
    } 
    while(opcao != 0)
    total= cond1 + cond2 + cond3 + cond4 + nulos + brancos
    if (total > 0) {
        alert (`% de votos nulos ${nulos/total*100}`)
        alert (`% de votos brancos ${brancos/total*100}`)
    }else alert('Nenhum voto computado')
}