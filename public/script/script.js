document.getElementById('formulario').addEventListener('submit', function (acaoDeCadastro) {
    acaoDeCadastro.preventDefault();

    const produto = {
        nome: document.getElementById('nome').value,
        categoria: document.getElementById('categoria').value,
        preco: parseFloat(document.getElementById('preco').value),
        quantidade: parseInt(document.getElementById('quantidade').value, 10),
        descricao: document.getElementById('descricao').value
    };

    // Envia o produto ao servidor
    fetch('/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produto)
    })
        .then(res => res.json())
        .then(data => {
            document.getElementById('mensagem').innerText = data.mensagem;
            this.reset();
        })
        .catch(err => {
            console.error('Erro ao cadastrar produto:', err);
            document.getElementById('mensagem').innerText = 'Erro ao cadastrar produto.';
        });
});
