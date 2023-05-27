function ex1(){
    let a, b, c, d, aux

    a= Number(prompt('informe A '))
    b= Number(prompt('informe B '))
    c= Number(prompt('informe C '))
    d= Number(prompt('informe D '))

    let conta= 1

    while (conta<3) {
        if (a>b) {
            aux=a; a=b; b=aux
        }
        if (b>c) {
            aux=b; b=c, c=aux
        }
        if (c>d) {
            aux=c; c=d; d=aux
        }
        conta++
    }
}