export default class Lazyload{
    static initLazy(element){
        let image = element.querySelector('img');
        if(!image){
            image = element.querySelector('iframe');
        }
        if(image.getAttribute('data-src')){
            image.src = image.getAttribute('data-src');
            image.removeAttribute('data-src');
        }
    }
}