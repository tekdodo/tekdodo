// OBJETOS
let lanches = [
    {
     nome : "x-burguer",
     preco: 50,
     igredientes:["pão", "queijo", "hambúrguer"]
  },
  {
    nome : "x-salada",
    preco: 64,
    igredientes:["pão", "queijo", "hambúrguer", "salada"]
  },
  {  
     nome : "x-tudo",
     preco: 320,
     igredientes:["pão", "queijo", "hambúrguer", "salada", "tudo"]

  }
]
console.log("nome:" + lanches[0].nome + "-Preço:"+lanches[0].preco);
console.log("igredientes:"+lanches[0].igredientes);
//node nome_arquivo.js