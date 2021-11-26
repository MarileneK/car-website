window.onload = function () { 

    // EVENT ON ARROW LEFT/ARROW RIGHT
    let leftArrow = document.getElementsByClassName("fa-caret-left");
    let rightArrow = document.getElementsByClassName("fa-caret-right");
    let image = document.getElementsByClassName("carSmallImage");
    // console.log("leftArrow =>", leftArrow);
    // console.log("rightArrow =>", rightArrow);
    // console.log(image);

    let arrayImage = ["vehicule1.png", "vehicule2.png", "vehicule3.png", "vehicule4.png"];
    // console.log("imagesArray =>", arrayImage);

    for (let y = 0; y < arrayImage.length; y++) {

        let i = 0;
        leftArrow[y].onclick = function () { // CLICK ON LEFT ARROW
            console.log("click gauche");
            i--;
            if (i < 0) {
                i = arrayImage.length - 1;
                console.log("i dans if =>", i);
            }
            image[y].setAttribute("src", `img/${arrayImage[i]}`);
        };


        rightArrow[y].onclick = function () { // CLICK ON RIGHT ARROW
            console.log("click droite");
            i++;
            if (i === arrayImage.length) {
                i = 0;
                console.log("i dans le if =>", i);
            }
            image[y].setAttribute("src", `img/${arrayImage[i]}`);
        };
    }

    // ------------------------------------------------------------
    // MENU
    let menuIcon = document.getElementsByClassName("fa-bars");
    let nav = document.getElementsByTagName("nav");
    // console.log(nav);
    // console.log(menuIcon);

    menuIcon[0].onclick = function () {
        console.log("click on menu");
        nav[0].style.display = "inline";
        menuIcon[0].style.backgroundColor = "white";
    };
    
}

// ------------------------------------------------------------
// CAROUSEL
let header = document.getElementsByTagName("header");
console.log(header);
// console.log(header[0].childNotes[1]);

let backgroundImages = ["background.jpg", "background2.jpg"];

// let img = 0;
// function changeBackgroundImg() {

    // if (header[0].style.backgroundImage === "background.jpg") {
    //     header[0].style.backgroundImage = "background2.jpg"
    // } else {
    //     header[0].style.backgroundImage = "background.jpg"
    // }

    // header[img].setAttribute("src", `img/${backgroundImages[img]}`);
    // img++;
    // if (img == backgroundImages.length) {
    //     img = 0;
    //     console.log("img dans if =>", img);
    // }
// }
// let timer = window.setInterval("changeBackgroundImg()", 1000);

// ------------ // 
// VERSION WITH IMG BACKGROUND WORKING
// let carousel = document.getElementById("backgroundImage");
// // console.log(carousel);

// let backgroundImages = ["background.jpg", "background2.jpg"];

// let img = 0;
// function changeBackgroundImg() {
//     carousel.setAttribute("src", `img/${backgroundImages[img]}`);
//     img++;
//     if (img == backgroundImages.length) {
//         img = 0;
//     }
// }
// let timer = window.setInterval("changeBackgroundImg()", 15000);


// ------------------------------------------------------------

// SCROLL EVENT
window.onscroll = function () {
    // console.log(window.scrollY);
    // alert("Hey");
    let additionalCars = document.getElementsByTagName("aside");
    console.log("additionalCars =>", additionalCars);

    if (window.scrollY > 750) {
        additionalCars[0].style.display = "inline-block;"
    } else {
        additionalCars[0].style.display = "none";
    }

}