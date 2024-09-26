'use strict'

var gMemes = []

var gImgs = [
    { id: 1, url: "images/meme-imgs (various aspect ratios)/003.jpg", "keywords": [] },
    { id: 2, url: "images/meme-imgs (various aspect ratios)/004.jpg", keywords: [] },
    { id: 3, url: "images/meme-imgs (various aspect ratios)/005.jpg", keywords: [] },
    { id: 4, url: "images/meme-imgs (various aspect ratios)/006.jpg", keywords: [] },
    { id: 5, url: "images/meme-imgs (various aspect ratios)/12.jpg", keywords: [] },
    { id: 6, url: "images/meme-imgs (various aspect ratios)/19.jpg", keywords: [] },
    { id: 7, url: "images/meme-imgs (various aspect ratios)/2.jpg", keywords: [] },
    { id: 8, url: "images/meme-imgs (various aspect ratios)/5.jpg", keywords: ['funny', 'cat'] },
    { id: 9, url: "images/meme-imgs (various aspect ratios)/8.jpg", keywords: [] },
    { id: 10, url: "images/meme-imgs (various aspect ratios)/9.jpg", keywords: [] },
    { id: 11, url: "images/meme-imgs (various aspect ratios)/Ancient-Aliens.jpg", keywords: [] },
    { id: 12, url: "images/meme-imgs (various aspect ratios)/drevil.jpg", keywords: [] },
    { id: 13, url: "images/meme-imgs (various aspect ratios)/img11.jpg", keywords: [] },
    { id: 14, url: "images/meme-imgs (various aspect ratios)/img12.jpg", keywords: [] },
    { id: 15, url: "images/meme-imgs (various aspect ratios)/img2.jpg", keywords: [] },
    { id: 16, url: "images/meme-imgs (various aspect ratios)/img4.jpg", keywords: [] },
    { id: 17, url: "images/meme-imgs (various aspect ratios)/img5.jpg", keywords: [] },
    { id: 18, url: "images/meme-imgs (various aspect ratios)/img6.jpg", keywords: [] },
    { id: 19, url: "images/meme-imgs (various aspect ratios)/leo.jpg", keywords: [] },
    { id: 20, url: "images/meme-imgs (various aspect ratios)/meme1.jpg", keywords: [] },
    { id: 21, url: "images/meme-imgs (various aspect ratios)/One-Does-Not-Simply.jpg", keywords: [] },
    { id: 22, url: "images/meme-imgs (various aspect ratios)/Oprah-You-Get-A.jpg", keywords: [] },
    { id: 23, url: "images/meme-imgs (various aspect ratios)/patrick.jpg", keywords: [] },
    { id: 24, url: "images/meme-imgs (various aspect ratios)/putin.jpg", keywords: [] },
    { id: 25, url: "images/meme-imgs (various aspect ratios)/X-Everywhere.jpg", keywords: [] }
]


var gMeme

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    let line = createLine(txt)
    gMeme.lines[gMeme.selectedLineIdx] = line
}

function setImg(imgId) {
    gMeme = createMeme(imgId)
}


function createMeme(imgId) {
    return {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: []
    }
}

function createLine(txt = '', size = 16, color = 'red') {
    return {
        txt,
        size,
        color
    }
}

function getFontSize(selectedLineIdx) {
    const meme = getMeme()
    return 2 * meme.lines[selectedLineIdx].size
}

function setFontSize(diff) {
    const meme = getMeme()
    if (!meme.lines.length) return
    meme.lines[meme.selectedLineIdx].size += diff
    return meme.lines[meme.selectedLineIdx].size
}

function addLine() {
    const meme = getMeme()
    meme.lines.push(createLine())
    meme.selectedLineIdx = meme.lines.length - 1
}

function switchLine(lineNum = -1) {
    const meme = getMeme()
    if (lineNum > -1) {
        meme.selectedLineIdx = lineNum
        return
    }
    meme.selectedLineIdx = meme.selectedLineIdx != meme.lines.length - 1 ? meme.selectedLineIdx + 1 : 0
}


