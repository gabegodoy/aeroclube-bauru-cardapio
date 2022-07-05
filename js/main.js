/* 
bebidas--active
petiscos--active
porcoes--active
sandubas--active
sobremesas--active 
*/

const bebidas = document.querySelector('#bebidas')
const petiscos = document.querySelector('#petiscos')
const porcoes = document.querySelector('#porcoes')
const sandubas = document.querySelector('#sandubas')
const sobremesas = document.querySelector('#sobremesas')
const mainNav = document.querySelector('#mainNav')

const categoriesContainer = document.querySelectorAll('.category__container')
const bebidasContainer = document.querySelector('#bebidasContainer')
const petiscosContainer = document.querySelector('#petiscosContainer')


mainNav.childNodes.forEach(function (element){
  element.addEventListener('click', function(event){
    
    let clickedItemClass = event.target.classList[1];

    disableNavItems()
    event.target.classList.add(clickedItemClass+'--active')

    disableSections()


    switch (clickedItemClass) {
      case 'bebidas':
        bebidasContainer.style.display = 'block'
        break;
    
      case 'petiscos':
        petiscosContainer.style.display = 'block'
        break;    

    } 
  })
})


function disableNavItems(){
  bebidas.classList.remove('bebidas--active');
  petiscos.classList.remove('petiscos--active');
  porcoes.classList.remove('porcoes--active');
  sandubas.classList.remove('sandubas--active');
  sobremesas.classList.remove('sobremesas--active');
}

function disableSections(){
  categoriesContainer.forEach(function (element){
    element.style.display = 'none'
  })
}