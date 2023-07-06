var container = document.getElementById("container");
var index = 0;
// showImg(index);

async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/albums");
    let jsonData = await response.json();

    for (let i=0; i< jsonData.length; i++) {
        let gal = document.createElement("div");
        gal.classList.add("gal");

        let album = document.createElement("div");
        album.classList.add("album");
        let albumId = document.createElement("div");
        albumId.classList.add("albumId");
        albumId.innerHTML = jsonData[i].id;
        album.appendChild(albumId);

        let description = document.createElement("div");
        description.classList.add("description");
        description.classList.add("hidden");
        description.innerHTML = jsonData[i].title;

        gal.appendChild(description);
        gal.appendChild(album);
        gal.addEventListener("click", loadPics);
        container.appendChild(gal);
    }
}

async function loadPics(gal) {
    let isOpen = gal.currentTarget.getElementsByClassName("min");
    let wth = gal.currentTarget.getElementsByClassName("album").item(0);
    let content = document.getElementById("content");
    if (isOpen.length === 0) {
        gal.currentTarget.getElementsByClassName("description").item(0).classList.remove("hidden");

        let id = gal.currentTarget.getElementsByClassName("albumId").item(0).innerHTML;
        let response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
        let jsonData = await response.json();

        for (let i = 0; i < jsonData.length; i++) {
            let pic = document.createElement("div");
            pic.classList.add("pic");

            let title = document.createElement("div");
            title.classList.add("title");
            title.innerHTML = jsonData[i].title;

            let min = document.createElement("img");
            min.classList.add("min");
            min.src = jsonData[i].thumbnailUrl;

            min.addEventListener("click", function() {
                lightbox(i);
            });
            wth.appendChild(min);

            let slide = document.createElement("div");
            slide.classList.add("slide");
            let fullPic = document.createElement("img");
            fullPic.src = jsonData[i].url;
            fullPic.alt = jsonData[i].title;

            slide.appendChild(fullPic);
            content.appendChild(slide);
        }
    } else {
        gal.currentTarget.getElementsByClassName("description").item(0).classList.add("hidden");
        for (let i = isOpen.length-1; i >= 0; i--) {
            let child = isOpen.item(i);
            wth.removeChild(child);
        }
        content.innerHTML = '';
    }
}


function lightbox(id) {
    showWindow();
    currentImg(id);
}
function showWindow() {
    document.getElementById("model").style.display = "block";
}

function closeWindow() {
    document.getElementById("model").style.display = "none";
}



function currentImg(i) {
    index=i;
    if(index > 50) index=0;
    if(index < 0) index=50;
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


getData()