import express from "express";
const posts = [
    {
        id:1, 
        descricao: "Teste 1",
        imagem: "https://placecats/millie/300/150"
    },
    {
        id:2, 
        descricao: "Segundo post sobre gatos",
        imagem: "https://placecats/felix/200/300"
    },
    {  
        id: 3,
        descricao: "Imagem aleatória de um gatinho",
        imagem: "https://placecats/random/400/250"
    }
]

const app = express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log("Servidor Rodando");
})

app.get("/posts", (req, res)=> {
    res.status(200).json(posts);
});

function buscarPostPorId(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id)  
    });
    }

app.get("/posts/:id", (req, res)=> {
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});