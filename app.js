const express=  require('express');
const app = express()
const cors = require('cors');
    
app.use(cors());
app.use(express.json());


// Precisa atualizar os dados para o site Maos dadas

// puxar dados dos produtos
app.get('/produtos',cors(), (req, res, next) => {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'maosdadas'
    });
    connection.query("select username, produto, categoria, valor, descricao, nome, cpf, celular, email from cadastrarprodutos inner join usuario on id_usuario = username;", (error, result) => {
        
        // console.log(res.json({ dados: result }))
        res.json(  result)
    })
    
})

// puxar dados dos servicos
app.get('/servicos',cors(), (req, res, next) => {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'maosdadas'
    });
    connection.query("select username, nome, servico, categoria, valor, descricao, email, celular from cadastrarservico inner join usuario on id_usuario = username;", (error, result) => {
        
        // console.log(res.json({ dados: result }))
        res.json(  result)
    })
    
})
app.get('/login',cors(), (req, res, next) => {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'maosdadas'
    });
    connection.query("select * from usuario;", (error, result) => {
        
        // console.log(res.json({ dados: result }))
        res.json(  result)
    })
    
})



// enviar dados cadastrarprodutos
app.post('/cadastrarprodutos', (req, res) => {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'maosdadas'
    });

   
    let dados = [];

  
    dados.push({
        username: req.body.username, 
        produto: req.body.produto,
        categoria: req.body.categoria,
        valor: req.body.valor,
        descricao: req.body.descricao
        
    })
    // colocando os dados recebidos dentro da nossa tabela
    
    connection.query("INSERT INTO cadastrarprodutos SET?", dados, () => {
        dados = []
        return res.json({ mensagem: "Dados enviados com sucesso" })
        
    })

});

// enviar dados cadastrarservicos
app.post('/cadastrarservicos', (req, res) => {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'maosdadas'
    });

   
    let dados = [];

  
    dados.push({
        
        username: req.body.username,
        servico: req.body.servico, 
        categoria: req.body.categoria,
        valor: req.body.valor,
        descricao: req.body.descricao
        
    })
    // colocando os dados recebidos dentro da nossa tabela
    
    connection.query("INSERT INTO cadastrarservico SET?", dados, () => {
        dados = []
        return res.json({ mensagem: "Dados enviados com sucesso" })
        
    })

});

// enviar dados cadastrar ou cadastrese
app.post('/cadastrese', (req, res) => {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'maosdadas'
    });

   
    let dados = [];

  
    dados.push({

        id_usuario: req.body.id_usuario, 
        nome: req.body.nome,
        cpf: req.body.cpf,
        celular: req.body.celular,
        email: req.body.email,
        senha: req.body.senha 
    })
    // colocando os dados recebidos dentro da nossa tabela
    
    connection.query("INSERT INTO usuario SET?", dados, () => {
        dados = []
        return res.json({ mensagem: "Dados enviados com sucesso" })
        
    })

});

// enviar dados contato
app.post('/contato', (req, res) => {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'maosdadas'
    });

   
    let dados = [];

  
    dados.push({ 
        nome: req.body.nome,
        email: req.body.email,
        mensagem: req.body.mensagem    
    })
    // colocando os dados recebidos dentro da nossa tabela
    
    connection.query("INSERT INTO contato SET?", dados, () => {
        dados = []
        return res.json({ mensagem: "Dados enviados com sucesso" })
        
    })

});

app.listen(3005, ()=>{
    console.log('Servidor ativo');
})
