function imprimirDado(dado) {
    console.log("Outra Tarefa");
    console.log(dado);
}

imprimirDado(function(){
    return 'Ola Mundo'
})