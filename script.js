const MenuContainerTag = document.querySelector(".HamburgerMenuContainer");
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");
const overlayMenuTag = document.querySelector(".overlayMenu");
const liTag = document.getElementsByTagName("li");
MenuContainerTag.addEventListener('click',() => {
  if(MenuContainerTag.classList.contains("isOpened")){
    line2Tag.classList.remove("hideLine2");
    line1Tag.classList.remove("rotate45Deg");
    line3Tag.classList.remove("rotateMinus45Deg");
    MenuContainerTag.classList.remove("isOpened");
    overlayMenuTag.classList.remove("showoverlayMenu");
    for(let i=0;i<liTag.length;i++){
      liTag[i].classList.add("moveliDown");
    
    
  }
  }else{
    line2Tag.classList.add("hideLine2");
    line1Tag.classList.add("rotate45Deg");
    line3Tag.classList.add("rotateMinus45Deg");
    MenuContainerTag.classList.add("isOpened");
    overlayMenuTag.classList.add("showoverlayMenu");
    for(let i=0;i<liTag.length;i++){
      liTag[i].classList.remove("moveliDown");
      liTag[i].classList.add('moveliUp');
      
    }
  }

})