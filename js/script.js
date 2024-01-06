let form = document.getElementById("form");
let nome = document.getElementById("nome");
let preco = document.getElementById("preco");
let descricao = document.getElementById("descricao");
let idProduto = location.search.replace("?id=", "");

form.addEventListener("submit", e => {
    e.preventDefault();
    nome = nome.value;
    preco = preco.value;
    descricao = descricao.value;

    let id = '';
    let method = 'POST';

    if(parseInt(idProduto) >= 0) {
        id = idProduto;
        method = 'PUT';
    }

    fetch(`http://localhost:3000/produtos/${id}`, {
        method,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({nome, preco, descricao})
    }).then(async response => {
        console.log(await response.json())
    })

});



if(parseInt(idProduto) >= 0) {
    fetch(`http://localhost:3000/produtos/${idProduto}`).then(async response => {
        let body = await response.json();
        nome.value = body.nome;
        preco.value = body.preco;
        descricao.value = body.descricao;
    })
}