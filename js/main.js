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

const bebidasContainer = document.querySelector('#bebidasContainer')


mainNav.childNodes.forEach(function (element){
  element.addEventListener('click', function(event){
    
    let clickedItemClass = event.target.classList[1];
//    let selectedContainer = '#' + clickedItemClass + 'Container'


    disableNavItems()
    event.target.classList.add(clickedItemClass+'--active')

  })
})


function disableNavItems(){
  bebidas.classList.remove('bebidas--active');
  petiscos.classList.remove('petiscos--active');
  porcoes.classList.remove('porcoes--active');
  sandubas.classList.remove('sandubas--active');
  sobremesas.classList.remove('sobremesas--active');
}