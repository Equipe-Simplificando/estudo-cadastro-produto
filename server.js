const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

// Servir os arquivos da pasta "public" (HTML, CSS e JS)
app.use(express.static(path.join(__dirname, 'public')));

// Conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',        // seu usuário do MySQL
    password: '1234',    // sua senha do MySQL
    database: 'loja'     // o banco criado anteriormente
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
    } else {
        console.log('✅ Conectado ao MySQL com sucesso!');
    }
});

// Rota para receber os dados do produto
app.post('/cadastro', (req, res) => {
    const { nome, categoria, preco, quantidade, descricao } = req.body;

    const sql = 'INSERT INTO produtos (nome, categoria, preco, quantidade, descricao) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nome, categoria, preco, quantidade, descricao], (err) => {
        if (err) {
            console.error('Erro ao inserir produto:', err);
            res.status(500).json({ mensagem: 'Erro ao cadastrar produto' });
        } else {
            res.status(200).json({ mensagem: 'Produto cadastrado com sucesso!' });
        }
    });
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('🚀 Servidor rodando em http://localhost:3000');
});
