import lazyload from "./lazyload";

export default class Single{
    initSingle(element, id){
        const lightboxElement = document.querySelector(`.vanilla-lightbox-${id}`);
        element.setAttribute('data-lightbox', id);
        this.generateSingleDom(element, id);
        element.addEventListener('click', (e) => {
            e.preventDefault();
            lightboxElement.classList.add('show');
            lightboxElement.querySelector('.image').classList.remove('hide');
            lazyload.initLazy(lightboxElement.querySelector('.image'));
        })
    }

    generateSingleDom(element, id){
        const lightboxElement = document.querySelector(`.vanilla-lightbox-${id}`);
        let singleElement = document.createElement('div');
        singleElement.classList.add('gallery');

        const imageUrl = element.getAttribute('href');

        let imageElement = document.createElement('img');

        imageElement.setAttribute('data-src',imageUrl);

        let imageParentElement = document.createElement('div');
        imageParentElement.classList.add('image');
        imageParentElement.classList.add('hide');
        imageParentElement.appendChild(imageElement);

        singleElement.appendChild(imageParentElement)

        lightboxElement.appendChild(singleElement);
    }
}