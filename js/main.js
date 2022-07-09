const bebidas = document.querySelector('#bebidas');
const petiscos = document.querySelector('#petiscos');
const porcoes = document.querySelector('#porcoes');
const sandubas = document.querySelector('#sandubas');
const sobremesas = document.querySelector('#sobremesas');
const mainNav = document.querySelector('#mainNav');
const linesContainer = document.querySelector('#linesContainer');

const categoriesContainer = document.querySelectorAll('.category__container');
const bebidasContainer = document.querySelector('#bebidasContainer');
const petiscosContainer = document.querySelector('#petiscosContainer');
const porcoesContainer = document.querySelector('#porcoesContainer');
const sandubasContainer = document.querySelector('#sandubasContainer');
const sobremesasContainer = document.querySelector('#sobremesasContainer');


mainNav.childNodes.forEach(function (element){
  element.addEventListener('click', function(event){
    
    let clickedItemClass = event.target.classList[1];

    disableNavItems();
    event.target.classList.add(clickedItemClass+'--active');
    hideContainers();
    showContainer(clickedItemClass);
    
  })
})


function disableNavItems(){
  bebidas.classList.remove('bebidas--active');
  petiscos.classList.remove('petiscos--active');
  porcoes.classList.remove('porcoes--active');
  sandubas.classList.remove('sandubas--active');
  sobremesas.classList.remove('sobremesas--active');
}

function hideContainers(){
  categoriesContainer.forEach(function (element){
    element.style.display = 'none'
  })
}

function showContainer(selectedContainer){
  switch (selectedContainer) {
    case 'bebidas':
      bebidasContainer.style.display = 'block'
      break;    
    case 'petiscos':
      petiscosContainer.style.display = 'block'
      break;    
    case 'porcoes':
      porcoesContainer.style.display = 'block'
      break;    
    case 'sandubas':
      sandubasContainer.style.display = 'block'
      break;    
    case 'sobremesas':
      sobremesasContainer.style.display = 'block'
      break;   
  }
}

let newWidth = window.innerWidth;

window.addEventListener('resize', (event) =>{
  newWidth = window.innerWidth
  
  drawHeaderLines(newWidth)

});

drawHeaderLines(newWidth)

function drawHeaderLines(width){
  
  linesContainer.innerHTML = ''

  for (let i = 0; i <= width; i+=70){
  
    let newLine = document.createElement('div')
    newLine.classList.add('vertical-line')

    linesContainer.appendChild(newLine)
  }

}


const loadingPage = document.querySelector('.loading__page');
const mainPage = document.querySelector('#main')

const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) => 
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none';

setVisible(mainPage, false);
setVisible(loadingPage, true);

document.addEventListener('DOMContentLoaded', () =>
  wait(1000).then(() => {
    setVisible(mainPage, true);
    setVisible(loadingPage, false);
  }));