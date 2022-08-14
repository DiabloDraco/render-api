let picture = document.querySelector("#tipa")
let name = document.querySelector("#name")
let button = document.querySelector("#button")

fetch("https://meowfacts.herokuapp.com/?lang=rus")
.then(res => res.json())
.then(data => render(data.data))

    function render(array) {
        name.textContent = array
    }

    button.addEventListener("click" , function () {
        fetch("https://meowfacts.herokuapp.com/?lang=rus")
        .then(res => res.json())
        .then(data => render(data))
    })