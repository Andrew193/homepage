
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
}