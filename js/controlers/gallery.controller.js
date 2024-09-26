'use strict'

function renderGallery() {
    let strHTML = ''
    gImgs.forEach((img) => {
        strHTML += `<img src="${img.url}" onclick="onImgSelect(${img.id})" />`
    })
    document.querySelector('.select-img-container').innerHTML = strHTML
}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
    goToMemeEditor()

}

function goToMemeEditor() {
    const elMenuItems = document.querySelectorAll('.menu-item')

    elMenuItems.forEach(menuItem => menuItem.textContent === 'Meme Editor' ? menuItem.classList.add("active") : menuItem.classList.remove("active"))

    const elImageGallery = document.querySelector('.image-gallery')
    const elMemeEditor = document.querySelector('.meme-editor')
    const elMyMems = document.querySelector('.my-mems')
    const elAbout = document.querySelector('.about')

    elImageGallery.classList.remove("active")
    elMemeEditor.classList.add("active")

    elMemeEditor.classList.remove('hidden')
    elImageGallery.classList.add('hidden')
    elAbout.classList.add('hidden')
    elMyMems.classList.add('hidden')
}


