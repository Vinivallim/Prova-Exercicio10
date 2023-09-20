const express = require("express");
const app = express();
const handlebars = require("express-handlebars").engine;
const bodyParser = require("body-parser")
const post = require("./models/post")

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.render("Index");
});

app.get("/pagina2", (req, res) => {
    res.render("pagina2");
});

app.post("/cadastrar", function(req, res){
    post.create({
        nome: req.body.nome,
        senha: req.body.senha,
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Falha ao cadastrar os dados: " + erro)
    })
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
