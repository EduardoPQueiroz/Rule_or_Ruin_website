let isModalOpen = false;

const openModal = (modal, elements) => {
    modal.style.display = 'block';
    modal.classList.add("active");
    modal.classList.remove("desactive");
    isModalOpen = true;

    elements.forEach(element => {
        element.classList.add('overlay-active');
    });
}

const closeModal = (header, modal, elements) => {
    modal.classList.add("desactive");
    modal.classList.remove("active");
    isModalOpen = false; 

    elements.forEach(element => {
        element.classList.remove('overlay-active');
    });

    setTimeout(() => {
        modal.style.display = 'none';
        header.style.display = "flex";
    }, 250);
}

document.addEventListener('click', function (event) {
    const elementoClicado = event.target;
    const header = document.querySelector('.header-content');
    const modal = document.querySelector('.header-content-mobile');
    const main = document.getElementById('main-structure');
    const html = document.querySelector('html');
    const elements = [header, main, html];

    const isNavItem = [...document.querySelectorAll('.nav-item-mobile, .nav-item')].some(item => elementoClicado.classList.contains(item.className));

    if (!isNavItem && !elementoClicado.classList.contains('img-btn-modal')) {
        closeModal(header, modal, elements);
    }

    if (elementoClicado.classList.contains('img-btn-modal')) {
        openModal(modal, elements);
    }
});

const changeAlignItens = () => {
    const itens = document.querySelector('.header-links-content-mobile');
    const gridItems = document.querySelectorAll('.grid-item');
    const largura = window.innerWidth;

    gridItems.forEach(item => {
        // item.classList.toggle('grid-item-pc', largura > 650);
        item.classList.toggle('grid-item-mobile', largura <= 650);
    });

    itens.classList.toggle('padding-itens', largura <= 450);

    if(largura<650 && window.innerHeight<400){
        gridItems.forEach(item =>{
            item.style.fontSize = '2px'
        })
    }
}

document.addEventListener('DOMContentLoaded', function () {
    changeAlignItens();
});

window.addEventListener('resize', changeAlignItens);
