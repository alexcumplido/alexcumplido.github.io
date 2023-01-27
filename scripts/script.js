
const btnBioShort = document.getElementById("button-short");
const btnBioMedium = document.getElementById("button-medium");
const btnBioLong = document.getElementById("button-long");
const bios = document.querySelectorAll("#bio");
const buttons = document.querySelectorAll(".about__button");

function removeBios () {
    bios.forEach((element) => element.classList.remove("about__bio--active"));
}
function removeBtnStyles () {
    buttons.forEach((element) => element.classList.remove("about__button--active"));
}

btnBioShort.addEventListener('click', function(event) {
    removeBios();
    removeBtnStyles();
    event.target.classList.add("about__button--active");
    bios[0].classList.add("about__bio--active");
})

btnBioMedium.addEventListener('click', function(event) {
    removeBios();
    removeBtnStyles();
    event.target.classList.add("about__button--active");
    bios[1].classList.add("about__bio--active");
})

btnBioLong.addEventListener('click', function(event) {
    removeBios();
    removeBtnStyles();
    event.target.classList.add("about__button--active");
    bios[2].classList.add("about__bio--active");
})