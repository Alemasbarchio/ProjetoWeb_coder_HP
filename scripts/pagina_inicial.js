const messageList = document.getElementById("messageList");// lista mensagens card inicial
const messages = messageList.getElementsByTagName("li");
const imgListCto = document.getElementById("imgListCto"); // imagens status contagem textos
const listImages = imgListCto.getElementsByTagName("li");
let currentMessageIndex = 0;  // contador array list mensagens texto card inicial
let currentImgIndex = 0; // contador array list imagens status
let timeTransitionTxt = 4000; // tempo para transição entre textos 
let activeTransition= true;

// Mostrar a primeira mensagem ao carregar a página

const BtnAvancarMessage = document.getElementById("btnMessageAvancar");
const BtnVoltarMessage = document.getElementById("btnMessageVoltar");

// [ Inicio função transição de texto 
const nextText = () => {
  messages[currentMessageIndex].classList.remove("active");
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;
  messages[currentMessageIndex].classList.add("active");

}

const returnText = () => {
  messages[currentMessageIndex].classList.remove("active");
  currentMessageIndex = (currentMessageIndex - 1 + messages.length) % messages.length;
  messages[currentMessageIndex].classList.add("active");


}
// fim transição de texto]


//[Inicio transição função Imgs status

const transitionNextImg = () => {
  
  currentImgIndex = (currentImgIndex + 1) % listImages.length;
  for (let i = 0; i < listImages.length; i++) {

    if (i === currentImgIndex) {

      listImages[i].style.opacity = 1;
    }
    else {

      listImages[i].style.opacity = 0.3;
    }

  }
}
const transitionBackImg = () => {
  
  currentImgIndex = (currentImgIndex -1 + listImages.length) % listImages.length;
  for (let i = 0; i < listImages.length; i++) {

    if (i === currentImgIndex) {

      listImages[i].style.opacity = 1;
    }
    else {

      listImages[i].style.opacity = 0.3;
    }

  }

}

// fim img status] 
BtnAvancarMessage.addEventListener ('mouseover', () => {
  activeTransition=false;

})
BtnVoltarMessage.addEventListener ('mouseover', () => {
  activeTransition=false;

})

BtnVoltarMessage.addEventListener('mouseleave', () => {

  activeTransition=true;

});
BtnAvancarMessage.addEventListener('mouseleave', () => {

  activeTransition=true;

});

BtnAvancarMessage.onclick = () => {
 nextText();
 transitionNextImg();
 
}

BtnVoltarMessage.onclick = () => {
 returnText();
 transitionBackImg();

}


const timeStart = () => {
  listImages[0].style.opacity=1;
  messages[currentMessageIndex].classList.add("active");
  setInterval(() => {
    if(activeTransition==true){
   nextText();
    transitionNextImg();
    }
  }, timeTransitionTxt);
}

window.addEventListener("load",timeStart);




