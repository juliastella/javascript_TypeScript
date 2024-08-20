// escorpo lexico

// a função conhece o que foi declarado e tudo que está dentro dela e o que está no "vizinhos dela"

// exemplo

const nome = "Jú";

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = "Ste";
    falaNome();
}

usaFalaNome();