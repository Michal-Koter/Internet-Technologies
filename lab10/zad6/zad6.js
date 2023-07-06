function showWindow() {
    document.getElementById("model").style.display = "block";
}

function closeWindow() {
    document.getElementById("model").style.display = "none";
}

var index = 0;
showImg(index);

function currentImg(i) {
    index=i;
    if(index > 3) index=0;
    if(index < 0) index=3;
    showImg(index)
}

function swap(i) {
    index+=i;
    currentImg(index);
}

function showImg(data) {
    let imgs = document.getElementsByClassName("slide");
    let caption = document.getElementById("caption");
    if (data > index) {
        index = 0;
    }
    for (let i=0; i< imgs.length;i++) {
        imgs[i].style.display = "none";
    }
    imgs[index].style.display = "block";
    caption.innerHTML = imgs[index].children[0].alt;
}

