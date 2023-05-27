function ex3(){
    let f1=0; let f2=0; let f3=0; let f4=0; let f5=0; let pf1=0; let pf5=0; let idade; let conta=1;

    while(conta<=8){
        idade= Number(prompt(`Informe idade ${conta}`))

        if ((idade>=0) && (idade<=15)) {
            f1++
        } 
        else if ((idade>=16) && (idade<=30)) {
            f2++
        }
        else if ((idade>=31) && (idade<=45)) {
            f3++
        }
        else if ((idade>=46) && (idade<=59)) {
           f4++ 
        }
        else if (idade>=60) {
            f5++
        }
        else{
            alert("Idade negativa")
        }
        conta++
    }

    pf1= (f1/8)*100
    pf5= (f5/8)*100

    alert(`f1: ${f1}, f2: ${f2}, f3: ${f3}, f4: ${f4}, f5: ${f5}`)
    alert(`% f1: ${pf1}, % f5: ${pf5}`)
}