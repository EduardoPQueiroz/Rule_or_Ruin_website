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
    const largura = window.innerWidth;

    if (largura <= 450) { 
        itens.classList.add('padding-itens');
    }
    else{
        itens.classList.remove('padding-itens');
    }
}

window.addEventListener('resize', changeAlignItens);