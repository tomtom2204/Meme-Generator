"use strict"

function onMenuItemClick(elMenuItem) {
    const elMenuItems = document.querySelectorAll('.menu-item')

    elMenuItems.forEach(menuItem => menuItem.classList.remove("active"))
    elMenuItem.classList.add("active")

    const elImageGallery = document.querySelector('.image-gallery')
    const elMemeEditor = document.querySelector('.meme-editor')
    const elMyMems = document.querySelector('.my-mems')
    const elAbout = document.querySelector('.about')

    switch (elMenuItem.textContent) {
        case 'Gallery':
            elImageGallery.classList.remove('hidden')
            elMemeEditor.classList.add('hidden')
            elAbout.classList.add('hidden')
            elMyMems.classList.add('hidden')
            break;
        case 'Meme Editor':
            elMemeEditor.classList.remove('hidden')
            elImageGallery.classList.add('hidden')
            elAbout.classList.add('hidden')
            elMyMems.classList.add('hidden')
            break;
        case 'My Memes':
            elMyMems.classList.remove('hidden')
            elMemeEditor.classList.add('hidden')
            elImageGallery.classList.add('hidden')
            elAbout.classList.add('hidden')
            break;

        case 'About':
            elAbout.classList.remove('hidden')
            elMemeEditor.classList.add('hidden')
            elImageGallery.classList.add('hidden')
            elMyMems.classList.add('hidden')
            break;
    }
}






