'use strict'

var gElCanvas
var gCtx


function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    renderGallery()
    window.addEventListener('resize', resizeCanvas)

}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    // Changing the canvas dimension clears the canvas
    gElCanvas.width = elContainer.clientWidth - 10

    renderMeme()
}

function downloadCanvas(elLink) {
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
    // Set a name for the downloaded file
    elLink.download = 'my-img'
}

function renderMeme() {

    const currentMeme = getMeme()

    const text = currentMeme.lines.length ? currentMeme.lines[0].txt : ''

    const elImg = new Image()
    elImg.src = gImgs.find(img => img.id === currentMeme.selectedImgId).url

    elImg.onload = () => {
        coverCanvasWithImg(elImg)
        currentMeme.lines.forEach((line, idx) => {
            let linePos = getLinePos(idx)
            drawText(line.txt, linePos.x, linePos.y, idx)

        })
    }
}

function getLinePos(lineNum) {

    let y

    switch (lineNum) {
        case 0:
            y = 50
            break
        case 1:
            y = gElCanvas.height - 50
            break
        default:
            y = gElCanvas.height / 2
            break
    }

    return {
        x: gElCanvas.width / 2,
        y
    }
}

// Lets cover a fixed-width canvas using an img
// changing the canvas height
function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function handleKeyPress(ev) {
    if (ev.key === "Enter") {
        ev.preventDefault()
        outOfFocus()
    }
}

function outOfFocus() {
    const inputValue = document.querySelector('.line-input')
    inputValue.blur()
    inputValue.value = ""

}
function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    // Changing the canvas dimension clears the canvas
    gElCanvas.width = elContainer.clientWidth - 10
    if (gMeme) renderMeme()
}

// cool X btn :)
function toggleMenu() {
    document.body.classList.toggle("menu-open")
}


function drawText(text, x, y, selectedLineIdx) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = getStrokeStyle()
    gCtx.fillStyle = getFillStyle()
    gCtx.font = `${getFontSize(selectedLineIdx)}px Arial`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function getStrokeStyle() {
    return document.querySelector('input[name="color-picker-stroke"]').value
}

function getFillStyle() {
    return document.querySelector('input[name="color-picker-fill"]').value
}

function onIncreaseFont() {
    setFontSize(2)
    renderMeme()
}

function onDecreaseFont() {
    setFontSize(-2)
    renderMeme()
}

function onAddLine() {
    addLine()
}

function onSwitchLine() {
    switchLine()
}

function onInput(elInput) {
    setLineTxt(elInput.value)
    renderMeme()
}

function downloadCanvas(elLink) {
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
    // Set a name for the downloaded file
    elLink.download = 'my-img'
}


function onSetFillColor() {
    document.querySelector('.brush').click()
}


function onSetStrokeColor() {
    document.querySelector('.stroke').click()
}


function selectItem(ev) { //Todo

}


