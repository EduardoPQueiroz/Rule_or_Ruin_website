let isModalOpen = false;

const openModal = (modal, elements) => {
    modal.style.display = 'block';
    modal.classList.add("active");
    modal.classList.remove("desactive");
    isModalOpen = true;

    activateOverlay(elements);
};

const closeModal = (header, modal, elements) => {
    if (!isModalOpen) return;

    modal.classList.add("desactive");
    modal.classList.remove("active");
    isModalOpen = false;

    desactivateOverlay(elements);

    setTimeout(() => {
        modal.style.display = 'none';
        header.style.display = "flex";
    }, 250);
};

document.addEventListener('click', function (event) {
    const elementoClicado = event.target;
    const modal = document.querySelector('.header-content-mobile');
    const header = document.querySelector('.header-content');
    const elements = GetElements();

    const isNavItem = [...document.querySelectorAll('.nav-item-mobile, .nav-item')]
        .some(item => elementoClicado.classList.contains(item.classList[0]));

    if (!isNavItem && !elementoClicado.classList.contains('img-btn-modal')) {
        closeModal(header, modal, elements);
    }

    if (elementoClicado.classList.contains('img-btn-modal')) {
        openModal(modal, elements);
    }
});

const changeAlignItens = () => {
    const button = document.getElementById('read');
    const card = document.querySelector('.content-ds-about-over');
    const itens = document.querySelector('.header-links-content-mobile');
    const gridItems = document.querySelectorAll('.grid-item');
    const largura = window.innerWidth;

    button.innerText = 'Ler Mais';

    card.classList.toggle('active-openHidden', largura <= 990);
    card.classList.toggle('desactive-openHidden', largura > 990);

    gridItems.forEach(item => {
        item.classList.toggle('grid-item-pc', largura > 650);
        item.classList.toggle('grid-item-mobile', largura <= 650);
    });

    itens.classList.toggle('padding-itens', largura <= 450);

    if (largura < 650 && window.innerHeight < 400) {
        gridItems.forEach(item => {
            item.style.fontSize = '2px';
        });
    }
};

function openHidden() {
    const button = document.getElementById('read');
    const card = document.querySelector('.content-ds-about-over');

    if (card.classList.contains('active-openHidden')) {
        card.classList.remove('active-openHidden');
        card.classList.add('desactive-openHidden');
        button.innerText = 'Ler Menos';
    } else {
        card.classList.remove('desactive-openHidden');
        card.classList.add('active-openHidden');
        button.innerText = 'Ler Mais';
    }
}

function aboutSubjective(element) {
    const top = document.getElementById('top');
    const elements = GetElements();

    if (top.classList.contains('top-none')) {
        const materias = document.querySelectorAll('.text-content-subjective');
        const titulo = document.querySelector('.content-title')
        const texto = document.querySelector('.content-text')
        const titulos = [
            'Programação Web',
            'Desenvolvimento de Sistemas',
            'Programação de Aplicativos Mobile',
            'Banco de dados'
        ];
        const conteudo = [
            'Os alunos aprendem a usar a linguagem de programação Java para criar APIs, que são como pontes que permitem que diferentes programas se comuniquem entre si, utilizando o framework Spring Boot.',
            'Nesta matéria, os estudantes aprendem a resolver problemas e criar soluções usando a linguagem Python, que é fácil de entender e muito usada para desenvolver programas.',
            'Os alunos usam uma ferramenta chamada .NET MAUI para criar aplicativos para celulares e tablets. Eles aprendem a fazer aplicações que funcionam bem em diferentes tipos de dispositivos móveis.',
            'Esta disciplina ensina como organizar e gerenciar informações em bancos de dados, utilizando uma linguagem chamada SQL para buscar, adicionar e modificar dados de forma eficiente.'
        ];

        const index = GETElement(element);
        titulo.innerHTML = titulos[index - 1]
        texto.innerHTML = conteudo[index - 1]
        top.classList.remove('top-none');
        // top.classList.remove('desactiveSubjective')
        // top.classList.add('activeSubjective')
        setTimeout(() => {
            activateOverlay(elements);
        }, 400)

    }
    else {
        top.classList.remove('activeSubjective')
        top.classList.add('desactiveSubjective')
        desactivateOverlay(elements)
        setTimeout(() => {
            top.classList.add('top-none');
        }, 490)
    }


}

function GetElements() {
    const main = document.getElementById('main-structure');
    const header = document.querySelector('.header-content');
    const html = document.querySelector('html');
    return [header, main, html];
}

function GETElement(element) {
    let el = element.closest("div");
    return Array.prototype.indexOf.call(el.parentNode.children, el);
}

function activateOverlay(elements) {
    elements.forEach(element => {
        element.classList.add('overlay-active');
    });
}

function desactivateOverlay(elements) {
    elements.forEach(element => {
        element.classList.remove('overlay-active');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    changeAlignItens();
});

window.addEventListener('resize', changeAlignItens);
