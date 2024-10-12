let container = document.querySelectorAll(".hero-banner1-container")
let icons = document.querySelectorAll(".hero-banner1-image-content")
// container.onmousemove = () => {
//     icons.classList.add("activeicons")
// }
container.forEach((container, index) => {
    container.onmousemove = () => {
        icons[index].classList.add("activeicons")
    }
    container.onmouseleave = () => {
        icons[index].classList.remove("activeicons")
    }
})