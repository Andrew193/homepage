window.onload = () => {
    document.body.querySelectorAll(".timeline").forEach((value) => {
        value.querySelectorAll("li").forEach((value) => {
            value.children[0].addEventListener("click", (event) => {
                document.body?.querySelector(".Tip")?.remove()
                event.currentTarget?.nextSibling?.nextSibling.classList.add("Open")
            })
            value.children[0].addEventListener("mouseover", (event) => {
                if(!event.currentTarget.parentNode.children[1].classList.contains("Open")){
                const div = document.createElement("div")
                div.innerText = event.currentTarget?.nextSibling?.nextSibling.innerHTML
                div.classList.add("Tip")
                event.currentTarget.parentNode.append(div)
                value.children[0].addEventListener("mouseout", (event) => {
                    div.remove()
                })
            }
            })
            value.children[1].addEventListener("mouseout", (event) => { event.currentTarget.classList.remove("Open") });
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

let tooltipElem;

document.onmouseover = function(event) {
  let target = event.target;
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;
  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);
  let coords = target.getBoundingClientRect();
  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; 
  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { 
    top = coords.top + target.offsetHeight + 5;
  }
  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function(e) {

  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }

};