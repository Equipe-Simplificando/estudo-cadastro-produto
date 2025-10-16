document.getElementById('formulario').addEventListener('submit', function(acaoDeCadastro) { // aqui monitora o formulario, se for enviado (submit), executa a função
    acaoDeCadastro.preventDefault(); // isso aqui faz o formulário não recarregar a página, o padrao do html é recarregar a página

    const produto = {
        nome: document.getElementById('nome').value,
        categoria: document.getElementById('categoria').value,
        preco: parseFloat(document.getElementById('preco').value), // parseFloat pq o valor vem como string, ai ele converte para número decimal (float)
        quantidade: parseInt(document.getElementById('quantidade').value, 10), // parseInt converte a string para número inteiro (int), o 10 é a base decimal, vi em um site que é importante colocar pq pode dar erro em alguns casos, se caso colocasse 08 ou 09, pq em base octal (base 8) não existe esses números
        descricao: document.getElementById('descricao').value
    } // aqui cria o objeto produto, pegando os valores dos inputs do formulário

    console.log(produto); // exibe o produto (objeto) no console do navegador, só pra ver se tá pegando os valores corretamente
    
    // aqui poderia enviar o objeto produto para um servidor, ou salvar em um banco de dados, etc.
    // mas essa parte eu nao sei fazer :)

    // aqui é a parte mais visual
    document.getElementById('mensagem').innerText = 'Produto Cadastrado!'; // aqui mostra a mensagem de produto cadastrado
    
    this.reset(); // isso aqui limpa o formulário, o this se refere ao próprio formulário que disparou o evento (submit)
});
