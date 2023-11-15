//JS para as paginas dos produtos alterarem as fotos


function trocarImagem(el) {
  let imgProduto = document.getElementById("imgProduto");
  imgProduto.src = el.src;
}
