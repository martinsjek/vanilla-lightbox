import lazyload from "./lazyload";

export default class Iframe{
    init(element, id){
        const lightboxElement = document.querySelector(`.vanilla-lightbox-${id}`);
        element.setAttribute('data-lightbox', id);
        this.generateIframeDom(element, id);
        element.addEventListener('click', (e) => {
            e.preventDefault();
            lightboxElement.classList.add('show');
            lightboxElement.querySelector('.image').classList.remove('hide');
            lazyload.initLazy(lightboxElement.querySelector('.image'));
        })
    }

    generateIframeDom(element, id){
        const lightboxElement = document.querySelector(`.vanilla-lightbox-${id}`);
        let singleElement = document.createElement('div');
        singleElement.classList.add('gallery');
        singleElement.classList.add('iframe');
        const iframeUrl = element.getAttribute('href');

        let iframeElement = document.createElement('iframe');
        iframeElement.setAttribute('allowfullscreen','1')
        iframeElement.setAttribute('frameBorder','0')
        iframeElement.setAttribute('data-src',iframeUrl);

        let iframeParentElement = document.createElement('div');
        iframeParentElement.classList.add('image');
        iframeParentElement.classList.add('hide');
        iframeParentElement.appendChild(iframeElement);

        singleElement.appendChild(iframeParentElement)

        lightboxElement.appendChild(singleElement);
    }
}