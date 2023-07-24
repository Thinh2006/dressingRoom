const getEle = (selector) => document.querySelector(selector)

const changing = (selector,src_img) =>{
    getEle(selector).style.background = `url(${src_img}`
    getEle(selector).style.backgroundSize = 'cover'
}