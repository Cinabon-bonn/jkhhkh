const headers = document.getElementsByClassName("collumn"),
    contents = document.getElementsByClassName("content"),
    icons = document.getElementsByClassName("icon");
    



for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", () => {//where the value of i came from
        icons[i].innerHTML = contents[i].getBoundingClientRect().height === 0 ? `<img src="./img/arrowO.svg" alt="">` : `<img src="./img/arrowC.svg" alt="">`;
        contents[i].classList.toggle("content-transition");
    });
}
