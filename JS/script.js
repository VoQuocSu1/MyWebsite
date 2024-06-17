let gioithieu = 0
//slider--------------------------------------
const rightbtn = document.querySelector('.bx-chevron-right')
const leftbtn = document.querySelector('.bx-chevron-left')
const imgNuber = document.querySelectorAll('.slider-content-left-top img')
rightbtn.addEventListener ("click", function(){
    gioithieu = gioithieu+1
    if(gioithieu>imgNuber.length-1){
        gioithieu=0
    }
    document.querySelector(".slider-content-left-top").style.right = gioithieu *100+"%"
})
leftbtn.addEventListener ("click", function(){
    gioithieu = gioithieu-1
    if(gioithieu<=0){
        gioithieu=imgNuber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = gioithieu *100+"%"
})
//slider---------------------------
const imgNuberLi = document.querySelectorAll('.slider-content-left-buttom li')
imgNuberLi.forEach(function(imgase,gioithieu){
    imgase.addEventListener("click",function(){
        removeactive ()
        document.querySelector(".slider-content-left-top").style.right = gioithieu *100+"%"
        imgase.classList.add("active")
    })
})
function removeactive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
//slider-------------------------
function imgAuto () {
    gioithieu = gioithieu + 1
    if(gioithieu>imgNuber.length-1){
        gioithieu=0
    }
    removeactive ()
    document.querySelector(".slider-content-left-top").style.right = gioithieu *100+"%"
    imgNuberLi[gioithieu].classList.add("active")
}
setInterval(imgAuto,5000)
