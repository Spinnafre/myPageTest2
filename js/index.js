var NavIndex = 1;
ShowContet(NavIndex);

function curretNav(index) {
  // Mudar a imagem pelo número
  ShowContet((NavIndex = index));
}

function ShowContet(indexAlterate) {
  var contents = document.getElementsByClassName("Content");
  var nav = document.getElementsByClassName("nav");
  // Quando eu clicar para passar irá apagar tudo
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  for (let i = 0; i < nav.length; i++) {
    // Com o replace eu consigo fazer com que a classe active
    // seja substituída por nada, isso só será possível
    // quando eu clicar no botoes
    nav[i].className = nav[i].className.replace("active", "");
  }
  contents[NavIndex - 1].style.display = "block";
  nav[NavIndex - 1].className += "active";
}




// Slides-----------------------------------------------------------------
var MainIndex = 1;
ShowImage(MainIndex);

setInterval(function () {
  function plusSlides(index) {
    // Mudar as imagens passando o index
    ShowImage((MainIndex += index));
  }

  plusSlides(1);
}, 4000);

function plusSlides(index) {
  // Mudar as imagens passando o index
  ShowImage((MainIndex += index));
}
function slideAtual(index) {
  // Mudar a imagem pelo número
  ShowImage((MainIndex = index));
}

function ShowImage(indexAlterate) {
  var mySlides = document.getElementsByClassName("mySlides");
  var botoes = document.getElementsByClassName("botoes");
  // Se o índice que estou aumentando passar do limite
  // Retorno o valor para o início
  if (indexAlterate > mySlides.length) {
    MainIndex = 1;
  }
  if (indexAlterate < 1) {
    MainIndex = mySlides.length;
  }
  // Quando eu clicar para passar irá apagar tudo
  for (let i = 0; i < mySlides.length; i++) {
    mySlides[i].style.display = "none";
  }
  for (let i = 0; i < botoes.length; i++) {
    // Com o replace eu consigo fazer com que a classe active
    // seja substituída por nada, isso só será possível
    // quando eu clicar no botoes
    botoes[i].className = botoes[i].className.replace("active", "");
  }
  mySlides[MainIndex - 1].style.display = "block";
  botoes[MainIndex - 1].className += " active";

}

// Aside Menu ------------------------------------------------------------
function openMenu(){
  const side=document.querySelector('.sideMenu')
  side.classList.add('open')
}
function closeMenu(){
  const side=document.querySelector('.sideMenu')
  side.classList.remove('open')
}




