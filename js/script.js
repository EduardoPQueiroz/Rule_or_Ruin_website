const openModal = (header, modal, body) => {

    modal.style.display = 'block'
    modal.classList.add("active")
    modal.classList.remove("desactive")
    body.style.backgroundColor === 'rgba(0, 0, 0, 0.5)'

}

const closeModal = (header, modal, body) => {
    modal.classList.add("desactive")
    modal.classList.remove("active")

    setTimeout(() => {
        modal.style.display = 'none'
        header.style.display = "flex"
    }, 250)
}

document.addEventListener('click', function (event) {
    const elementoClicado = event.target;
    const header = document.querySelector(".header-content")
    const modal = document.querySelector('.header-content-mobile')
    const body = document.querySelector("body")

    if (elementoClicado.classList.value != 'nav-item-mobile' && elementoClicado.classList.value != 'header-links-content-mobile d-flex flex-column' && elementoClicado.classList.value != 'nav-item' && !elementoClicado.classList.contains('img-btn-modal')) {
        closeModal(header, modal, body)
    }

    if (elementoClicado.classList.contains('img-btn-modal')) {
        openModal(header, modal, body)
    }

});

const changeAlignItens = () => {
    const itens = document.querySelector('.header-links-content-mobile');
    const gridItem = document.querySelectorAll('.grid-item')
    const largura = window.innerWidth;

    if( largura <= 650){
        for (let i = 0; i<gridItem.length; i++){
            gridItem[i].classList.remove('grid-item-pc')
            gridItem[i].classList.add('grid-item-mobile')
        }
    }

    else{
        for (let i = 0; i<gridItem.length; i++){
            gridItem[i].classList.add('grid-item-pc')
            gridItem[i].classList.remove('grid-item-mobile')
        }
    }

    if (largura <= 450) {
        itens.classList.add('padding-itens');
    }
    else {
        itens.classList.remove('padding-itens');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#E84135','#FC490B', '#512BD3', '#FFDF00', '#FF9100', '#2D84CA']


    const items = document.querySelectorAll('.grid-item');
    const largura = window.innerWidth;

    if (largura > 650) {
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('mouseover', function () {
                items[i].style.borderColor = colors[i]
            });
            items[i].addEventListener('mouseout', function () {
                items[i].style.borderColor = '#282828';
            });
        }
    }

});

window.addEventListener('resize', changeAlignItens);