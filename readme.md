# Vanilla Lightbox

## Introduction

##### Lightbox is small javascript library used to overlay images on top of the current page. It's a snap to setup and works on all modern browsers.

##### Supports all major browsers (Google Chrome, Firefox, Safari, IE 11, Edge)
## Installation

#### Install package: 

##### <code>npm i vanilla-lightbox</code>

#### Import package into your JS file as ES6 module: 

##### <code>Import VanillaLightbox from 'vanilla-lightbox'</code>

#### Use Vanilla lightbox:

##### <code>const vanillaLightbox = new VanillaLightbox</code>

#### Use Vanilla lightbox styles (scss):

##### <code>@import "~vanilla-lightbox/src/scss/app.scss";</code>

#### Now support:

##### <ul>
#####   <li>Single Image lightbox</li>
#####   <li>Gallery lightbox</li>
#####   <li>Iframe lightbox</li>
##### </ul>


#### Images are loaded with lazyload on click

    <!-- Gallery -->
    <div class="lightbox" style="width: 100%">
        <a href="https://picsum.photos/600">
            <img src="https://picsum.photos/600" alt="Image" width="300">
        </a>
        <a href="https://picsum.photos/700">
            <img src="https://picsum.photos/700" alt="Image" width="300">
        </a>
        <a href="https://picsum.photos/800" class="lazy">
            <img src="https://picsum.photos/800" alt="Image" width="300">
        </a>
    </div>
    
    <!-- Single -->
    <div class="lightbox" style="width: 100%">
        <a href="https://picsum.photos/600" class="lazy">
            <img src="https://picsum.photos/600" alt="Image" width="300">
        </a>
    </div>
    
    <!-- Iframe -->
    <div class="lightbox iframe" style="width: 100%">
        <a href="https://www.youtube.com/embed/2MpUj-Aua48">
            <img src="https://picsum.photos/600" alt="Image" width="300">
        </a>
    </div>