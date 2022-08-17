let comer = prompt("Deseja comer mais coinhas ? S=Sim , N=Nao").toUpperCase()
let conta = 0;

while (comer == "S"){
    conta=conta + 2.50;
    console.log(`Sua conta atual é ${conta}R$`)
    comer=prompt("Deseja comer mais coinhas ? S=Sim , N=Nao")
    
}
console.log (`Sua conta foi: ${conta}R$`)
