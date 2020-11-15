let header = document.getElementById("category__filters__header");

let body = document.getElementById("category__filters__body");

header.addEventListener("click", () => {
    if (header.classList.contains("category__filters__header--closed")) {
        header.classList.remove("category__filters__header--closed");
        header.classList.add("category__filters__header")
        body.classList.remove("category__filters__body--closed");
        body.classList.add("category__filters__body")

    } else {
        header.classList.remove("category__filters__header");
        header.classList.add("category__filters__header--closed")
        body.classList.remove("category__filters__body");
        body.classList.add("category__filters__body--closed")

    }
})