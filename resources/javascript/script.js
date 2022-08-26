/* function swapPhoto() {
    let element = document.getElementById('pro-pic');
    if (element.src === 'resources/images/pro_pic.JPG') {
        element.src = 'resources/images/cool_pic.jpg';
    } else {
        element.src = 'resources/images/pro_pic.JPG';
    }
}

let element = document.getElementById('pro-pic');
element.onclick = swapPhoto; */
let element = document.getElementById('pro-pic');
element.onclick = () => {
    if (element.getAttribute('src') === "resources/images/pro_pic.JPG") {
        element.src = "resources/images/cool-pic.jpg";
        element.title = "Click to make professional."
    } else if (element.getAttribute('src') === "resources/images/cool-pic.jpg"){
        element.src = "resources/images/pro_pic.JPG";
        element.title = "Click to make cool."
    }
}