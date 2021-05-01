window.onload = () => {
    document.body.querySelectorAll(".timeline").forEach((value) => {
        value.querySelectorAll("li").forEach((value) => {
            value.children[0].addEventListener("click", (event) => {
                document.body?.querySelector(".Tip")?.remove()
                event.target?.nextSibling?.nextSibling.classList.add("Open")
            })
            value.children[0].addEventListener("mouseover", (event) => {
                const div = document.createElement("div")
                div.innerText = event.target?.nextSibling?.nextSibling.innerHTML
                div.classList.add("Tip")
                event.target.parentNode.append(div)
                value.children[0].addEventListener("mouseout", (event) => {
                    div.remove()
                })

            })
            value.children[1].addEventListener("mouseout", (event) => { event.target.classList.remove("Open") });
        })
    })
    document.body.querySelectorAll("h3").forEach((value) => {
        value.onclick = (event) => event.target.nextElementSibling.classList.toggle("Hide")
    })
}
function toTop() {
    const interval = setInterval(() => {
        window.scrollY > 10 ? window.scrollBy(0, -10) : clearInterval(interval)
    }, 20)
}
function toBottom() {
    const interval = setInterval(() => {
        window.scrollY < document.body.scrollHeight - window.innerHeight ? window.scrollBy(0, 10) : clearInterval(interval)
    }, 20)
}
function saveAsPDF(params) {
   
}

