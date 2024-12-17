document.getElementById('atualizar-conselho').addEventListener('click', atualizarConselho);
async function gerarConselho() {
    const url = "https://api.adviceslip.com/advice";
    const resposta = await fetch(url);
    const dados = await resposta.json();
    const id = dados.slip.id;
    const conselho = dados.slip.advice;
    return { id, conselho };
}

async function atualizarConselho() {
    try {
        const novoConselho = await gerarConselho();
        document.getElementById('conselho-id').innerText = `ID: ${novoConselho.id}`;
        document.getElementById('conselho-texto').innerText = novoConselho.conselho;
    } catch (error) {
        console.error('Erro ao atualizar o conselho:', error);
    }
}

async function conselhosGerados(){
    const atual = await gerarConselho()
    const atualizado = await atualizarConselho()
}

conselhosGerados()