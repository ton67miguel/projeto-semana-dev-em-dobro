//objetivo-1(Passo1 até 5)
//passo1
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
//passo2
const body = document.querySelector("body");
const imagemBotaoTrocaTema = document.querySelector(".img-botao")
//passo3
botaoAlterarTema.addEventListener("click", () => {
    //objetivo2(Passo 6 até 8)
    //passo6
    const modoescuroAtivo = body.classList.contains("modo-escuro")
   //toggle ele remove e addiciona assim não precisa colocar .remove e .add
    body.classList.toggle("modo-escuro");

    if (modoescuroAtivo) {
        //passo7
        //body.classList.remove("modo-escuro")
        //passo8
        imagemBotaoTrocaTema.setAttribute("src", "./src/img/sun.png")
    } else {
        //passo4
        //body.classList.add("modo-escuro");
        //passo5
        imagemBotaoTrocaTema.setAttribute("src", "./src/img/moon.png")
    }
})