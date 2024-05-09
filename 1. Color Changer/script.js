const bittons = document.querySelectorAll('.buttons')
const Body = document.querySelector("body")

bittons.forEach( (aslibtn) => {
    aslibtn.addEventListener("click", function (box) {
        console.log(box);
        if (box.target.id === "aqua") {
            Body.style.backgroundColor = box.target.id
        }
        if (box.target.id === "red") {
            Body.style.backgroundColor = box.target.id
        }
        if (box.target.id === "yellow") {
            Body.style.backgroundColor = box.target.id
        }
        if (box.target.id === "purple") {
            Body.style.backgroundColor = box.target.id
        }
    })
} )