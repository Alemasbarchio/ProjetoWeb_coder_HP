const carouselImage1 = document.getElementById("carouselImage1");
const carouselImage2 = document.getElementById("carouselImage2");
const imageContainer = document.getElementById('imageContainer');
const btnAvancar = document.getElementById("btnAvancar");
const ListSinopseFilmeCard1 = document.getElementById("ListSinopseFilmeCard1");
const textSinopsesCard1 = ListSinopseFilmeCard1.getElementsByTagName("li");
const ListSinopseFilmeCard2 = document.getElementById("ListSinopseFilmeCard2");
const textSinopsesCard2 = ListSinopseFilmeCard2.getElementsByTagName("li");
const cardSinopse_Textos = document.getElementById("card-sinopse_Textos");


const imageGroup = [
  ["./src/filmes/Filme1.jpg", "./src/filmes/filme3.jpg"],
  ["./src/filmes/filme4.jpg", "./src/filmes/filme2.jpg"],
  ["./src/filmes/filme5.jpg", "./src/filmes/filme8.jpg"],
  ["./src/filmes/filme6.jpg", "./src/filmes/filme7.jpg"],

];


const updateSinopsesCard1 = (contSinopese) => {

  cardSinopse_Textos.innerHTML = textSinopsesCard1[contSinopese].textContent;
  cardSinopse_Textos.style.color = "white";

}
const updateSinopsesCard2 = (contSinopese) => {
  cardSinopse_Textos.innerHTML = textSinopsesCard2[contSinopese].textContent;
  cardSinopse_Textos.style.color = "white";

}

let contGroup = 0; // contador indice Imagegroup

const updateImages = () => {
  const [image1Src, image2Src] = imageGroup[contGroup];
  carouselImage1.src = image1Src;
  carouselImage2.src = image2Src;
}

// Chamada inicial para exibir as primeiras imagens
updateImages();

btnAvancar.addEventListener("click", () => {
  contGroup = (contGroup + 1) % imageGroup.length;
  updateImages();

});


carouselImage1.addEventListener('mouseover', () => {
  const activeImages = imageGroup[contGroup];
  const index = imageGroup.indexOf(activeImages);
  updateSinopsesCard1(index);

});
carouselImage2.addEventListener('mouseover', () => {
  const activeImages = imageGroup[contGroup];
  const index = imageGroup.indexOf(activeImages);
  updateSinopsesCard2(index);

});


carouselImage1.addEventListener('mouseleave', () => {
  cardSinopse_Textos.innerHTML = "";
})

carouselImage2.addEventListener('mouseleave', () => {
  cardSinopse_Textos.innerHTML = "";
})