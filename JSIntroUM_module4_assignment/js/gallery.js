document.addEventListener('DOMContentLoaded', function() {
    addTabIndices();
});

function addTabIndices() {
    let imgs = document.querySelectorAll("body img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute("tabindex", "0");
    }
    console.log("Tab indices added.");
}

function upDate(previewPic){
    document.getElementById("image").style.backgroundImage = 'url("' + previewPic.getAttribute("src") + '")';
    document.getElementById("image").innerHTML = previewPic.getAttribute("alt");
}

function unDo(){
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
