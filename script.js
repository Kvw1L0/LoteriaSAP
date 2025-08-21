
const numbers = [];
while (numbers.length < 6) {
    const n = Math.floor(Math.random() * 25) + 1;
    if (!numbers.includes(n)) numbers.push(n);
}

const card = document.getElementById("card");

numbers.forEach(num => {
    const div = document.createElement("div");
    div.className = "cell";
    div.textContent = num;
    div.onclick = () => div.classList.toggle("selected");
    card.appendChild(div);
});

function shareWhatsApp() {
    const selected = document.querySelectorAll(".cell.selected");
    const values = Array.from(selected).map(el => el.textContent).join(", ");
    const text = `¡Mis números seleccionados de la Lotería SAP son: ${values}!`;
    const wspUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(wspUrl, "_blank");
}
